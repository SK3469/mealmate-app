// mongopassword= yKBVbFX48atewNsf
// username=sunilk3469
import mongoose from "mongoose"

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI !);
        console.log('mongoDB connected.')
    } catch (error) {
        
    }
}
export default connectDB;