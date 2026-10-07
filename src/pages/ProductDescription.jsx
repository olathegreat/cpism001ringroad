import React, { useEffect, useState } from 'react'
import "./ProductDescription.css"
import ReviewCard from '../components/ReviewCard'
import { useNavigate, useParams } from 'react-router-dom'


const ProductDescription = () => {
    const {id} = useParams();
    const navigate = useNavigate();

      const [product, setProduct] = useState({});

      useEffect(()=>{

        async function fetchSingleProduct(){
          const res = await fetch(`https://dummyjson.com/products/${id}`);

          const data = await res.json();

          console.log(data);
          setProduct(data);



        }

        fetchSingleProduct();

      },[])



  return (
    <div className='product-description-page'>
        <button onClick={()=>navigate(-1)}>Go back</button>
        <h2>{product.title} {id}  </h2>
         <img src={product.thumbnail} alt={product.title} className='main-product-img'/>

         <div>{product.description}</div>


         <section className='review-section'>
            {
                product?.reviews?.map((item)=>(
 <ReviewCard 
            ratings={item.rating} 
            name={item.reviewerName}
            comment={item.comment}
            
            />

                ))
            }
           


         </section>

         <p>Price: $ {product.price}</p>
         <p>In stock {product.stock}</p>


    </div>
  )
}

export default ProductDescription