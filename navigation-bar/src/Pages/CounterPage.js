// import { useState } from 'react'
import { useReducer } from 'react'
import produce from 'immer';

import Button from '../Components/Button'
import Panel from '../Components/Panel';
const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
const VALUE_TO_ADD='VALUE_TO_ADD';
const ADD_A_LOT='ADD_A_LOT';



const reducer=(state,action)=>{

  switch(action.type){
    case VALUE_TO_ADD:
      state.valueToAdd=action.payLoad;
      return;
    case ADD_A_LOT:
      state.count=state.count+action.payLoad
      state.valueToAdd='';
      return;
    case INCREMENT:
      state.count=state.count+action.payLoad;
      return;
    case DECREMENT:
      state.count=state.count+action.payLoad;
      return;
    default:
      return state;  
  }
  

  

}





export default function CounterPage({ intialCount }) {
  const [state,dispatch]=useReducer(produce(reducer),{
    count:intialCount,
    valueToAdd:0,

  })


 
 
  // const [count,setCount]=useState(intialCount);
  // const [valueToAdd,setValueToAdd]=useState(0)
  const increment=()=>{
    dispatch({
      type:INCREMENT,
      payLoad:1,
    })
    // setCount(count+1);
  

  }
  const decrement=()=>{
    dispatch({
      type:DECREMENT,
      payLoad:-1,
    })
  
    // setCount(count-1)

  }
  const handleSubmit=(events)=>{
    events.preventDefault();
    dispatch({
      type:ADD_A_LOT,
      payLoad:state.valueToAdd,
    })
    
    // setCount(count+valueToAdd);
    // setValueToAdd("")

  }
  const handleChange=(events)=>{
    const value=parseInt(events.target.value) || 0;
    dispatch({
      type:VALUE_TO_ADD,
      payLoad:value,
    })
   
    // setValueToAdd(value);
    


  }




  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count Is {state.count}</h1>
      <div className='flex gap-4 mt-4'>
        <Button primary onClick={increment}>Click Here</Button>
        <Button danger onClick={decrement}>Click Here</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot !</label>
        <input  onChange={handleChange} value={state.valueToAdd || ""} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300' />
        <Button secondary>Add It</Button>
      </form>


    </Panel>
  )

}
