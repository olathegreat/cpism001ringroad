import React from 'react'
import "./UserCard.css"


const UserCard = (props) => {
  return (
    <div className='user-card'>
        <img src={props.userImage} alt=''/>
        <h4>{props.username}</h4>
        <p>{props.userBio}</p>

        <button onClick={props.action}>perform action</button>
    </div>
  )
}

export default UserCard