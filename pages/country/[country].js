import {getCountryData} from '../../lib/countries'; 
import {getPhotoUrls} from '../../lib/photo_snippets';
import Images from '../../components/Images'; 
import Header from '../../components/Header'; 
import Link from 'next/link'; 
import getTrends from '../../components/trends'; 
import { useEffect, useRef } from 'react';


function usePrevCountry(name) {
    const ref = useRef();
    useEffect(() => {
      ref.current = name;
    });
    return ref.current;
  }

export default function Post( {name, emoji, images, trending} ) {
    const prevName = usePrevCountry(name); 
    
    useEffect(() => {
        if (prevName !== name) {
            var localData = JSON.parse(localStorage.getItem("search_history")) || []
            localData.push({
                country: name, 
                images: images
            })
            localData = localData.filter((item, index, self) => { return index === self.findIndex(
                (instance) => instance.country === item.country
                )}
            )  
            localStorage.setItem("search_history", JSON.stringify(localData))
        }
    }, [name])

    return (
        <div className="sm:w-full">
            <Header/>
            <h1 className="text-bold text-3xl text-red-600 px-6 py-4">{name} {emoji}</h1>
            <h2 className="text-bold text-2xl text-red-600 px-6"> Gallery </h2>
            <Images images={images}/>
            {getTrends(trending, name)}
            <br/>
            <br/>
            <div className="border-solid border-2 border-l-8 border-blue-600 p-5 m-5">⚠️ Disclaimer: As the viability of this project is still debatable, I invented all of the data above and those shall not be trusted. </div>
            <Link href="/"><a className="text-purple-800 text-xl p-5 text-center">← Back to home</a></Link>
        </div>
    )
}

Post.getInitialProps = async ctx => { 
    const country = getCountryData(ctx.query.country); 
    const imageUrls = getLocalUrls(country.name) ||  await getPhotoUrls(country.name); 
    
    return {
            name: country.name,
            emoji: country.emoji, 
            images: imageUrls,
            trending: country.trends
    }
}

function getLocalUrls(country_name) {
    var data = JSON.parse(localStorage.getItem("search_history")) || [];
    var chosenData = data.find(value => value.country === country_name); 

    if (chosenData) {
         return chosenData.images; 
    }
    else {
        console.log("nay")
        return null; 
    }   
}