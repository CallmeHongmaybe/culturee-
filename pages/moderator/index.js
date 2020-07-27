import { decode } from 'jsonwebtoken'
import cookie from 'cookie'
import Link from 'next/link'
// i should log the moderator in first 
// first add a little decoration to the page
// then I try fetching data by group

export default function ModPage({ name }) {
    return (
        <div className="flex flex-col">
            <div className="flex h-20 justify-center items-center">
                <p className="text-3xl text-red-500 text-center">Hi {name}</p>
            </div>
            <ul className="w-1/2 self-center border-separate border-4 list-inside list-decimal p-5">
            <p className="text-lg text-red-400 text-center">Here's what you're gonna do:</p>
                <li className="pt-2">Click on the names and the app redirects you to the polls</li>
                <li className="pt-2">The mod reviews each one entry and if he/she sees something doesn't feel right, they just need to click the cross next to the name </li>
                <li className="pt-2">If everything looks okay to you, you just have to click the "Update the poll" button below the poll</li>
                <li className="pt-2">On clicking this button, the mods gets redirected to the mod page itself. </li>
                <li className="pt-2">You can now see that their reviewed poll gets crossed out.</li>
                <li className="pt-2">The whole moderating job revolves around ticking these todo boxes. Simple, I know</li>
            </ul>


            <br/><br/><br/><br/>
            <div className="text-md text-center h-10">Here are all the genres that we will be moderating for now</div>
            <div className="flex justify-evenly">
                <Link href="/moderator/[genre]" as="/moderator/games"><a className="px-4 py-2 text-xl font-mono border-2 hover:bg-blue-400 hover:text-white">Games</a></Link>
                <Link href="/moderator/[genre]" as="/moderator/movies"><a className="px-4 py-2 text-xl font-mono border-2 hover:bg-blue-400 hover:text-white">Movies</a></Link>
            </div>
        </div>
    )
}

export function getServerSideProps({ req, res, query }) {
    const authCookie = req ? req.headers.cookie : undefined;

    if (typeof authCookie !== 'undefined') {
        const user = decode(cookie.parse(authCookie).auth);
        if (user.mod) {
            return {
                props: {
                    ...user,
                    query
                }
            }
        }
        else {
            console.log("You're not a moderator")
            res.writeHead(302, {
                'Location': '/'
            });
            res.end();
        }
    }
    else {
        console.log("You should sign up bro")
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    }
}