import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book,update}){
    const {changeTitlebyId:onEdit}=useBooksContext();
    const [title,setTitle]=useState(book.title);
    function handleChange(events){
        setTitle(events.target.value);
        

    }
    function submit(events){
        events.preventDefault();
        
        update();
        onEdit(book.id,title); 


    }
    return (
       <form className="book-edit" onSubmit={submit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleChange} autoFocus/>
        <button className="button is-primary">Save</button>

       </form>
    )
}

export default BookEdit;