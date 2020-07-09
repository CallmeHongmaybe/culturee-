const countryList = require('./country_names.json'); 

export function getNameAndEmoji(name) {
    const candidate = countryList.find((element) => element.name === name);
    return {
        name: candidate.name, 
        emoji: candidate.emoji
    }
}

export function getRandomCountry() {
    const country = countryList[Math.floor(Math.random() * countryList.length)]; 
    return {
        name: country.name, 
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
    const countries = countryList.filter((country) => country.name.includes(keyword)); 
    return countries.slice(0, 3); 
}

