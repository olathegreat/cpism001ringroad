import React from 'react'
import "./StudentCard.css"
import { useNavigate } from 'react-router-dom'




const StudentCard = (props) => {
    const navigate = useNavigate();
  return (
    <div
       onClick={()=>navigate(`/students/${props.id}`)}
    className='student-card'>
        <img src={props.img} alt='student img'/>
        <h4>{props.name}</h4>
        <p title={props.bio}>{props.bio}</p>

        <div className='student-bottom'>
            <span>{props.gender}</span>
            <span>{props.program}</span>

        </div>

    </div>
  )
}

export default StudentCard