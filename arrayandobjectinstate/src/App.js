import UserInput from "./Component/Input";
import { useState } from "react";

function App(){
   const [colors,setColors]=useState([]);
  
  const addColors=(newcolor,index)=>{
  
    const updatedColor=[...colors.slice(0,index),newcolor,...colors.slice(index)];
 
    setColors(updatedColor);

  }
 const test=["green","blue","Yellow","red"]
  const removeColors=test.filter((color,index)=>{
    return 2!==index;
  })

 

  const renderedColors=colors.map((color,i)=>{
    return <li key={i}>{color}</li>
  })
  const testrenderedColors=removeColors.map((color,i)=>{
    return <li key={i}>{color}</li>
  })

    return (
        <div className="Colors">
            <UserInput set={addColors}/>
           {renderedColors}
           {testrenderedColors}
        </div>
    )
}

export default App;