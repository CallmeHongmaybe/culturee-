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
            // featuredPics: await getFeaturedPhotos(randomCountries), 
            featuredPics: [
                'https://images.unsplash.com/photo-1572569403915-b5e8b6317396?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0',
                'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0',
                'https://images.unsplash.com/photo-1553099217-583bbb757691?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0',
                'https://images.unsplash.com/photo-1553709708-8a9a224b1814?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0'
              ]
        }
    }
}
