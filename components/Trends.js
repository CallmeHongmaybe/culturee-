import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

// The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history. https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
const buttonAnim = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Popup = styled.button`
    animation-name: ${buttonAnim};
    animation-duration: 0.75s;
    opacity: ${props => props.disabled ? 0.5 : 1};
    font-size: 12px;
`



export default function TrendBoard({ trends, country, genre }) {
    var parsedList = JSON.parse(trends)
    const standardDecor = "border-b text-center px-4 py-2";
    const [sorter, setSortBy] = useState({
        order: null,
        likes_asc: false, 
        hits_asc: false 
    })

    // function byPopularity(a, b) {
    //     var pop = (x) => (x.likes * x.hits) / (x.likes + x.hits);
    //     if (pop(a) < pop(b)) {
    //         return 1;
    //     }
    //     if (pop(a) > pop(b)) {
    //         return -1;
    //     }
    //     return 0;
    // }

    function byLikes(a, b) {
         if (sorter.likes_asc) return a.likes - b.likes ; else return b.likes - a.likes
    }

    function byHits(a, b) {
        if (sorter.hits_asc) return a.hits - b.hits ; else return b.hits - a.hits
    }

    return (
        <div className="flex flex-col">
            <table className="table-fixed self-center">
                <thead>
                    <tr>
                        <th className={standardDecor} style={{ width: '20vw' }}>Rank (by downloads)</th>
                        <th className={standardDecor} style={{ width: '20vw' }}>Name</th>
                        <th className={standardDecor} style={{ width: '20vw' }} 
                        onClick={() => {setSortBy({
                            order: byHits, 
                            hits_asc: !sorter.hits_asc
                        })}}
                        >
                            Hits { sorter.order ? (sorter.hits_asc ? "🔼" : "🔽") : '' }
                        </th>
                        <th className={standardDecor} style={{ width: '20vw' }} 
                        onClick={() => {setSortBy({
                            order: byLikes, 
                            likes_asc: !sorter.likes_asc
                        })}}
                        >
                            Likes {sorter.order ? (sorter.likes_asc ? "🔼" : "🔽" ): ''}
                        </th>
                        <th className={standardDecor} style={{ width: '20vw' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parsedList.sort(sorter.order || byHits).map((trend, index) => {
                            return (
                                <Item
                                    key={trend.name}
                                    name={trend.name}
                                    hits={trend.hits}
                                    likes={trend.likes}
                                    genre={genre}
                                    country={country}
                                    rank={index + 1}
                                />
                            )
                        }
                        )
                    }
                </tbody>
            </table>
            <Link href="/poll/[category]/[country]" as={`/poll/${genre}/${encodeURIComponent(country)}`}>
                <button
                    className="sm:w-1/2 w-1/5 m-10 self-center
                    px-6 py-4 bg-transparent hover:bg-blue-500 
                    hover:text-white text-blue-700 font-semibold
                    border border-blue-500 hover:border-transparent 
                    rounded text-center"
                >
                    Vote or nominate an item in the polls 😺😺
                </button>
            </Link>
        </div>
    )
}

function Item({ name, hits, likes, rank, genre, country }) {
    const [hit_count, setHits] = useState({
        value: hits,
        disabled: false
    });
    const [currentLike, setLike] = useState(likes);
    const likesRef = useRef(likes) 
    const hitRef = useRef(hits)
    const buttonStyle = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";
    const standardDecor = "border-b text-center px-4 py-2";
    
    let dataSave = null; 

    useEffect(() => {
        likesRef.current = currentLike
        hitRef.current = hit_count.value
        if (currentLike > likes || hit_count.value > hits) {
            dataSave = setTimeout(
                async () => {
                    // update this url
                    const update = await fetch(`${origin}/api/trends/${genre}/${country}`, {
                        method: 'PUT',
                        'headers': {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: country,
                            name: name,
                            likes: likesRef.current, 
                            hits: hitRef.current
                        })
                    }
                    );
                    console.log(await (await update.json()).message)
                }, 3000);
            return () => {
                return clearTimeout(dataSave);
            }
        }
    }, [currentLike, hit_count.value])

    function tierColors() {
        switch (rank) {
            case 1:
                return "linear-gradient(135deg, rgba(247,245,0,1) 6%, rgba(255,255,255,0.3561799719887955) 26%"
            case 2:
                return "linear-gradient(135deg, rgba(215,215,215,1) 6%, rgba(255,255,255,0.3561799719887955) 26%)"
            case 3:
                return "linear-gradient(135deg, rgba(173,138,86,1) 6%, rgba(255,255,255,0.3561799719887955) 26%)"
            default: return "rgb(255,255,255)"
        }
    }

    function rankPerks() {
        switch(rank) {
            case 1: return "🥇"
            case 2: return "🥈"
            case 3: return "🥉"
            default: return "#" + rank
        }
    }

    return (
        <tr className="text-md"
            style={{background: tierColors()}}
        >
            <td className={standardDecor}>{rankPerks()}</td>
            <td className={standardDecor}>{name}</td>
            <td className={standardDecor}>{hit_count.value}</td>
            <td className={standardDecor}>{currentLike}</td>
            <td className={standardDecor}>
                <Popup
                    className={buttonStyle}
                    onClick={() => {
                        setHits({
                            value: hit_count.value + 1,
                            disabled: !hit_count.disabled
                        })
                    }}
                    disabled={hit_count.disabled}
                >
                    {!hit_count.disabled ? "+1 hit" : "Thanks"}
                </Popup>
                <Popup
                    className={buttonStyle + " ml-2"}
                    onClick={() => { setLike(currentLike + 1) }}>
                    👍
                </Popup>
            </td>
        </tr>
    )
}

