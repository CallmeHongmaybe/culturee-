import FeatureSlider from '../components/FeatureSlider';
import { getRandomCountries } from '../lib/countries';
import getFeaturedPhotos from '../lib/photo_snippets';
import games from '../lib/games.json';
import movies from '../lib/movies.json';
import Footer from '../components/Footer';
import Search from "../components/Search";

export default function Index({ randomGroups, featuredPics }) {

    var filteredGroup = randomGroups.filter((country, index, self) => {
        return index === self.findIndex((instance) => (
            instance.name === country.name || instance.emoji === country.emoji
        ));
    }
    );

    return (
        <div style={{ backgroundColor: "#f0f2f6" }}>
            <div className="p-16 flex flex-col text-center">
                <p className="text-2xl">Welcome to Kulturée</p>
                <p className="text-lg">Easily and swiftly get info of currently trending stuff in </p>
                <Search />
            </div>
            <FeatureSlider className="h-40" randomGroups={filteredGroup} featuredPics={featuredPics} />
            <div className="text-4xl p-5 text-center">Global stats</div>
            <div className="flex flex-col">
                <div className="self-center">
                    <div className="text-xl p-5">Games</div>
                    <table className="table-auto ml-5">
                        <tbody className="bg-white">
                            <tr>
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Downloads</th>
                                <th className="border px-4 py-2">Likes</th>
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
                <div className='self-center'>
                    <div className="text-xl p-5">Movies</div>
                    <table className="table-auto ml-5">
                        <tbody className="bg-white">
                            <tr>
                                <th className="p-3 border">Name</th>
                                <th className="px-4 py-2 border">Views</th>
                                <th className="px-4 py-2 border" >Likes</th>
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
            <Footer />
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
/*
  [ 'https://images.unsplash.com/photo-1572569403915-b5e8b6317396?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0',
            'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0',
            'https://images.unsplash.com/photo-1553099217-583bbb757691?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0',
            'https://images.unsplash.com/photo-1553709708-8a9a224b1814?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNjU2MH0' ]
*/