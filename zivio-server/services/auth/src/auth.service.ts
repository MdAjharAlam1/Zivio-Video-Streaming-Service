import { AuthPayloadInterface, MessageInterface } from "./auth.interface"
import AuthModel from "./auth.model"

export const signup = async(body:AuthPayloadInterface):Promise<MessageInterface>=>{
    await AuthModel.create(body)

    return {message:"Signup Successfully"}
}

export const sendOtp = async()=>{
    
}