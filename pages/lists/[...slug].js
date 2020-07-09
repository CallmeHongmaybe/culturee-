import Header from '../../components/Header';
import fetch from 'isomorphic-fetch'; 
import {Thumb} from '../../public/logo'; 
const standardDecor = "border-b text-center px-4 py-2"; 
import {useState, useRef, useEffect} from 'react'; 

const dev = process.env.NODE_ENV !== 'production';
const origin = dev ? 'http://localhost:3000' : 'https://culturee.now.sh';

function byPopularity(a, b) {
    var pop = (x) => x.likes / x.hits;  
	if (pop(a) < pop(b)) {
  	return 1; 
    }
    if (pop(a) > pop(b)) {
    return -1; 
    }
  return 0; 
}


function SlimItem({genre, country, rank, name, hits, likes}) { 
    const likesRef = useRef(likes); 
    const [currentLike, setLike] = useState(likes); 
    const [saved, setSaved] = useState(false) 

    const handleClick = () => {
        setLike(currentLike + 1);
    }

    let dataSave = null; 

    useEffect(() => {
            likesRef.current = currentLike 
            // stateRef.current = saveState
            if (currentLike > likes) {
                dataSave = setTimeout(
                    async () => {
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
                       console.log(await (await update.json()).message ) 
                    }, 3000);
                    return () => {
                        setSaved(false) 
                        return clearTimeout(dataSave);  
                    }
            }
        },[currentLike])

    return (
            <tr className="text-md">
                <td className={standardDecor}>{name}</td>
                <td className={standardDecor}>{hits}</td>
                <td className={standardDecor}>{currentLike}</td>
                <td className={standardDecor}>#{rank + 1}</td>
                <td className="flex border-b justify-evenly items-center px-4 py-2"
                    onClick={handleClick} 
                >
                        <Thumb/>
                        <div className="text-blue-500 px-2">{saved ? "Saved" : ""}</div>
                </td>
            </tr>
    )
}


export default function List({genre, country, fetchedData}) {
    
    var parsedData = JSON.parse(fetchedData);

    return (
        <div>
        <Header/>
        <div className="text-center text-blue-500 text-3xl">Here is the list of trending {genre} in {country} </div>
        <table className="table-fixed self-center">
            <thead>
                <tr>
                    <th className={standardDecor} style={{width: '20vw'}}>Name</th>
                    <th className={standardDecor} style={{width: '20vw'}}>Downloads</th>
                    <th className={standardDecor} style={{width: '20vw'}}>Likes</th>
                    <th className={standardDecor} style={{width: '20vw'}}>Rank (by downloads)</th>
                    <th className={standardDecor} style={{width: '20vw'}}></th>
                </tr>
            </thead>
            <tbody>
            {  
                parsedData.items.sort(byPopularity).map((item, index) => (
                   <SlimItem key={item.name}
                   rank={index} name={item.name} hits={item.hits} 
                   likes={item.likes} genre={genre} country={country}
                   />
                ))
            }
            </tbody>
        </table> 
        </div>
    )
}

export async function getServerSideProps({query}) {
    var slug = query.slug; 
    const getData = await fetch(`${origin}/api/trends/${slug.join('/')}`)
    const { data } = await getData.json(); 
 
    return { 
        props : { 
            fetchedData: JSON.stringify(data), 
            genre: slug[0], 
            country: slug[1]
        }
    }
}

