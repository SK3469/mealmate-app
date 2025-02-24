import mongoose from "mongoose";
import { User } from "./user.model";

export interface IRestaurent {
    user:mongoose.Schema.Types.ObjectId;
    restaurantName:string;
    city:string;
    country:string;
    deliveryTime:number;
    cuisines:string[];
    imageUrl:string;
    menus:mongoose.Schema.Types.ObjectId[];

}
export interface IRestaurentDocument extends IRestaurent ,Document {
    createdAt:Date;
    updatedAt:Date;
}
 const restaurantSchema= new mongoose.Schema<IRestaurentDocument>({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    restaurantName:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    deliveryTime:{
        type:Number,
        required:true
    },
    cuisines:[{
        type:String,
        required:true
    }],
    menus:[{
        type:String,
        ref:'Menu',
        required:true
    }],
    imageUrl:{
        type:String,
        required:true
    }
    

 })
 export const Restaurant = mongoose.model("Restaurant", restaurantSchema);