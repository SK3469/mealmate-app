import { z } from "zod";

export const restaurantFormSchema = z.object({
    restaurantName: z.string().nonempty({ message: "Restaurant Name is required" }),
    city: z.string().nonempty({ message: "City name is required" }),
    country: z.string().nonempty({ message: "Country name is required" }),
    deliveryTime: z.number().min(0, { message: "Delivery time can't negitive" }),
    cuisines:z.array(z.string()),
    imageFile: z.instanceof(File).optional().refine((file) => file?.size !== 0, { message: "Image file required"}),
});

export type RestaurantFormSchema = z.infer<typeof restaurantFormSchema>;




