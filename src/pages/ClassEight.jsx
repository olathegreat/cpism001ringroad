import React, { useState } from 'react'
import "./ClassEight.css"
import { useEffect } from 'react'
import CurrencyCard from '../components/CurrencyCard'


//  useEffect, props, useState, fetching data from api


const ClassEight = () => {
   
    // useEffect is a react hook that runs a function based on certain events in the react app.
    //1. useEffect that only runs everytime the is any state change
    // const[ searchKeyword, setSearchKeyword] = useState("");
    // useEffect(()=>{

    //     function callMyName(){
    //         console.log("Your name is Olarotimi");
    //     }

    //     callMyName();
    // })

    // 2. use effect that runs only the first time the webbsite loads

    //  useEffect(()=>{

    //     function callMyName(){
    //         console.log("Your name is Olarotimi , trigger any time");
    //     }


    //     callMyName();
    // },[])

    //3. runs the first time and when there is a  specific variable change 

    // useEffect(()=>{

    //     function displayKeyword(){
    //         console.log(searchKeyword);
    //     }


    //     displayKeyword();
    // },[searchKeyword])





    const [arrayOfExchange, setArrayOfExchange] = useState([]);

    useEffect(()=>{

       
        async function getExchangeFunction(){


              //fetch usjng an api... i must use async anc await
             const res = await fetch("https://api.frankfurter.dev/v2/rates?base=ngn");
             console.log(res.body);

             // Convert the response to JavaScript data
              const data = await res.json();
              setArrayOfExchange(...arrayOfExchange, data);
              console.log(arrayOfExchange)

            


        }

        getExchangeFunction();

    },[])

    const [currencyOption, setCurrencyOption] = useState("ngn");

    useEffect(()=>{

          async function getExchangeFunction(){


              //fetch usjng an api... i must use async anc await
             const res = await fetch(`https://api.frankfurter.dev/v2/rates?base=${currencyOption}`);
             console.log(res.body);

             // Convert the response to JavaScript data
              const data = await res.json();
              setArrayOfExchange(data);
              console.log(arrayOfExchange)

            


        }

        getExchangeFunction();

    }, [currencyOption])



    



  return (
    <div className='class-eight'>
        
        {/* ClassEight */}
        {/* <input
           value={searchKeyword}
           onChange={(e)=>setSearchKeyword(e.target.value)}
        
        type='text' 
        placeholder='search for something'/>
        <button>Click Me</button> */}

        <section>
            <form>
                <select
                   value={currencyOption}
                   onChange={(e)=>setCurrencyOption(e.target.value)}
                >
                    <option>usd</option>
                    <option>gbp</option>
                    <option>ngn</option>
                    <option>eur</option>
                    <option>cny</option>
                    <option>cad</option>
                </select>
            </form>
        </section>
    <section className='exchange-wrapper'>

  
        <div className='table-header'>
            <span>Base</span>
            <span>Quote</span>
            <span>Rate</span>
            <span>Date</span>

        </div>

        {
            arrayOfExchange.map((item)=>(
                 

                 <CurrencyCard 
           base={item.base}
           quote={item.quote}
           rate={item.rate}
           date={item.date}
        
        
        />
            ))
        }

  </section>

       
       
            
    </div>
  )
}

export default ClassEight