import Title from '../components/Title'; 
import Header from '../components/Header'; 
import {getRandomCountry} from '../lib/countries'; 

export default function Index({randomCountry}) {  
  return (
      <div>
          <Header/>
          <Title country={randomCountry.name} emoji={randomCountry.emoji}/>
      </div>
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
