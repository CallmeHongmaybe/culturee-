const Item = require('../../models/item')
import dbConnect from '../../utils/dbConnect'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

dbConnect();

// validate each field please

export default async (req, res) => {
    const { name, email, nationality, password } = req.body;


    try {
        hash(password, 10, async (err, encryptedPass) => {
            if (!err) {
                await Item.users.create({
                    name: name,
                    email: email,
                    nationality, nationality,
                    password: encryptedPass
                })
            }
            else {
                console.log(err)
            }
        })

        const claims = {
            name: name,
            email: email,
        }

        var token = sign(claims, process.env.JWT_SECRET_KEY, { expiresIn: '200h' })

        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            httpOnly: true,
            maxAge: 3600,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
            path: '/'
        }))

        res.status(201).json({ message: "Ok welcome in" })
    }

    catch (error) {
        res.status(401).json({ message: error })
    }

}




