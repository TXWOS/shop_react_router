import React,{useState,useEffect} from "react";


const Shop=()=>{
useEffect(()=>{
fetchItems();
},[])

  const fetchItems = async()=>{
const items= await fetch('https://fortnite-api.theapinetwork.com/store/get');
const {data}= await items.json();
console.log(data);
console.log(typeof(data));
console.log(data[0])
};


return(
<h1> This is the Shop Page</h1>
)
};
export default Shop;