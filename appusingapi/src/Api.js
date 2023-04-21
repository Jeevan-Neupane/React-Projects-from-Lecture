

const SearchImages=async (input)=>{
    let  url = `https://api.unsplash.com/search/photos?query=${input}&per_page=20&client_id=d5-PKea04ZM6ur5wEQJsK40zka3VnWMdxB3edsHqMh4`;
    const response=await fetch(url);
    const Data=await response.json();
   
   
    return  Data.results;




}


export default SearchImages;