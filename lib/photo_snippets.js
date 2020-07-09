import fetch from 'isomorphic-fetch'; 

export async function getPhotoUrls(country) {    
    const getImages = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(country)}&client_id=${process.env.UNSPLASH_KEY}`);
    const images = await getImages.json(); 

    var listOfImages = []; 

    const hitLength = images.total; 
    
    if (hitLength < 3) {
        for (let i = 0; i < hitLength; i++) {
            listOfImages.push({
                    id: images.results[i].id, 
                    snippet: images.results[i].urls.small, 
                    raw: images.results[i].urls.raw, 
                    author: images.results[i].user.name, 
                    source: images.results[i].links.html 
            }); 
        }
    } 
    else {
        for (let i = 0; i < 3; i++) {    
            listOfImages.push({
                id: images.results[i].id, 
                snippet: images.results[i].urls.small, 
                raw: images.results[i].urls.full, 
                author: images.results[i].user.name, 
                source: images.results[i].links.html 
            })
        }
    }

    return listOfImages; 
}

export default async function getFeaturedPhotos(countries) {    
    var listOfImages = [];
    for (let i = 0; i < countries.length; i++) {
        const getImages = await getPhotoUrls(countries[i].name);
        if (getImages.length) {
            listOfImages.push(getImages[0].raw); 
        }
    }
    return listOfImages; 
}
