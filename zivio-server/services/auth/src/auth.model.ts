import { Schema, model } from "mongoose"
import { AuthModelInterface } from "./auth.interface"
import{v4 as uuid} from "uuid"
import { throws } from "assert"
import moment from "moment"

const schema = new Schema<AuthModelInterface>({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    },
    expires_at:{
        type:Date
    }
	
}, {timestamps: true})

schema.pre('save', function(next){
    this.refreshToken = uuid()
    this.expires_at = moment().add("1","M").toDate()
    next()
})

const AuthModel = model<AuthModelInterface>("Auth", schema)

export default AuthModel