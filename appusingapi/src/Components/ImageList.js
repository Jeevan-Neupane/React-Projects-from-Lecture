import './ImageShow.css'
import ImageShow from "./ImageShow";
function ImageLists({images}){

    const renderedImages=images.map((image)=>{
        return <ImageShow image={image} key={image.id} />
    })
  console.log(renderedImages[0])
    return (<div className='main'>
       
     {renderedImages}
    </div>)
}

export default ImageLists;