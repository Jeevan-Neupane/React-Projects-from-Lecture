import { useState } from "react";
function UserInput({set}){

    const [color,setColor]=useState("");
    const [index,setIndex]=useState(0);
   function onSubmit(events){
    events.preventDefault();
    set(color,index);
    setColor("");


   }
 
   function Change(events){

    const newColor=events.target.value;
    setColor(newColor);

   }

   function Setindex(events){
    const number=parseInt(events.target.value);
    setIndex(number);
   }
   

    return(
        <div>
           <form onSubmit={onSubmit} className="formContainer">
            <label >Enter the name of Color  </label>
            <br></br>
            <br></br>
            <input value={color} onChange={Change}/>
            <br></br>
            <br></br>
            <input type="number" value={index} min={0} onChange={Setindex}/>
            <button>Submit</button>

            <br></br>
            <br></br>
           </form>
        </div>
    )
}

export default UserInput;