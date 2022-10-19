import React from 'react'
import './ContentTestimonial.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const ContentTestimonial = () => {



    return (
        <div className='container-ct'>
            <div className='carousel-container'>
                <h1 className='title'>They Are All Talking About DigitalDeta</h1>
                <Carousel className='carousel' controls={false} indicators={false}>

                    <Carousel.Item interval={500}>
                        <p className='testimonial-text'>"We just completed our website with DigitalDeta, It is so professionally done and eye appealing, not to mention how great it looks and works with mobile devices. When you choose DigitalDeta you get a brilliant, professional team with innovative ideas, awesome customer service, and exactly what you’re looking for."</p>
                        <div className='testimonial-person'>

                            <img src="https://digitaldeta.com/wp-content/uploads/2019/07/11.png" alt="" />
                            <div className="name-text">
                                <h4>ABHAYA MAHANTA</h4>
                                <p>WE4YOU</p>
                            </div>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <p className='testimonial-text'>"It is a pleasure for me to recommend DigitalDeta’s Social Media Marketing Strategy, to any and all interested parties. Their team members are very professional, comprehensive and skilled in every manner."</p>
                        <div className='testimonial-person'>

                            <img src="https://digitaldeta.com/wp-content/uploads/2019/07/22.png" alt="" />
                            <div className="name-text">
                                <h4>BAISHALI MOHAPATRA</h4>
                                <p>Finentice Salon and Academy</p>
                            </div>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <p className='testimonial-text'>"Compared to the other companies we have used in the past, DigitalDeta has been far and above the best in every area.With DigitalDeta’s help we are now reaching a bigger audience with more positive and engaging messages.These guys are true professionals in every aspect."</p>
                        <div className='testimonial-person'>

                            <img src="https://digitaldeta.com/wp-content/uploads/2020/03/44.png" alt="" />
                            <div className="name-text">
                                <h4>JAGANNATH PRADHAN</h4>
                                <p>State Executive Member BJP Odisha</p>
                            </div>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <p className='testimonial-text'>"DigitalDeta’s website design team far exceeded my expectations on every front, as I have very high expectations. The end result is a beautiful website that defines who we are as a salon. Every person I worked with at DigitalDeta is educated, creative, punctual, and friendly."</p>
                        <div className='testimonial-person'>

                            <img src="https://digitaldeta.com/wp-content/uploads/2020/03/22-1.png" alt="" />
                            <div className="name-text">
                                <h4>SHIVA MISHRA</h4>
                                <p>As One Infrastructure</p>
                            </div>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <p className='testimonial-text'>"My new clinic website created by digitalDeta just launched. I had very high expectations for my website and their website design team really exceeded my expectations. Every person I worked with at digitalDeta was experienced, creative, prompt, and friendly."</p>
                        <div className='testimonial-person'>

                            <img src="https://digitaldeta.com/wp-content/uploads/2019/07/66.png" alt="" />
                            <div className="name-text">
                                <h4>DR. SUNIL KAR</h4>
                                <p>Sai Shradha Smile Dental Care</p>
                            </div>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <p className='testimonial-text'>"Firstly I would like to thank digitalDeta’s entire team for their hard work. Whenever I and my team needed advice or help they were always there to resolve our issue. Any issues were promptly dealt with by their team."</p>
                        <div className='testimonial-person'>

                            <img src="https://digitaldeta.com/wp-content/uploads/2019/07/33.png" alt="" />
                            <div className="name-text">
                                <h4>VIVEK KR. BURMAN</h4>
                                <p>Simplified Solution</p>
                            </div>
                        </div>

                    </Carousel.Item>

                </Carousel>
            </div>
            <img className='testimonial-img' src={process.env.PUBLIC_URL + '/testimonial_img.png'} alt="logo" />
        </div>
    )
}

export default ContentTestimonial