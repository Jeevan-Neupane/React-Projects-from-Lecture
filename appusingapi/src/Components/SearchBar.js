import './SearchBar.css'
import { useState } from "react";

function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState("");


    function handleFormSubmit(event) {
        event.preventDefault();
        onSubmit(
            //!Stop doing this in your code
            // document.querySelector("input").value
            term
            );
            
        }
        
        const handleChange=(event)=>{
           setTerm(event.target.value);


    }

    return (<div className='search-bar'>
        <form onSubmit={handleFormSubmit}  >
            <label>Enter Search Term</label>

            <input value={term} onChange={handleChange} autoFocus />
        </form>

    </div>)
}

export default SearchBar;