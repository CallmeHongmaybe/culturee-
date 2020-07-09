import Header from '../components/Header'; 
import FeatureSlider from '../components/FeatureSlider'; 
import {getRandomCountries} from '../lib/countries'; 
import getFeaturedPhotos from '../lib/photo_snippets'; 
import games from '../lib/games.json'; 
import movies from '../lib/movies.json'; 
import Footer from '../components/Footer'; 

export default function Index({randomGroups, featuredPics}) {  

    var filteredGroup = randomGroups.filter((country, index, self) => {
        return index === self.findIndex((instance) => (
            instance.name === country.name || instance.emoji === country.emoji
        )); 
      }
    ); 

  return (
      <div>
          <Header/>
          <FeatureSlider className="h-40" randomGroups={filteredGroup} featuredPics={featuredPics}/>
          <div className="text-4xl p-5">Global trends of this week</div>
          <div className="flex flex-row justify-evenly sm:flex-col">
          <div>
          <div className="text-xl p-5">Games</div>
                <table className="table-auto ml-5">
                <tbody>
                <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Global downloads</th>
                    <th className="border px-4 py-2">Global likes</th>
                </tr>
                    {
                        games.map(game => (
                            <tr key={game.global_downloads.toString()}>
                                    <td className="border px-4 py-2 text-bold text-blue-500">{game.name}</td>
                                    <td className="border px-4 py-2">{game.global_downloads}</td>
                                    <td className="border px-4 py-2">{game.global_likes}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
          </div>
          <div>
          <div className="text-xl p-5">Movies</div>
                <table className="table-auto ml-5">
                    <tbody>
                    <tr>
                    <th className="p-3 border">Name</th>
                        <th className="px-4 py-2 border">Global views</th>
                        <th className="px-4 py-2 border" >Global likes</th>
                    </tr>
                        {
                            movies.map(movie => (
                                <tr key={movie.global_watched.toString()}>
                                        <td className="px-4 py-2 border text-bold text-blue-500">{movie.name}</td>
                                        <td className="px-4 py-2 border">{movie.global_watched}</td>
                                        <td className="px-4 py-2 border">{movie.global_likes}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
          </div>
          </div>
          <Footer/>
      </div>
  );
}

export async function getStaticProps() {
    const randomCountries = getRandomCountries(); 
    return {
        props: {
            randomGroups: randomCountries, 
            featuredPics: await getFeaturedPhotos(randomCountries), 
        }
    }
}