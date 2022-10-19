import React from 'react'
import './PriceCard.css'

const PriceCard = (props) => {
    return (
        <div className='container-pc'>
            <h3 className='plan'>{props.plan}</h3>
            <h1 className='amount'>{props.amount}<span className='duration'>/{props.duration}</span></h1>
            <p className='text'>{props.text1}</p>
            <p className='text'>{props.text2}</p>
            <p className='text'>{props.text3}</p>
            <p className='text'>{props.text4}</p>
            <p className='text'>{props.text5}</p>
            <button className='package-button'>Select Package</button>

        </div>
    )
}

export default PriceCard