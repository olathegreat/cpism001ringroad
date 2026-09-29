import React, { useState } from 'react'
import "./Homepage.css"

const Homepage = () => {
    const [count, setCount] = useState(0);
    const [colorOfCount, setColorOfCount] = useState("white");
  return (
    <div className='counter-app'>
     {/* simplee counter in react app */}

     <div className='count' style={{color: colorOfCount}}> {count} </div>

     <div className='button-wrapper'>
        <button 
        onClick={()=>{
            setCount(prev=> prev + 1);
            count >= 9 ? setColorOfCount("green") : setColorOfCount("white");
        }} className='increase-btn'>Increase</button>

        <button
        onClick={()=>{
            setCount(0);
            setColorOfCount("white");
        }}    
        className='reset-btn'>Reset</button>
        <button 
            onClick={()=>{
            setCount(prev => prev - 1);
                  count <= 1 ? setColorOfCount("red") : setColorOfCount("white");
        }}
        
        className='decrease-btn'>Decrease</button>

     </div>
    </div>
  )
}

export default Homepage