import React from 'react'
import "./ReviewCard.css"
import { FcRating } from 'react-icons/fc'

const ReviewCard = (props) => {
  return (
    <div className='review-card'>
        <div className='reviewer-info'>
            <div className='dummy-img'>
                {props.name.charAt(0)}

            </div>

            <h3>{props.name}</h3>

        </div>

        <p className='comment'>
            {props.comment}
        </p>

          <div className="ratings">
                {Array(props.ratings)
                  .fill(0)
                  .map((_, index) => (
                    <FcRating />
                  ))}
        </div>

    </div>
  )
}

export default ReviewCard