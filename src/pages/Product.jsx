import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
const Product = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function getFun() {
      let result = await fetch("http://localhost:8000/product", {
        method: "get",
        headers: { "content-type": "application/json" },
      });

      if (result) {
        result = await result.json();
      
        setProducts(result);
      }
    }
    getFun();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
        
      {products &&
        products.map((value,index) => (<ProductItem key={index} value={value}/>))}
    </div>
  );
};

export default Product;
