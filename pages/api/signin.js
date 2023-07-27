const Item = require('../../models/item')
import dbConnect from '../../utils/dbConnect'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

dbConnect();

// validate each field please 
// also research how to tell browser to redirect to the home page while still authenticating. This gives the user the illusion of speediness. 
// For example: Instagram would get you to main page while the content is only loaded when the auth job is finished. 

export default async (req, res) => {
    const { name, password } = req.body;

    try {
        const theUser = await Item.users.findOne({ name }).lean();

        if (theUser.name && theUser.password) {
            if (!(await compare(password, theUser.password))) {
                return res.status(401).json({ message: "Sorry your password or name is invalid" })
            }

            const claims = {
                name: theUser.name,
                email: theUser.email,
                nationality: theUser.nationality,
                mod: theUser.mod ? theUser.mod : false
            }
            var token = sign(claims, process.env.JWT_SECRET_KEY, { expiresIn: '200h' })
            console.log(`token = ${token}`)

            res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                httpOnly: true,
                maxAge: 3600,
                sameSite: 'strict',
                secure: process.env.NODE_ENV !== 'development',
                path: '/'
            }))

            res.status(200).json({
                message: "Alright buckle up",
                authToken: token,
                mod: claims.mod
            })
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Sorry there's smth wrong from the server. " + error })
    }
}

// nlechoppa 
// choppa@gmail.com
// shottaflowiscomingout


