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

function byPopularity(a, b) {
    var pop = (x) => (x.likes * x.hits) / (x.likes + x.hits);
    if (pop(a) < pop(b)) {
        return 1;
    }
    if (pop(a) > pop(b)) {
        return -1;
    }
    return 0;
}

export default function TrendBoard({ trends, country, genre }) {
    var parsedList = JSON.parse(trends)
    const standardDecor = "border-b text-center px-4 py-2";

    return (
        <div className="flex flex-col">
            <table className="table-fixed self-center">
                <thead>
                    <tr>
                        <th className={standardDecor} style={{ width: '20vw' }}>Rank (by downloads)</th>
                        <th className={standardDecor} style={{ width: '20vw' }}>Name</th>
                        <th className={standardDecor} style={{ width: '20vw' }}>Downloads</th>
                        <th className={standardDecor} style={{ width: '20vw' }}>Likes</th>
                        <th className={standardDecor} style={{ width: '20vw' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parsedList.sort(byPopularity).map((trend, index) => {
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
                {/* <Link href="/lists/[...slug]" as={`/lists/${genre}/${encodeURIComponent(country)}`}>
                <button className="sm:w-1/2 w-1/5 self-center bg-transparent 
            hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-6 
            py-4 mt-3 border border-blue-500 hover:border-transparent rounded">
                    See full list
            </button>
            </Link> */}

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
    const likesRef = useRef(likes);
    const [saved, setSaved] = useState(false)
    const buttonStyle = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";
    const standardDecor = "border-b text-center px-4 py-2";
    
    let dataSave = null; 

    useEffect(() => {
        likesRef.current = currentLike
        if (currentLike > likes) {
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
                            likes: likesRef.current
                        })
                    }
                    );
                    setSaved(true)
                    console.log(await (await update.json()).message)
                }, 3000);
            return () => {
                setSaved(false)
                return clearTimeout(dataSave);
            }
        }
        else if (hit_count.value > hits) {
            // to be continued 
        }
    }, [currentLike, hit_count.value])

    function goldenTiers() {
        switch (rank) {
            case 1:
                return "#fae828";
            case 2:
                return "#D7D7D7";
            case 3:
                return "#AD8A56";
            default:
                return "rgb(255,255,255)";
        }
    }

    return (
        <tr className="text-md"
            style={{backgroundColor: goldenTiers()}}
        >
            <td className={standardDecor}>#{rank}</td>
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
                <div className="text-blue-500 px-2">{saved ? "Saved" : null}</div>
            </td>
        </tr>
    )
}

