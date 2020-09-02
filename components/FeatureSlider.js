import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const Featured = styled.li`
    min-width: 100%;
    height: 50vh;
    align-items: center;
    justify-content: center; 
    z-index: 1;
    transform: translateX(${props => props.shift}%); 
    transition: 1s;
    color: white; 

    &:hover {
        cursor: pointer; 
    }
`

const LeftButton = styled.button`
    padding: 10px; 
    height: 50vh; 
    background: rgba(0, 0, 0, 0.4);
    color: white; 
    z-index: 2;
`

const RightButton = styled(LeftButton)`
    right: 0; 
`

export default function FeatureSlider({ randomGroups, featuredPics }) {

    const [x, setX] = useState(0);

    const goLeft = () => {
        x >= 0 ? setX(-300) : setX(x + 100)
    }

    const goRight = () => {
        x <= -300 ? setX(0) : setX(x - 100)
    }

    // we can click on the circles to tell the slider where to slide to 
    // the slider also slides automatically once every 10 seconds 

    return (
        <>
            <ul className="flex flex-row overflow-hidden list-none relative">
                <LeftButton className="absolute" onClick={goLeft}>{"<"}</LeftButton>
                {
                    randomGroups.map((element, index) => (
                        <Link href="/country/[category]/[country]" as={`/country/games/${element.name}`} key={element.name}>
                            <Featured shift={x} className="relative flex">
                                <img src={featuredPics[index]} className="absolute z-0" style={{ width: '100%' }} />
                                <div className="self-center text-center z-10 p-5 bg-black bg-opacity-50">
                                    <div className="text-lg">Today's featured country</div>
                                    <div className="text-2xl">{element.name}</div>
                                    <div className="text-5xl">{element.emoji}</div>
                                </div>
                            </Featured>
                        </Link>
                    )
                    )
                }
                <div className="flex flex-row z-10 absolute w-full justify-center bottom-0 mb-1  cursor-pointer">
                    <p className="mr-2 text-xs" onClick={() => setX(0)}>{x == 0 ? "⚪" : "⚫"}</p>
                    <p className="mr-2 text-xs" onClick={() => setX(-100)}>{x == -100 ? "⚪" : "⚫"}</p>
                    <p className="mr-2 text-xs" onClick={() => setX(-200)}>{x == -200 ? "⚪" : "⚫"}</p>
                    <p className="mr-2 text-xs" onClick={() => setX(-300)}>{x == -300 ? "⚪" : "⚫"}</p>
                </div>
                <RightButton className="absolute" onClick={goRight}>{">"}</RightButton>
            </ul>
        </>
    )
}


    // there are 4 states: x = -300, -200, -100, 0 
    // we can simplify them all as x = 0, 1, 2, 3 
    // da formula: lighted circle = ( x + 300 ) / 100  
    // we have two circles: <p>○</p> <p>●</p>
