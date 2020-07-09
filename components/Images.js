export default function Images( {images} ) {
    return (
      <>
        <h2 className="text-bold text-2xl text-red-600 text-center"> Gallery </h2>
        <div className="flex flex-row justify-evenly sm:flex-col p-0 m-5">
        { 
        images.map(image => (
          <div key={image.id} className="p-3 shadow-xl">
            <img src={image.snippet} style={{width: 300,height: 300}}></img>
            <div className="p-2 text-green-500 text-right ">Taken by {image.author} from <a href={image.source} target="_blank">Unsplash</a></div>
          </div>
        ))
        }
      </div>
      </>
    )
}
