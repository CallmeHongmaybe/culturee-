import {getCountryData, allCountryPaths} from '../../lib/countries'; 
import Title from '../../components/Title'; 

export default function Post( {name, emoji} ) {
    return (
        <Title country={name} emoji={emoji}/>
    )
}

export function getStaticPaths() {
    const paths = allCountryPaths(); 
    return {
      paths,
      fallback: false
    }
  }

export function getStaticProps({ params }) {
    const country = getCountryData(params.country); 
    return {
        props: {
            name: country.name,
            emoji: country.emoji
        }
    }
}