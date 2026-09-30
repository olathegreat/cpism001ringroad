import React from 'react'
import "./NavComponent.css"

const NavComponent = (props) => {
  return (
    <nav className='my-nav'>
        <h1>CPISM001</h1>

        <p>{props.text}</p>

        <button>Login</button>
    </nav>
  )
}

export default NavComponent