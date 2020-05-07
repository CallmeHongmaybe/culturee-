const allCountries = require("./game_trending.json"); 

export function getCountryData(name) {
    const findExactName = (element) => element.country === name;  

    const country = allCountries[allCountries.findIndex(findExactName)];

    const country_name = country.country, emoji_name = country.emoji, gaming_trends = country.trends.games,
    movie_trends = country.trends.movies;

    return {
        name: country_name, 
        emoji: emoji_name,
        trends: {
            game: gaming_trends, 
            movies: movie_trends
        }
    }
}

export function allCountryPaths() {
    return allCountries.map(country => {
        return {
            params: {
                country: country.country
            }
        };
    })
}


export function getRandomCountry() {
    const country = allCountries[Math.floor(Math.random() * allCountries.length)]; 
    return {
        name: country.country, 
        emoji: country.emoji
    }
}

export function getRandomCountries() { // unfiltered
    var listOfRandomCountries = []; 
    for (let i = 0; i < 4; i++) {
        var randomlyPickedCountry = getRandomCountry(); 
        listOfRandomCountries.push({
            name: randomlyPickedCountry.name, 
            emoji: randomlyPickedCountry.emoji
        })
    }
    return listOfRandomCountries; 
}


export function getCountrySuggestions(keyword) {
    const countries = allCountries.filter(country => country.country.includes(keyword)); 
    return countries.slice(0, 3); 
}

