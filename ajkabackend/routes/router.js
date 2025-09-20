import express from 'express'
import { signupController } from '../controller/signUpController.js'
import { loginController } from '../controller/loginController.js'

const router = express.Router()

router.post("/signup",signupController)
router.post("/login", loginController)

export default router;