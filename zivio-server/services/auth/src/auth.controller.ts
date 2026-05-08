import {  Request, Response } from "express";
import * as authService from "./auth.service"


export const signup = async(req:Request, res:Response)=>{
    try {
        const auth = await authService.signup(req.body)

        return res.json(auth)
        
    } catch (error) {
        
        if(error instanceof Error){
            return res.status(500).json({
                message: error.message
            })
        }
    }
}