
import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

import BookEdit from "./BookEdit";

function BookShow({book}){
    const {deletebookById:onDelete}=useBooksContext();
  
    const [showEdit,setShowEdit]=useState(false);

    const handleDeleteClick=(events)=>{
        onDelete(book.id);

    }
    const handleEditClick=()=>{
        setShowEdit(!showEdit);
        
       

    }
    function updateShowedit(){
        setShowEdit(false)
       

    }
    let content=<h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit book={book}  update={updateShowedit}/>
    }
    
  
    return (
        <div className="book-show">
            <img
            alt="book"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
           <div>{content}</div>
           <div className="actions">
            <button className="edit" onClick={handleEditClick}></button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>


           </div>
        </div>
    )
}


export default BookShow;
