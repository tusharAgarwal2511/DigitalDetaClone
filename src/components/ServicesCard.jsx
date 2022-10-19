import React from 'react'
import './ServicesCard.css'

const ServicesCard = (props) => {
    return (
        <div className='card-container'>
            <img src={props.imageUrl} alt="" />
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ServicesCard