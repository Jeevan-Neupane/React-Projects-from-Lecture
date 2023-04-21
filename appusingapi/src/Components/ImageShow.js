import './ImageShow.css'
function ImageShow({image}){
   
    return (
    <div >
       <img src={image.urls.small} alt={image.alt_description}/>
       <p>Hello</p>

    </div>)
}

export default ImageShow;