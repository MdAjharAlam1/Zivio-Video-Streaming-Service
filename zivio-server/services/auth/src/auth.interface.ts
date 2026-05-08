import { Document } from "mongoose"

export interface AuthModelInterface extends Document {
    fullname:string,
    email:string,
    mobile:string
    refreshToken: string,
    expires_at: Date
}

export interface AuthPayloadInterface {
    fullname:string,
    email:string,
    mobile:string
}

export interface MessageInterface {
    message:string
}