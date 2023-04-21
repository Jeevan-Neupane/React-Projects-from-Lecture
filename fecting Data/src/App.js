import './App.css'
import { useState } from "react";
import AnimalShow from './AnimalShow'

function getRandomAnimals(){
  const animals=['bird','cat','cow','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)]
}


function App() {
 
  const [animals ,setanimals]=useState([]);

  
  const handleClick=()=>{
    
    setanimals([...animals,getRandomAnimals()]); 
    
  }
  
  const renderedAnimals=animals.map((animal,index)=>{
    
   return <AnimalShow type={animal} key={index}/>
  })

  // }
  // const [count,setCount]=useState(0);
  // console.log(count)

  // function Change(){
  //   setCount(count+1);
  // }
 
  return (
    <div className='app'>
      <button onClick={handleClick} >Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
      
    </div> 
    // <div>
    //   <button onClick={Change}>Change Number</button>

    //   <p>The Change in number is:{count}</p>
    //   {count} <hr></hr>
    //   {count}
      

    // </div>
  );
 

 


}

export default App;