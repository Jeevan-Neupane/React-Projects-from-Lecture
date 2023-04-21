
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList(){
    const {Books:books}=useBooksContext();
  


    const renderedBooks=books.map((book)=>{
       return  <BookShow key={book.id} book={book} />
    })
    return (
        <div className="book-list">
          
           {renderedBooks}
         

        
          
        </div>

    )
}

export default BookList;