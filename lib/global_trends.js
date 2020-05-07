const allCountries = require("./game_trending.json"); 

var totalDownloads = 0; 

for (let i = 0; i < allCountries.length; i++) { 
   var movTrend = allCountries[i].trends.movies.filter(movie => movie.name === "Frozen 2"); 
   for (let j = 0; j < movTrend.length; j++) {
       totalDownloads += movTrend[j].likes;
   }
}

console.log(totalDownloads)
