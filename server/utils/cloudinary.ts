import {v2 as cloudlinery}from "cloudinary";

cloudlinery.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

export default cloudlinery;