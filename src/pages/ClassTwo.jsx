import React, { useState } from 'react'


const ClassTwo = () => {
//   create a react program that initially displays
//   welcome to my webiste but on button show name 
//   click, the text changes to welcome to my website Olarotimi
//   2. In the same program, there should be a button that 
//   toggles a paragraph , write hsort information about
//  yourself in the paragraph

  const [displayText, setDisplayText] = useState("Welcome to my website");
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className='class-two'>
        <h2>{displayText}</h2>
       {/* conditional display */}
        {
            isToggled === true ? (
                       <p>This is the paragraph that should be toggled.</p>
            ) : ""
        }

        <button
           onClick={()=>setDisplayText("Welcome to my website Olarotimi")}
        >SHow my name</button>
        <button
           onClick={()=>setIsToggled(!isToggled)}
        >Toggle button</button>

    </div>
  )
}

export default ClassTwo