import styled from 'styled-components'; 
import {useState} from 'react'; 
import Link from 'next/link'; 

const Featured = styled.li`
    min-width: 100%;
    height: 40vh;
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
    height: 40vh; 
    background: rgba(0, 0, 0, 0.4);
    color: white; 
    z-index: 2;
`

const RightButton = styled(LeftButton)`
    right: 0; 
`

export default function FeatureSlider({randomGroups, featuredPics}) {  
    
    const [x, setX] = useState(-300); 
    
    const goLeft = () => {
        x <= -300 ? setX(0) : setX(x - 100)
     
    }

    const goRight = () => {
        x >= 0 ? setX(-300) : setX(x + 100)
    }

    return (
        <>        
         <ul className="font-sans flex flex-row overflow-scroll list-none relative">   
         <LeftButton className="font-sans absolute" onClick={goLeft}>{"<"}</LeftButton> 
              {
                    randomGroups.map((element, index) => (
                            <Link href="/country/[country]" as={`/country/${element.name}`} key={element.name + Math.sqrt(Math.random().toFixed(5)).toString()}>
                            <Featured shift={x} className="relative flex">
                                <img src={featuredPics[index]} className="absolute z-0" style={{width: '100%'}}/>
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
        <RightButton className="font-sans absolute" onClick={goRight}>{">"}</RightButton>   
        </ul>
       </>
    )
}
