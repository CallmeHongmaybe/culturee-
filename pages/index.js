import Title from '../components/Title'; 
import {getRandomCountry} from '../lib/countries'; 

export default function Index({randomCountry}) {  
  return (
      <Title country={randomCountry.name} emoji={randomCountry.emoji}/>
  );
}

export async function getStaticProps() {
    const randomCountry = getRandomCountry(); 
    return {
        props: {
            randomCountry: randomCountry
        }
    }
}
