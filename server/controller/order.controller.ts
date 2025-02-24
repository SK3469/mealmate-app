import { Request, Response } from "express";
import { Restaurant } from "../models/restaurant.model";
import { Order } from "../models/order.model";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type CheckoutSessionRequest = {
    cartItems: {
        menuId: string;
        name: string;
        image: string;
        price: number;
        quantity: number;
    }[],
    deliveryDetails: {
        name: string;
        email: string;
        address: string;
        city: string
    },
    restaurantId: string;
}

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find({ user: req.id }).populate('user').populate('restaurant');
        return res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch orders" });
    }
}

export const createCheckoutSession = async (req: Request, res: Response) => {
    try {
        const checkoutSessionRequest: CheckoutSessionRequest = req.body;
        const restaurant = await Restaurant.findById(checkoutSessionRequest.restaurantId).populate('menu');
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found.",
                success: false
            });
        }

        const order = new Order({
            restaurant: restaurant._id,
            user: req.id,
            deliveryDetails: checkoutSessionRequest.deliveryDetails,
            cartItems: checkoutSessionRequest.cartItems,
            status: 'pending',
        });

        // Set line items
        const menuItems = restaurant.menus;
        const lineItems = createLineItems(checkoutSessionRequest, menuItems);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['GB', 'US', 'CA']
            },
            line_items: lineItems,
            success_url: `${process.env.FRONTEND_URL}/order/status`,
            cancel_url: `${process.env.FRONTEND_URL}/cart`,
            metadata: {
                orderId: order._id.toString(),
                images: JSON.stringify(menuItems.map((item: any) => item.image))
            }
        });

        if (!session.url) {
            return res.status(400).json({ message: "Error while creating session", success: false });
        }

        await order.save();
        return res.status(200).json({ session, success: true });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return res.status(500).json({ success: false, message: "Failed to create checkout session" });
    }
}

export const createLineItems = (checkoutSessionRequest: CheckoutSessionRequest, menuItems: any) => {
    try {
        // Create line items
        const lineItems = checkoutSessionRequest.cartItems.map((cartItem) => {
            const menuItem = menuItems.find((item: any) => item._id === cartItem.menuId);
            if (!menuItem) throw new Error(`Menu item with id ${cartItem.menuId} not found.`);
            return {
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: menuItem.name,
                        images: [menuItem.images],
                    },
                    unit_amount: menuItem.price * 100
                },
                quantity: cartItem.quantity,
            };
        });
        return lineItems;
    } catch (error) {
        console.error("Error creating line items:", error);
        throw error; // Re-throw to let the caller handle this error
    }
}

// import { Request, Response } from "express";
// import { Restaurant } from "../models/restaurant.model";
// import { Order } from "../models/order.model";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY!);

// type CheckoutSessionRequest = {
//     cartItems: {
//         menuId: string;
//         name: string;
//         image: string;
//         price: number;
//         quantity: number;
//     }[],
//     deliveryDetails: {
//         name: string;
//         email: string;
//         address: string;
//         city: string
//     },
//     restaurantId: string;
// }

// export const getOrders = async (res:Response , req:Request)=>{
//     try {
//         const orders = await Order.find({user:req.id}).populate('user').populate('restaurant')
//         return res.status(200).json({success:true , orders});
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const createCheckoutSession = async (req: Request, res: Response) => {
//     try {
//         const checkoutSessionRequest: CheckoutSessionRequest = req.body;
//         const restaurant = await Restaurant.findById(checkoutSessionRequest.restaurantId).populate('menu');
//         if (!restaurant) {
//             return res.status(404).json({
//                 message: "Restaurnat not found.",
//                 success: false
//             })
//         }

//         const order = new Order({
//             restaurant: restaurant._id,
//             user: req.id,
//             deliveryDetails: checkoutSessionRequest.deliveryDetails,
//             cartItems: checkoutSessionRequest.cartItems,
//             status: 'pending',

//         });
//         //setting line items..
//         const menuItems = restaurant.menus;
//         const lineItems = createLineItems(checkoutSessionRequest, menuItems);

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types:['card'],
//             shipping_address_collection:{
//                 allowed_countries:['GB','US','CA']
//             },
//             line_items:lineItems,
//             success_url:`${process.env.FRONTEND_URL}/order/status`,
//             cancel_url:`${process.env.FRONTEND_URL}/cart`,
//             metadata:{
//                 orderId:order._id.toString(),
//                 images:JSON.stringify(menuItems.map((item:any)=>item.image))
//             }
//         })

//         if(!session.url){ 
//             return res.status(400).json({message:"Error while creating session" ,success:false});
//         }
// await order.save();
// return res.status(200).json({session , success:true});
//     } catch (error) {

//     }
// }

// export const createLineItems = (checkoutSessionRequest: CheckoutSessionRequest, menuItems: any) => {
//     try {
//         //create lineItems..
//         const lineItems = checkoutSessionRequest.cartItems.map((cartItems) => {
//             const menuItem = menuItems.find((item: any) => item._id === cartItems.menuId);
//             if (!menuItem) throw new Error(`Menu item id not found.`)
//             return {
//                 price_data: {
//                     currency: 'INR',
//                     product_data: {
//                         name: menuItem.name,
//                         images: [menuItem.images],
//                     },
//                     unit_amount: menuItem.price * 100
//                 },
//                 quantity:cartItems.quantity,
//             }
//         })
//         // return lineItems..
//         return lineItems;
//     } catch (error) {

//     }
// }