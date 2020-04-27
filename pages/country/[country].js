import {getCountryData, allCountryPaths} from '../../lib/countries'; 
import getPhotoUrls from '../../lib/photo_snippets';
import Intro from '../../components/Intro'; 
import Header from '../../components/Header'; 
import Link from 'next/link'; 

export default function Post( {name, emoji, images} ) {
    return (
        <div>
            <Header/>
            <h1>{name} {emoji}</h1>
            <Intro images={images}/>
            <Link href="/"><a>← Back to home</a></Link>
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
        }
    }
}