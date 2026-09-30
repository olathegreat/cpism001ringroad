import React from 'react'
import NavComponent from '../components/NavComponent'
import UserCard from '../components/UserCard'
import { useNavigate } from 'react-router-dom'
import "./ClassFive.css"
import Testimonial from '../components/Testimonial'
const ClassFive = () => {
    const navigate = useNavigate();
    const reviewsArray = [
        {
            id:1,
            username : "Olamide",
            review:"This is very effective",
            ratings: 4,
            userimg:"https://images.pexels.com/photos/36439572/pexels-photo-36439572.jpeg"
        },

         {
            id:2,
            username : "Jackson",
            review:"It was quite helpful",
            ratings: 3,
            userimg:"https://images.pexels.com/photos/30187929/pexels-photo-30187929.jpeg"
        },
           {
            id:3,
            username : "Racheal",
            review:"I hate this product",
            ratings: 1,
            userimg:"https://images.pexels.com/photos/8872701/pexels-photo-8872701.jpeg"
        },


         {
            id:4,
            username : "Emmanuel",
            review:"Your product is useless",
            ratings: 2,
            userimg:"https://images.pexels.com/photos/34592823/pexels-photo-34592823.jpeg"
        },

         {
            id:5,
            username : "Stella",
            review:"Highly recommended",
            ratings: 5,
            userimg:"https://images.pexels.com/photos/10013308/pexels-photo-10013308.jpeg"
        },



    ]
  return (
    <div>
         <NavComponent text="Welcome Olarotimi"/>



         <p>This is use to teach props in react class</p>

  <div className='cards-wrapper'>
         <UserCard
            userImage = "https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg"
            username = "Daniel"
            userBio = "I love acting drama and reading novels"
            action={()=>navigate("/")}
         />


         <UserCard
             userImage="https://images.pexels.com/photos/29204263/pexels-photo-29204263.jpeg"
             username="Janet"
             userBio="I love everything related to fashion"
             action={()=>navigate("/classthree")}
         />

         </div>


         <div className='testimonial-wrapper'>
              

               {
                reviewsArray.map((review)=>(
                    <Testimonial
                       reviewerImg={review.userimg}
                       reviewerName={review.username}
                       reviewerReview={review.review}
                       ratings={review.ratings}
                       
                    />
                ))
               }


              
         </div>

    </div>
  )
}

export default ClassFive