import React from 'react'
import './ContentConsultation.css'

const ContentConsultation = () => {
    return (
        <div className='container-cc'>
            <div className='first-row'>
                <div className='text-container'>
                    <h1>DigitalDeta Units Assorted Minds who love to craft Amazing Digital Marketing Experiences</h1>
                    <p>We create magic at DigitalDeta, turing every complex issue into perfect growth opportunities, You can call as the "New Age Digital Marketers" but we will say we are humans developing solutions for humans. </p>
                </div>
                <br />

                <div className="img-container">
                    <img src="https://digitaldeta.com/wp-content/uploads/2020/03/box1.jpg" alt="" />
                    <img src="https://digitaldeta.com/wp-content/uploads/2020/03/box2.jpg" alt="" />
                    <img src="https://digitaldeta.com/wp-content/uploads/2020/03/box3.jpg" alt="" />
                </div>
                <br />
            </div>

            <br />

            <div className="second-row">
                <div className="img-container-second">
                    <img className='lg' src="https://digitaldeta.com/wp-content/uploads/2020/03/left-image.png" alt="" />
                </div>

                <div className="text-container-second">

                    <h1>We Empower Business to create a Perfect Digital Ecosystem</h1>


                    <h3>Great level of Specialization</h3>
                    <p>We understand the world of digital marketing, and we know which tactics will bring you the desired results.</p>


                    <h3>We believe in Conciseness</h3>
                    <p>The reports and documents you will get from us will only carry user data. DigitalDeta does not use automated report generation tools.</p>


                    <button className='button'>Free Consultation</button>
                </div>

            </div>

        </div>
    )
}

export default ContentConsultation