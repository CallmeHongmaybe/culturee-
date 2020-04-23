import allCountries from './country_names.json';

export function getCountryData(name) {

    const findExactName = (element) => element.name === name;  

    const country = allCountries[allCountries.findIndex(findExactName)];
    const country_name = country.name, emoji_name = country.emoji;
 
    return {
        name: country_name, 
        emoji: emoji_name
    }
}

export function allCountryPaths() {
    return allCountries.map(country => {
        return {
            params: {
                country: country.name
            }
        };
    })
}


export function getRandomCountry() {
    const country = allCountries[Math.floor(Math.random() * allCountries.length)]; 
    const country_name = country.name, emoji_name = country.emoji;  
    return {
        name: country_name, 
        emoji: emoji_name
    }
}



