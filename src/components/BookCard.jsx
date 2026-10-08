import React from 'react'
import "./BookCard.css"
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const BookCard = (props) => {
    const navigate = useNavigate();
  return (
    <div className='book-card'
    
    >
        <div className='img-wrapper'>
            <img src={props.img} alt='image'/>

            <button
                onClick={()=> window.open('/aptech-things-fall-apart.pdf', '_blank')}
            >Read Now</button>
        </div>
        
        <div className='book-card-top'>
             <h3>{props.title}</h3>

             <div className='rating-div'>
                <span className='card-rating-star'>
                    <FaStar/>
                </span>

                <span className='rating-value'>
                    {props.ratingValue}

                </span>

             </div>
        </div>

        <h4>{props.author}</h4>


        {/* <a href="../assets/aptech-things-fall-apart.pdf" download="Aptech Things fall Apart" target='_blank'>Download file</a> */}

          <a 
        href="/aptech-things-fall-apart.pdf" 
        download="CPISM_Things_Fall_Apart.pdf"
      >
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Download File
        </button>
      </a>

      <div onClick={()=>navigate(`/naijabooks/${props.id}`)}>
        View Details
      </div>

    </div>
  )
}

export default BookCard