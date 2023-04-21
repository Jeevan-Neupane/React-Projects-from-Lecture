export default function ProfileCard({title,handle,img,description}){
    // const title=props.title;
    // const handle=props.handle;
    // const {title:heading,handle:hand}=props;


    return (
        <div className="card">
            <div className="card-image">
            <figure className="image is-4by3">
            <img src={img} alt='logo'/>

            </figure>

            </div>

            <div className="card-content">
            <div className="media-content">
            <p className="title is-4"> {title}</p>
            <p className="subtitle is-6">{handle}</p> 
            
            </div>
            <p className="content">{description}</p>
           

            </div>

        </div>
        
)
}



{/* <img src={img} alt='logo'/>
<div>Title is {title}</div>
    <div>Twitter handle is {handle}</div> */}