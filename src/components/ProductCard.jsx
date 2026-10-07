import React from "react";
import "./ProductCard.css";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
    const navigate = useNavigate();

    const ratingValue = Number(props.ratings)
 
  return (
    <div 
    onClick={()=>navigate(`/classnine/${props.id}`)}
    
    className="product-card">
      <div className="product-top">
        <img
          className="product-img"
          alt="card-img"
          src={props.img}
        />
        <p className="product-stock">{props.stock} items in stock</p>
      </div>
      <h4>{props.name}</h4>
      <div className="ratings">
        {Array(Math.ceil(ratingValue))
          .fill(0)
          .map((_, index) => (
            <FcRating />
          ))}
      </div>

      <h5>$ {props.discountPrice}</h5>

      <div className="discount-wrapper">
        <span className="main-price">$ {props.mainPrice}</span>
        <span className="discount-value">-{props.discount}%</span>
      </div>
    </div>
  );
};

export default ProductCard;
