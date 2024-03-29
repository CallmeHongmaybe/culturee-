import { decode } from 'jsonwebtoken'
import cookie from 'cookie'
const Polls = require('../../models/poll')
import dbConnect from '../../utils/dbConnect'
import format from 'date-fns/format'
import Link from 'next/link'
import { useState } from 'react'
import fetch from 'isomorphic-fetch'
// const origin = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://culturee.vercel.app";

// to do list: 
// cache the whole list using the sessionStorage

// I think useRef persists the state value for each re-render unlike useState / setState which ironically doesn't do on re-render. 

export default function ModPage({ genre, reviewList }) {

    const sortByDate = (a, b) => {
        if (a.expr > b.expr) return 1
        else if (a.expr < b.expr) return -1
        else return 0
    }

    const groupedReviewsByDate = (JSON.parse(reviewList)).sort(sortByDate).reduce((acc, currentObj) => {
        let date = format(new Date(currentObj.expr), 'LLLL d, yyyy')
        if (!acc[date]) acc[date] = []
        acc[date].push(currentObj)
        return acc
    }, {})

    return (
        <div>
            <div className="text-xl text-center text-red-500 p-10"> Here you'll help me moderate the {genre} polls of these following countries </div>
            <div className="p-10">
                {
                    Object.keys(groupedReviewsByDate).map(date => {
                        var groupReview = groupedReviewsByDate[date];
                        return (
                            <CheckList key={date} date={date} groupReview={JSON.stringify(groupReview)} genre={genre}
                            />
                        )
                    })
                }
            </div>
            {/* <div className="h-70 flex justify-evenly">
                <div>Other genres: </div>
                <button className="px-4 py-2 text-xl font-mono border-2">Movies</button>
            </div> */}
        </div>
    )
}

function CheckList({ date, groupReview, genre }) {
    const [show, setShow] = useState('grid')
    // const [done, setDone] = useState(false)
    const toggleDate = () => {
        setShow(show === 'grid' ? 'none' : 'grid')
    }

    const parsedList = JSON.parse(groupReview)

    return (
        <div key={date}>
            <div className="text-black bg-gray-300 font-semibold p-2 hover:bg-gray-500 flex justify-between" onClick={toggleDate}>
                <p className="text-2xl self-center">{date}</p>
                <div>
                    {/* <button
                        className="
                        bg-transparent
                        hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4
                        py-3 border border-blue-500 hover:border-transparent rounded text-md"
                        onClick={updateAll}
                    >
                        Update the polls
                </button> */}
                    {/* <div>
                        {done ? "✅ Finished" : ""}
                    </div> */}

                </div>
            </div>
            <div className="grid grid-cols-3 col-gap-2 px-12 py-6" style={{ display: show }}>
                {
                    parsedList.map(review => {
                        return (
                            <div key={review._id}>
                                <Link
                                    href="/poll/[category]/[country]"
                                    as={`/poll/${genre}/${review._id}`}
                                >
                                    <a className="hover:text-blue-500">{review._id}</a>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export async function getServerSideProps({ req, res, query }) {
    const authCookie = req.headers.cookie;
    const { genre } = query;

    // put the reviewList in the sessionStorage so you don't have to query things everytime 
    if (typeof authCookie !== 'undefined') {
        const presentMoment = Date.now()
        dbConnect()
        const user = decode(cookie.parse(authCookie).auth);
        const reviewList = await Polls[genre]
            .find({
                expr: {
                    $gte: presentMoment - 60480000,
                    $lt: presentMoment + 604800000 // a week from now 
                }
            }
            , '_id expr')
            .lean()
        if (user.mod) {
            return {
                props: {
                    // ...user,
                    genre,
                    reviewList: JSON.stringify(reviewList),
                }
            }
        }
        else {
            console.log("You're not a moderator. Go home man")
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