import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.post('/signup', body("email").isEmail(),body("password").isLength({min: 5}), async (req, res ) => {
    const validationErrors = validationResult(req)
    const {email, password} = req.body;
    res.json({email, password})
})

export default router