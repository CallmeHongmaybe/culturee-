const allCountries = require('./country_names.json'); 
const games = require('./games.json');

const fs = require('fs'); 

var trends_list = []; 

for (let i = 0; i < allCountries.length; i++) {
    trends_list.push({   
        country: allCountries[i].name, 
        emoji: allCountries[i].emoji, 
        trends: {
            games: shuffleGames()  
        }
    })
}

function shuffleGames() {
    var game_arr = []; 
    for (let i = 0; i < games.length; i++) {

        var download_count = games[i].downloads * Math.floor(Math.random() * 48); 
        var likes_count = games[i].likes * Math.floor(Math.random() * 32); 

        game_arr.push({
            name: games[i].name,
            downloads: download_count, 
            likes: likes_count
        }); 
    }
    return game_arr; 
}


fs.writeFileSync('/Users/quanvihong/Desktop/cultural-lens-v2/lib/game_trending.json', JSON.stringify(trends_list)); 
