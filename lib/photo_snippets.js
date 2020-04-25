import fetch from 'isomorphic-fetch'; 

export default async function getPhotoUrls(country) {
    
    console.log(`country = ${country}`); 
    
    const getImages = await fetch('https://pixabay.com/api/?key=16126233-c951282a698114cecd5f04b0b&q=' + country); 
    const images = await getImages.json(); 

    var listOfImages = [];
    const hitLength = images.hits.length; 
    for (let i = 0; i < 3; i++) {
        listOfImages.push(images.hits[Math.floor(Math.random() * hitLength)]); 
    }
    return listOfImages; 
}
