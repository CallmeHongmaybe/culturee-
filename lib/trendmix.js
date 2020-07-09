const allCountries = require('./country_names.json'); 
const fs = require('fs'); 

var jsonList = []; 

for (let i = 0; i < allCountries.length; i++) {
    var date = new Date(Date.now() + (604800000 * 2)); // 2 weeks from now  
    jsonList.push({   
        _id: allCountries[i].name, 
        expr: date, 
        poll: addRandomItems(),  
    })  
}


function addRandomItems() {
    var movarr = []; 
    for (let i = 0; i < 2; i++) {
        movarr.push({
            "_id": ["Ad Astra", "Avatar 2"][i], 
            "votes": Math.floor(Math.random() * 100)
        }); 
    }
    return movarr; 
}


fs.writeFileSync('/Users/quanvihong/Desktop/cultural-lens-v2/lib/movie_imp.json', JSON.stringify(jsonList)); 
