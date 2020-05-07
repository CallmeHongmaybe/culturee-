import fetch from 'isomorphic-fetch'; 

// https://api.unsplash.com/search/photos?query=anguilla&client_id=-VJshLhodJvCxWLdl82nQ16MU-KDs0mM_b33aWueogo
// for (int i = 0; i < results.length; i++) {listOfImages.push(results[i].urls.regular)}
// return images; 

export async function getPhotoUrls(country) {    
    const getImages = await fetch('https://pixabay.com/api/?key=16126233-c951282a698114cecd5f04b0b&q=' + country);
    const images = await getImages.json(); 
   
    var listOfImages = [];
    const hitLength = images.hits.length; 
    
    if (hitLength < 3) {
        for (let i = 0; i < hitLength; i++) {
            listOfImages.push(images.hits[i]); 
        }
    } 
    else {
        for (let i = 0; i < 3; i++) {    
            listOfImages.push(images.hits[Math.floor(Math.random() * hitLength)]); 
        }
    }

    return listOfImages.filter((value, index) => listOfImages.indexOf(value) === index); 
}

export default async function getFeaturedPhotos(countries) {    
    var listOfImages = [];
    for (let i = 0; i < countries.length; i++) {
        const getImage = await getPhotoUrls(countries[i].name);
        listOfImages.push(getImage[0].webformatURL); 
    }
    return listOfImages; 
}
