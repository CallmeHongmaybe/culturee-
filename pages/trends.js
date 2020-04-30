import {useState} from 'react'; 
const coverImages = require('../lib/game_cover_image.json');
import styled, {keyframes} from 'styled-components'; 


const buttonAnim = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Popup = styled.button`
    animation-name: ${buttonAnim};
    animation-duration: 1s;
`

const constraints = {
    width: 100, 
    height: 120
}

export default function getTrends(trends, country) { 
    return (
        <>
            <div className="text-bold text-red-600 text-xl p-5"> Trends in {country} </div> 
            <div className="text-bold text-red-600 text-lg ml-5"> Games </div> 
            <ul className="flex flex-row">
                    {
                        trends.game.map((trend) => {
                            var coverphoto = coverImages.find((game) => game.name === trend.name); 
                            return (
                               <Item imageurl={coverphoto.image_url} name={trend.name} downloads={trend.downloads} likes={trend.likes}/>
                            )
                        }
                        )
                    }
            </ul>
        </>
    )
}

function Item({imageurl, name, downloads, likes}) {

    const [hover, setHover] = useState(false); 

    function handleHover(hover) {
        return hover ? setHover(true) : setHover(false); 
    }

    var buttonStyle = "bg-blue-500 hover:bg-blue-700 border border-blue-700 text-white py-2 px-2 text-sm";

    return (
        <div className="bg-white shadow-lg px-4 py-2 ml-5 flex flex-row border border-gray-300" onMouseOver={() => {handleHover(true)}} onMouseLeave={() => {handleHover(false)}}>
            <img src={imageurl} style={constraints} className="self-center"></img>
            <div className="p-5"> 
                <p className="text-red-600 text-lg">{name}</p>
                <p>Downloads <p className="text-green-500">{downloads}</p></p>
                <p>Likes <p className="text-green-500">{likes}</p></p>
                {hover &&
                
                <div>
                <Popup className={buttonStyle}>Do you play this game ?</Popup>    
                <Popup className={buttonStyle + " ml-2"}>👍</Popup>     
                </div>}
            </div>
     
        </div> 
    )
}
