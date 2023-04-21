import { createContext, useCallback, useState } from "react";

const BooksContext = createContext();


function Provider({ children }) {
    const [Books, setBooks] = useState([]);


  const stableFunction= useCallback( async function getData() {
        const response = await fetch("http://localhost:3002/books", {
            method: "GET",
            headers: {
                "content-type": 'application/json'
            }
        })
        const data = await response.json();

        setBooks(data)

    },[])


  
    const deletebookById = async (id) => {
        await fetch((`http://localhost:3002/books/${id}`), {
            method: "DELETE"
            ,
            headers: {
                "content-type": 'application/json'
            }



        })


        const updatedBooks = Books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }
    const changeTitlebyId = async (id, title) => {

        const response = await fetch((`http://localhost:3002/books/${id}`), {
            method: "PUT",
            body: JSON.stringify({
                title
            })
            ,
            headers: {
                "content-type": 'application/json'
            }



        })
        const data = await response.json();

        const updatedBooks = Books.map((book) => {
            if (book.id === id) {
                return { ...book, ...data };
            }
            return book;
        })

        setBooks(updatedBooks);


    }






    const createBook = async (title) => {

        const response = await fetch("http://localhost:3002/books", {
            method: "POST",
            body: JSON.stringify({
                title
            }),
            headers: {
                "content-type": 'application/json'
            }
        })
        const data = await response.json();

        const updatedBooks = [...Books, data];

        setBooks(updatedBooks);

    }
    const valueToShare={
        Books,
        deletebookById,
        changeTitlebyId,
        createBook,
        stableFunction,
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}



export { Provider };
export default BooksContext;


