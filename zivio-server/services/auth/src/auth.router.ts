import {Router, Request, Response} from "express"
import { signup } from "./auth.controller"
const AuthRouter = Router()

AuthRouter.post("/signup",signup )

export default AuthRouter