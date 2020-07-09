import {useState, useEffect} from 'react'; 
const coverImages = require('../lib/cover_images.json');
import styled, {keyframes} from 'styled-components'; 
import Link from 'next/link'; 
import Router from 'next/router'  


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

const Banner = styled.div`
    width: 100%; 
    height: fit-content; 
    text-align: center;
    color: white; 
    padding: 5px; 
    background: ${props => {
        switch (props.rank) {
            case 1:
                return "#C9B037"; 
            case 2:
                return "#D7D7D7"; 
            case 3:
                return "#AD8A56"; 
            default:
                return "rgb(255,255,255)"; 
        }
    }}
`

const constraints = {
    width: 100, 
    height: 150
}

function byPopularity(a, b) {
    var pop = (x) => (x.likes * x.hits) / ( x.likes + x.hits );  
	if (pop(a) < pop(b)) {
  	return 1; 
    }
    if (pop(a) > pop(b)) {
    return -1; 
    }
  return 0; 
}

var buttonStyle = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";

export default function TrendBoard({trends, country, genre}) { 
    var parsedList = JSON.parse(trends) 

    return (
        <div className="flex flex-col">
        <ul className="flex flex-row sm:flex-col sm:p-3">
                {
                parsedList.sort(byPopularity).map((trend, index) => {
                    var coverphoto = coverImages.find((game) => game.name === trend.name); 
                    return (
                    <Item key={coverphoto.name} 
                    imageurl={coverphoto.image_url} 
                    name={trend.name} 
                    hits={trend.hits} 
                    likes={trend.likes} 
                    rank={index + 1} type={genre}/>
                    )
                }
                )
                }
        </ul>
        <Link href="/lists/[...slug]" as={`/lists/${genre}/${encodeURIComponent(country)}`}> 
            <button className="sm:w-1/2 w-1/5 self-center bg-transparent 
            hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-6 
            py-4 mt-3 border border-blue-500 hover:border-transparent rounded"> 
            See full list 
            </button>
        </Link> 
        <Link href="/poll/[category]/[country]" as={`/poll/${genre}/${encodeURIComponent(country)}`}>
        <button 
        className="sm:w-1/2 w-1/5 mt-3 self-center
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

function Item({imageurl, name, hits, likes, type, rank}) {
    const [hover, setHover] = useState(false); 
    const [hit_count, setHits] = useState({
        value: hits, 
        disabled: false
    }); 
    const [like, setLike] = useState(likes);

    function handleHover(hover) {
        return hover ? setHover(true) : setHover(false); 
    }

    function action(type) {
        switch(type) {
            case "games": 
            return "Played ?"; 
            case "movies": 
            return "Downloaded ?"; 
        }
    }

    return (
        <div className="relative w-1/3 sm:w-full bg-white shadow-lg px-4 py-2 ml-5 sm:ml-0 flex flex-row md:flex-col flex-wrap border border-gray-300"
         style={{height: "fit-content"}} 
         onMouseOver={() => {handleHover(true)}} 
         onMouseLeave={() => {handleHover(false)}}
         >
            <Banner rank={rank}>#{rank} this week</Banner>
            <div className="sm:w-full sm:flex sm:justify-center self-center p-2 md:flex md:justify-center"><img src={imageurl} style={constraints}></img></div>
            <div className="px-2 pt-4 sm:w-full "> 
                <div className="sm:w-full sm:text-center md:text-center">
                <div className="text-red-600 text-lg">{name}</div>
                <div className="text-blue-500">Hits <p className="text-green-500">{hit_count.value}</p></div>
                <div className="text-blue-500">Likes <p className="text-green-500">{like}</p></div>
                </div>
                {hover &&
                <div className="flex py-5 sm:justify-center sm:items-center md:justify-center lg:justify-evenly lg:flex-col">
                    <Popup className={buttonStyle} 
                    onClick={() => {setHits({
                        value: hit_count.value + 1, 
                        disabled: !hit_count.disabled
                    })}}  
                    disabled={hit_count.disabled}
                    >
                    {!hit_count.disabled ? action(type) : "Thanks"}
                    </Popup>    
                    <Popup className={buttonStyle + " ml-2"} 
                    onClick={() => {setLike(like + 1)}}>👍</Popup>     
                </div>
                }
            </div>
        </div> 
    )
}


 