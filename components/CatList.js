import Link from 'next/link'; 

export default function CatList({name, emoji, genreList}) {    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <ul className="flex justify-evenly items-center shadow-md text-bold text-gray-500 mb-10 p-2">
            <li className="text-bold text-3xl text-red-600 sm:text-sm sm:text-bold" key={name}> Trend categories in {name} {emoji}</li>
            {
                genreList.map(genre => {
                    const capGenre = capitalizeFirstLetter(genre); 
                        return <li className="sm:p-2 sm:text-sm hover:text-blue-500" key={genre}>
                            <Link 
                            href="/country/[category]/[country]" 
                            as={`/country/${genre}/${name}`}>
                                <a>{genre === "games" ? `${capGenre} (default)` : capGenre}</a>
                            </Link>
                        </li>
                })
            }
        </ul>
    )
}

