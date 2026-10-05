import React from 'react'
import "./CurrencyCard.css"


const CurrencyCard = (props) => {
  return (
    <div className='currency-card'>
        <span>{props.base}</span>
        <span>{props.quote}</span>
        <span>{props.rate}</span>
        <span>{props.date} </span>

    </div>
  )
}

export default CurrencyCard