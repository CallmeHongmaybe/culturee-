const imageSize = {
  width: 300,
  height: 200
}

export default function Intro( {images} ) {
    return (
      <>
      <div className="flex flex-row sm:flex-col p-0 m-5">
      { 
       images.map(image => (
        <div key={image.id} className="p-3 shadow-xl">
          <img src={image.webformatURL} style={imageSize}></img>
          <div className="p-2 text-green-500 text-right ">Taken by {image.user} from <a href={image.pageURL}>Pixabay</a></div>
        </div>
       ))
      }
    </div>
      </>
    )
}
