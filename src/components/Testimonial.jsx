import React from 'react'
import { FcRating } from "react-icons/fc";
import "./Testimonial.css"

const Testimonial = (props) => {

    

  return (
    <div className='testimonial-card'>
        <div className='reviewer-info'>

       
        <img src={props.reviewerImg}/>
        <h5>{props.reviewerName}</h5>
         </div>
        <p>{props.reviewerReview}</p>

        <div className='ratings'>
            {

                 Array(props.ratings).fill(0).map((_, index)=>(
                         <FcRating />
                 ))
               
            }
           
             
        </div>

    </div>
  )
}

export default Testimonial