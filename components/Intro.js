const imageSize = {
  width: 300,
  height: 200
}

export default function Intro( {images} ) {
    return (
      <>
      <ul className="m-5">
      { 
       images.map(image => (
        <li key={image.total} className="p-3 shadow-xl">
          <img src={image.webformatURL} style={imageSize}></img>
          <div className="p-2 text-green-500 text-right ">Taken by {image.user} from <a href={image.pageURL}>Pixabay</a></div>
        </li>
       ))
      }

      <style jsx>{`
      ul {
        display: flex; 
        flex-direction: row; 
        list-style-type: none; 
        padding: 0; 
      }

      li {
        padding: 0; 
        margin-right: 10px;
      }
      `}</style>
    </ul>
      </>
    )
}
