const imageSize = {
  width: 300,
  height: 200
}

export default function Intro( {images} ) {
    return (
      <>
      <ul>
      { 
       images.map(image => (
        <li key={image.total}><img src={image.webformatURL} style={imageSize}></img></li>
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
