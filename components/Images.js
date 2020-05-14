export default function Images( {images} ) {
    return (
      <div className="flex flex-row sm:flex-col p-0 m-5">
      { 
       images.map(image => (
        <div key={image.id} className="p-3 shadow-xl">
          <img src={image.snippet} style={{width: 300,height: 300}}></img>
          <div className="p-2 text-green-500 text-right ">Taken by {image.author} from <a href={image.source} target="_blank">Unsplash</a></div>
        </div>
       ))
      }
    </div>
    )
}
