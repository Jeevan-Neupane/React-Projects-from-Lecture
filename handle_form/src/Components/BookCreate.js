import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    

    const [input, setInput] = useState('');
    const {createBook:onCreate}=useBooksContext();

    function changeInput(events) {
        setInput(events.target.value);
    }
    function passValue(events) {
        events.preventDefault();
        onCreate(input);
        setInput("");




    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={passValue}>
                <label>Title</label>
                <input onChange={changeInput} value={input} className="input" />

                <button className="button">Submit</button>
            </form>
        </div>
    )
}


export default BookCreate;