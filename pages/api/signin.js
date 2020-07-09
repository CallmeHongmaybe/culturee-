const Item = require('../../models/item')
import dbConnect from '../../utils/dbConnect'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

dbConnect();

// validate each field please 

export default async (req, res) => {
    const { method } = req;
    const { name, password } = req.body;

    switch (method) {
        case 'POST':
            try {
                const theUser = await Item.users.findOne({ name: name }).lean();

                if (theUser.name && theUser.password) {
                    await compare(password, theUser.password)
                    const claims = {
                        name: theUser.name,
                        email: theUser.email, 
                    }
                    var token = sign(claims, process.env.JWT_SECRET_KEY, { expiresIn: '200h' }) 
                    console.log(token)
      
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
                        })
                    }
            }
            catch {
                res.status(401).json({message: "Sorry your password or name is invalid"})
                console.log("Sorry your password or name is invalid")
            }
            break;
        default:
            res.status(200).json({ message: "More methods comming soon" })
            break;
    }
}

// nlechoppa 
// choppa@gmail.com
// shottaflowiscomingout


