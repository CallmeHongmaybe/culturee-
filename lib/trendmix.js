const allCountries = require('./country_names.json'); 
const fs = require('fs'); 

var jsonList = []; 

const maxTime = 604800000 * 2, minTime = 604800000 / 2

for (let i = 0; i < allCountries.length; i++) {
    var date = new Date(Date.now() + Math.floor(Math.random() * (maxTime - minTime + 1))); // half a week to 2 weeks from now  
    jsonList.push({   
        _id: allCountries[i].name, 
        expr: date, 
        poll: addRandomItems(),  
    })  
}


function addRandomItems() {
    var movarr = []; 
    for (let i = 0; i < 3; i++) {
        movarr.push({
            "_id": ["Terrarria", "World of Warcraft", "The Sims"][i], 
            "votes": Math.floor(Math.random() * 100)
        }); 
    }
    return movarr; 
}


fs.writeFileSync('/Users/quanvihong/Desktop/cultural-lens-v2/lib/games_imp.json', JSON.stringify(jsonList)); 
