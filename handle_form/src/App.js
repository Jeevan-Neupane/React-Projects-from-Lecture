import BookList from './Components/BookList'
import BookCreate from './Components/BookCreate';

import { useEffect ,useContext} from 'react';
import BooksContext from './context/books';
function App() {
    const {stableFunction}=useContext(BooksContext);
    
    useEffect(() => {
       return stableFunction()
    }, [stableFunction])

    return (

        <div className='app'>
            <h1>Reading List</h1>

            <BookList  />
            <BookCreate />

        </div>


    )
}


export default App;