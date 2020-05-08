import {getCountryData, allCountryPaths} from '../../lib/countries'; 
import {getPhotoUrls} from '../../lib/photo_snippets';
import Intro from '../../components/Intro'; 
import Header from '../../components/Header'; 
import Link from 'next/link'; 
import getTrends from '../../components/trends'; 

/* trends: {
    game: {
        name: string;
        downloads: number;
        likes: number;
    }[];
} */


export default function Post( {name, emoji, images, trending} ) {    
    return (
        <div className="sm:w-full">
            <Header/>
            <h1 className="text-bold text-3xl text-red-600 px-6 py-4">{name} {emoji}</h1>
            <h2 className="text-bold text-2xl text-red-600 px-6"> Gallery </h2>
            <Intro images={images}/>
            {getTrends(trending, name)}
            <br/>
            <br/>
            <div className="border-solid border-2 border-l-8 border-blue-600 p-5 m-5">⚠️ Disclaimer: As the viability of this project is still debatable, I invented all of the data above and those shall not be trusted. </div>
            <Link href="/"><a className="text-purple-800 text-xl p-5 text-center">← Back to home</a></Link>
        </div>
    )
}



export function getStaticPaths() {
    const paths = allCountryPaths(); 
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    const country = getCountryData(params.country); 
    const imageUrls = await getPhotoUrls(params.country); 
    return {
        props: {
            name: country.name,
            emoji: country.emoji, 
            images: imageUrls || null,
            trending: country.trends
        }
    }
}
