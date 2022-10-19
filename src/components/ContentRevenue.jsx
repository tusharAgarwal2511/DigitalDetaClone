import React from 'react'
import './ContentRevenue.css'

const ContentRevenue = () => {
    return (
        <div className='content-revenue-div'>

            <div className='content-revenue-animation-div'>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_t4pkerh4.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

            <div className='content-revenue-text-div'>
                <h1>It is time to bring those organic traffic to your webiste</h1>
                <br />
                <p className='text'>We assist to you to see the whole forest before picking the ideal trees that can offer delicious fruits. We understand humans and think just like them.We work with you to pick the best channels, strategies, and technologies that will bring organic traffic.</p>
                <h2>Explore Amazing world of Digital Marketing</h2>
                <button className='button'>Free Conuslation <i className="fa-regular fa-handshake"></i></button>
            </div>

        </div>
    )
}

export default ContentRevenue