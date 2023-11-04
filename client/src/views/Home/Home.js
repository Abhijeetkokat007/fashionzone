import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from 'axios';
import './Home.css'

function Home () {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('');

  async function searchData(){
    const searchdata = await axios.get(`/products/search?q=${search}`)
   
    setProducts(searchdata?.data?.data)
  }
  useEffect(()=>{
    searchData()
  },[search])

  const productsData = async () => {
   
    const response = await axios.get("/products")
    setProducts(response?.data?.data)

  
  }
  

  useEffect(() => {
     productsData()
  }, [])

    return(
       <>
      <Navbar/>
        

<input type="text" 
className="input-search"
placeholder="search product " 
value={search}
onChange={(e)=>{
  setSearch(e.target.value)
}}
/>


       <div className="card-flex">
       {
          products.map((product,i) => {
            const {_id, image, title, description,price} = product;

            return(
             
              <ProductCard 
              image={image}
              title={title}
              description={description}
              price={price}
              id={_id}
              />
            )
          })
        }
       </div>
       </>
    )
}

export default Home