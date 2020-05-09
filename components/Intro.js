export default function Intro( {images} ) {
    return (
      <div className="flex flex-row sm:flex-col p-0 m-5">
      { 
       images.map(image => (
        <div key={image.id} className="p-3 shadow-xl">
          <img src={image.urls.small} style={{width: 300,height: 200}}></img>
          <div className="p-2 text-green-500 text-right ">Taken by {image.user.name} from <a href={image.links.html} target="_blank">Unsplash</a></div>
        </div>
       ))
      }
    </div>
    )
}
