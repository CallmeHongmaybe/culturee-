import {getCountryData, allCountryPaths} from '../../lib/countries'; 
import getPhotoUrls from '../../lib/photo_snippets';
import Intro from '../../components/Intro'; 
import Header from '../../components/Header'; 
import Link from 'next/link'; 
import getTrends from '../trends'; 

/* trends: {
    game: {
        name: string;
        downloads: number;
        likes: number;
    }[];
} */


export default function Post( {name, emoji, images, trending} ) {    
    return (
        <div>
            <Header/>
            <h1 className="text-bold text-3xl text-red-600 px-6 py-4">{name} {emoji}</h1>
            <Intro images={images}/>
            {getTrends(trending, name)}
            <Link href="/"><a className="text-purple-800 text-xl p-5">← Back to home</a></Link>
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
            images: imageUrls,
            trending: country.trends
        }
    }
}
