import express, { Request, Response } from "express"
import { Restaurant } from "../models/restaurant.model";
import uploadImageOnCloudinary from "../utils/imageUpload";
import multer from "multer";
import { Order } from "../models/order.model";
export const createRestaurant = async (res: Response, req: Request) => {
    try {
        const { restaurantName, city, country, price, deliveryTime, cuisines } = req.body;
        const file = req.file;
        const restaurant = await Restaurant.findOne({ user: req.id });
        if (restaurant) {
            return res.status(400).json({
                message: 'Restaurant name already exist for this user.',
                success: false
            })
        }
        if (!file) {
            return res.status(400).json({
                message: "Image is required.",
                success: false
            })
        }
        const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File);
        await Restaurant.create({
            user: req.id,
            restaurantName,
            city,
            country,
            deliveryTime,
            cuisines: JSON.parse(cuisines),
            imageUrl
        })
return res.status(201).json({
    success:true,
    message:"Restaurant Added Successfully.",
})
    } catch (error) {

    }
}

//getRestaurant Api
export const getRestaurant =async (res: Response, req: Request) => {
    try {
        const restaurant = await Restaurant.find({user:req.id});
        if(!restaurant){
            return res.status(404).json({
                message:"Restaurant not found.",
                success:false
            })
        }
        return res.status(200).json({
            restaurant,
            success:true
        })

    } catch (error) {

    }
}//update Restaurant Api.

export const updateRestaurnat = async(res: Response, req: Request) => {
    try {
        const {restaurantName,city,country,deliveryTime,cuisines} = req.body;
        const file = req.file;
const restaurant = await Restaurant.findOne({user:req.id});
if(!restaurant){
    return res.status(404).json({
        message:"Restaurant not found.",
        success:false
    })
}
//updating all data's
restaurant.restaurantName =restaurantName,
restaurant.city =city,
restaurant.country =country,
restaurant.deliveryTime =deliveryTime,
restaurant.cuisines =cuisines;

if(file){
    const imageUrl =await uploadImageOnCloudinary(file as Express.Multer.File);
restaurant.imageUrl = imageUrl;
}
await restaurant.save();
return res.status(200).json({
    success:true ,
    message:"Restaurant Updated",
    restaurant
})
    } catch (error) {

    }
}

//Get Restaurant Order...
export const getRestaurantOrder =async (res: Response, req: Request) => {
    try {
const restaurant = await Restaurant.findOne({user:req.id});
if(!restaurant){
    return res.status(404).json({
        message:"Restaurant not found." ,
        success:false
    })
}
const orders = await Order.findOne({restaurant:restaurant._id}).populate('restaurant').populate('order');
return res.status(200).json({
    success:true,
    orders
})

    } catch (error) {

    }
}
// export const user = (res: Response, req: Request) => {
//     try {

//     } catch (error) {

//     }
// }
// export const user = (res: Response, req: Request) => {
//     try {

//     } catch (error) {

//     }
// }