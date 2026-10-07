import React, { useEffect, useState } from "react";
import "./ClassNine.css";
import ProductCard from "../components/ProductCard";

const ClassNine = () => {

    // fetch all products
  const [arrayOfProduct, setArrayOfProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");

      const data = await res.json();
      console.log(data.products);

      setArrayOfProduct(data.products);
    }

    fetchProducts();
  }, []);


//   fetch all categoories

  const [arrayOfCategories, setArrayOfCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://dummyjson.com/products/categories");

      const data = await res.json();

      console.log(data);

      setArrayOfCategories(data);
    }

    fetchCategories();
  }, []);


//   fetch product by categories
    const [selectedCategory, setSelectedCategory]= useState("");

    useEffect(()=>{

        async function fetchProductsByCategory(){
            if(selectedCategory !== ""){

           
            const res = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`)

            const data = await res.json();
            console.log(data);

            setArrayOfProduct(data.products);
             }
        }

        fetchProductsByCategory();

    },[selectedCategory]);

    const submitFunction = (e)=>{
        e.preventDefault();

        async function getSearchProduct(){
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);

            const data = await res.json();
            console.log(data);

            setArrayOfProduct(data.products);
        }

        getSearchProduct();

    }
    const [searchValue, setSearchValue] = useState("");

  return (
    <div className="class-nine">
      <div className="categories">
        {arrayOfCategories.map((item) => (
          <div
              onClick={()=>setSelectedCategory(item.name)}
          className="category-item">{item.name}</div>
        ))}
        <div className="category-item">Men shoe</div>
      </div>
      <div className="main-right">
        <div className="searchbar">
            <form onSubmit={submitFunction}>
                <input
                 type="text" 
                 placeholder="search your product"
                 value={searchValue}
                 onChange={(e)=>setSearchValue(e.target.value)}
                 
                 />
                <button>Search</button>
            </form>

        </div>
        <div className="products-wrapper">

        
        {arrayOfProduct?.map((item) => (
          <ProductCard
            img={item.thumbnail}
            stock={item.stock}
            name={item.title}
            ratings={item.rating}
            id={item.id}
            discountPrice={(
              (item.price * (100 - item.discountPercentage)) /
              100
            ).toFixed(2)}
            mainPrice={item.price}
            discount={item.discountPercentage}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ClassNine;
