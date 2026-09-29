import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import "./ClassThree.css"


const ClassThree = () => {
    const [isSignPopup, setIsSignPopup] = useState(false);

    const [isVideoDisplay, setIsVideoDisplay] = useState(false);
  return (
    <div  className='class-three'>
          
          <nav>
              <h1>CPISMCLASS</h1>

              <p>Welcome</p>

              <button
                onClick={()=>setIsSignPopup(true)}
              >Sign Up</button>
          </nav>


          <section>
              <button onClick={()=>setIsVideoDisplay(true)}>Watch Video Tutorial</button>
          </section>

          {

                isSignPopup === true ? (
                         <section className='form-popup'>

            <div 
            className='cancel-div'
            onClick={()=>setIsSignPopup(false)}
            
            >
                <MdOutlineCancel />
            </div>

              <form>
                <div>
                    <label>Name</label><br/>
                    <input type='text ' placeholder='type in name'/>
                </div>
                <div>
                    <label>Email</label><br/>
                    <input type='email' placeholder='type in email'/>
                </div>
                <div>
                    <label>Phone No.</label><br/>
                    <input type='tel' placeholder='type in phone'/>
                </div>
                <div>
                    <label>Password</label><br/>
                    <input type='Password' placeholder='type in password'/>
                </div>

                <button>Submit</button>
              </form>

          </section>

                ) : ""

          }


          {

             isVideoDisplay  ? (
                         <section className='watch-video'>
            
            <div 
            className='cancel-div'
            onClick={()=>setIsVideoDisplay(false)}
            
            >
                <MdOutlineCancel />
            </div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q7eUMydfjlc?si=2O04v7N2ruDEx5rQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </section>
             ) : ""


          }

      

        




        



    </div>
  )
}

export default ClassThree