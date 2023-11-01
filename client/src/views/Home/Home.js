import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from 'axios';
import './Home.css'

function Home () {
  const [products, setProducts] = useState([])

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
        <h1>home</h1>
       <div className="card-flex">
       {
          products.map((product,i) => {
            const {image, title, description,price} = product;

            return(
             
              <ProductCard 
              image={image}
              title={title}
              description={description}
              price={price}
              />
            )
          })
        }
       </div>
       </>
    )
}

export default Home