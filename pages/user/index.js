import { decode } from "jsonwebtoken";
import cookie from 'cookie'
// import Items from '../../models/item'
// import dbConnect from '../../utils/dbConnect'
import Grid from '@material-ui/core/Grid'
import { GetAvatar } from '../../public/logo'

export default function EditUser({ name, email, nationality }) {
    return (
        <Grid container component="main">
            <Grid item xs={false} sm={4} md={4}>
                <div className="border-b-2 flex flex-col justify-center items-center p-5">
                    <GetAvatar />
                    <p className="text-lg font-bold text-center">Hi {name}</p>
                </div>
                <div className="text-xl font-bold flex flex-col text-center">
                    <a className="hover:text-red-600 hover:underline">Customize your feed</a>
                    <a className="hover:text-red-600 text-red-600">Account settings</a>
                </div>
            </Grid>
            <Grid item xs={false} sm={8} md={8} className="p-5 border-l-2">
                <div>
                    <div className="font-bold text-md">Change email address</div>
                    <input
                        type="email"
                        className="mx-auto w-full h-10 rounded focus:outline-none focus:shadow-outline text-xtext-black-500 shadow-lg p-4 m-2"
                        placeholder={email}
                    />
                </div>
                <div>
                    <div className="font-bold text-md">Change nationality</div>
                    <input
                        type="text"
                        className="mx-auto w-full h-10 rounded focus:outline-none focus:shadow-outline text-xtext-black-500 shadow-lg p-4 m-2"
                        placeholder={nationality}
                    />
                </div>
            </Grid>
        </Grid>
    )
}

export function getServerSideProps(ctx) {
    const authCookie = ctx.req.headers.cookie;

    if (typeof authCookie !== 'undefined') {
        const user = decode(cookie.parse(authCookie).auth); 
        return {
            props: {
                ...user
            }
        }
    }
    else {
        console.log("You should sign up bro")
        ctx.res.writeHead(302 , {
            'Location' : '/'
         });
        ctx.res.end();
    }
}