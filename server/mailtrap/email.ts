import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import {client  , sender} from "./mailtrap"

export const sendVerificationEmail = async( email:string , verficationToken :string)=>{
    const recipient = [{email}];
    try {
        const res = await client.send({
            from:sender ,
            to:recipient,
            html:htmlContent.replace("{verificationToken}", verficationToken),
            subject:'verify your email.',
            category:'Email Verification.',
        }) ;
    } catch (error) {
        console.log(error)
        throw new Error ("Failed to send email.")
    }
}

export const sendWelcomeEmail = async( email:string , name :string)=>{
    const recipient = [{email}];
    const htmlContent =generateWelcomeEmailHtml(name);
    try {
        const res = await client.send({
            from:sender ,
            to:recipient,
            subject:'Welcome to MealMate.',
            html:htmlContent,
            template_variables:{
                company_info_name: "MealMate",
                name:name,
            }
        }) ;
    } catch (error) {
        console.log(error)
        throw new Error ("Failed to send welcome email.")
    }
}


export const sendPasswordResetEmail = async( email:string , resetURL :string) =>{
    const recipient = [{email}];
    const htmlContent =generatePasswordResetEmailHtml(resetURL);
    try {
        const res = await client.send({
            from:sender ,
            to:recipient,
            subject:'Reset Your Password.',
            html:htmlContent,
           category:"Reset Password"
        }) ;
    } catch (error) {
        console.log(error)
        throw new Error ("Failed to reset password.")
    }
}
export const sendResetSuccessEmail = async( email:string) =>{
    const recipient = [{email}];
    const htmlContent =generateResetSuccessEmailHtml();
    try {
        const res = await client.send({
            from:sender ,
            to:recipient,
            subject:'Password Reset Successfully.',
            html:htmlContent,
           category:"Reset Password"
        }) ;
    } catch (error) {
        console.log(error)
        throw new Error (" Failed to send  Password  success email.")
    }
}