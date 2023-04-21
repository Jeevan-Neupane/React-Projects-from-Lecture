import { useState } from "react";
import APIamges from "./Api";
import ImageList from './Components/ImageList'
import SearchBar from "./Components/SearchBar";

 


function App(){

    const [images,udateImages]=useState([]);
    async function  onSubmit(value){
       const ArrayImages=await APIamges(value)
       udateImages(ArrayImages);

       

    }

    return (<div>
      <SearchBar  onSubmit={onSubmit}/>
      <ImageList images={images}/>
        

    </div>)
}

export default App;