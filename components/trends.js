import {useState} from 'react'; 
const coverImages = require('../lib/cover_images.json');
import styled, {keyframes} from 'styled-components'; 


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

const constraints = {
    width: 120, 
    height: 150
}

// function compareDownloads(a, b) {
// 	if (a.downloads < b.downloads) {
//   	return -1; 
//   }
//   if (a.downloads > b.downloads) {
//   	return 1; 
//   }
//   return 0; 
// }

function compareLikes(a, b) {
	if (a.likes < b.likes) {
  	return -1; 
    }
    if (a.likes > b.likes) {
        return 1; 
    }
  return 0; 
}

var buttonStyle = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";

export default function getTrends(trends, country) { 
    return (
        <>
            <div className="text-bold text-red-600 text-xl p-5"> Trends in {country} </div> 
            <div className="text-bold text-red-600 text-lg ml-10"> Games </div> 
            <ul className="flex flex-row sm:flex-col sm:p-3">
                    {
                        trends.game.sort(compareLikes).map((trend) => {
                            var coverphoto = coverImages.find((game) => game.name === trend.name); 
                            return (
                               <Item key={coverphoto.name} imageurl={coverphoto.image_url} name={trend.name} downloads={trend.downloads} likes={trend.likes} type="game"/>
                            )
                        }
                        )
                    }
            </ul>
            <div className="text-bold text-red-600 text-lg ml-5"> Movies </div> 
            <ul className="flex flex-row sm:flex-col sm:p-3">
            {
                        trends.movies.sort(compareLikes).map((trend) => {
                            var coverphoto = coverImages.find((movie) => movie.name === trend.name); 
                            return (
                               <Item key={coverphoto.name} imageurl={coverphoto.image_url} name={trend.name} downloads={trend.views} likes={trend.likes} type="movies"/>
                            )
                        }
                        )
                    }
            </ul>
        </>
    )
}

function Item({imageurl, name, downloads, likes, type}) {
    const [hover, setHover] = useState(false); 
    const [download_count, setDownload] = useState({
        value: downloads, 
        disabled: false
    }); 
    const [like, setLike] = useState(likes);

    function handleHover(hover) {
        return hover ? setHover(true) : setHover(false); 
    }

    function action(type) {
        switch(type) {
            case "game": 
            return "Downloaded"; 
            case "movies": 
            return "Watched"; 
        }
    }

    return (
        <div className="bg-white shadow-lg px-4 py-2 ml-5 sm:ml-0 flex flex-row border border-gray-300" onMouseOver={() => {handleHover(true)}} onMouseLeave={() => {handleHover(false)}}>
            <img src={imageurl} style={constraints} className="self-center"></img>
            <div className="p-5"> 
                <div className="text-red-600 text-lg">{name}</div>
                <div className="text-blue-500">{action(type)} <p className="text-green-500">{download_count.value}</p></div>
                <div className="text-blue-500">Likes <p className="text-green-500">{like}</p></div>
                {hover &&
                <div>
                <Popup className={buttonStyle} 
                onClick={() => {setDownload({
                    value: download_count.value + 1, 
                    disabled: !download_count.disabled
                })}}  
                disabled={download_count.disabled}
                >
                   {!download_count.disabled ? action(type)  + " ?" : "Thanks"}
                </Popup>    
                <Popup className={buttonStyle + " ml-2"} onClick={() => {setLike(like + 1)}} >👍</Popup>     
                </div>
                }
            </div>
     
        </div> 
    )
}
