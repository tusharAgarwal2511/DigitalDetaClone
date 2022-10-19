import React, { useState } from 'react'
import './ContentPrices.css'
import PriceCard from './PriceCard'

const ContentPrices = () => {

    const [monthly, setMonthly] = useState(false)

    const handleClick = () => {
        setMonthly(!monthly)
    }

    console.log(monthly)

    return (
        <div className='container-cp'>
            <div className='text-container'>
                <h1>Our Service Packages - Designed for All</h1>
                <p>We have designed our Digital Marketing services packages with the intention of serving your business's unique requirements. Pick your plan and boost your engagement</p>
            </div>
            <br />
            <div className="button-container">
                <button className={!monthly ?
                    'button-toggle yearly clicked' :
                    'button-toggle yearly '} onClick={handleClick}>
                    Yearly
                </button>

                <button className={monthly ?
                    'button-toggle monthly clicked' :
                    'button-toggle monthly '} onClick={handleClick}>Monthly</button>

            </div>
            <br />
            <div className='price-cards-div'>

                <PriceCard
                    plan='Basic Plan'
                    amount={monthly ? '49' : '499'}
                    duration={monthly ? 'Month' : 'Year'}
                    text1={monthly ? '11 Keywords optimized' : '10 Keywords optimized'}
                    text2='3 Top 10 ranking Guarantee'
                    text3='Website Analysis'
                    text4='Keywords research and analysis'
                    text5='Content Optimization'
                />

                <PriceCard
                    plan='Advanced Plan'
                    amount={monthly ? '79' : '799'}
                    duration={monthly ? 'Month' : 'Year'}
                    text1={monthly ? '12 Keywords optimized' : '10 Keywords optimized'}
                    text2={monthly ? '4 Top 10 ranking Guarantee' : '3 Top 10 ranking Guarantee'}
                    text3='Website Analysis'
                    text4='Keywords research and analysis'
                    text5='Content Optimization'
                />

                <PriceCard
                    plan='Premium Plan'
                    amount={monthly ? '89' : '999'}
                    duration={monthly ? 'Month' : 'Year'}
                    text1={monthly ? '20 Keywords optimized' : '10 Keywords optimized'}
                    text2={monthly ? '5 Top 10 ranking Guarantee' : '3 Top 10 ranking Guarantee'}
                    text3='Website Analysis'
                    text4='Keywords research and analysis'
                    text5='Content Optimization'
                />
            </div>

        </div>

    )
}

export default ContentPrices