const Item = require('../../models/item')
import { decode, sign } from 'jsonwebtoken';
import dbConnect from '../../utils/dbConnect'
import cookie from 'cookie'
dbConnect();

// validate each field please

export default async (req, res) => {
    var { email, nationality } = req.body

    // decode the auth token to get the name
    let decodedAuthCookie = decode(req.cookies.auth);
    var { name, mod, iat, exp } = decodedAuthCookie;

    const claims = {
        name, email, nationality, mod, iat, exp
    }
    // finally we can compare the nationality of the user name and the country that the user tries to interact with 
    try {
        await Item.users.updateOne({ name }, {
            $set: {
                email, nationality
            }
        },
            { safe: true, upsert: true },
            function (err) {
                console.log(err)
            }
        )

        var token = sign(claims, process.env.JWT_SECRET_KEY)
        console.log(`claims = ${JSON.stringify(claims)}`)

        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            httpOnly: true,
            maxAge: 3600,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
            path: '/'
        }))

        res.status(200).json({
            message: `User ${name} info has been updated`,
        })
        res.end()
    } catch (error) {
        res.status(500).json({
            message: "Sorry there's sth wrong from the server. Error code " + error,
        });
    }
}





