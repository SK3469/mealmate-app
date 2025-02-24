import { Response } from "express";
import jwt from "jsonwebtoken";
import { IUserDocument } from "../models/user.model";

export const generateToken = (res: Response, user: any) => {
    if (!process.env.SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined in environment variables");
    }
    
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.cookie("token", token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', 
        maxAge: 24 * 60 * 60 * 1000 
    });
    
    return token;
};


/*
import { Response } from "express";
import jwt from "jsonwebtoken";
import { IUserDocument } from "../models/user.model";

export const generateToken = (res: Response, user: IUserDocument) => {
    if (!process.env.SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined in environment variables");
    }
    
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.cookie("token", token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'strict', 
        maxAge: 24 * 60 * 60 * 1000 
    });
    
    return token;
};

*/