import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-div'>

                <div className="about-us footer-column">
                    <h2 className='about-header footer-header'>About Us</h2>
                    <p className='about-text footer-text'>
                        With more than five years of experience, Digitaldeta offers simple digital marketing solutions to advanced digital marketing services. We develop SEO strategies based on current search algorithms.
                    </p>
                </div>

                <div className="important-links footer-column">
                    <h2 className='links-header footer-header'>Important Links</h2>
                    <p className='links-text footer-text'>Home</p>
                    <p className='links-text footer-text'>About Us</p>
                    <p className='links-text footer-text'>Case Studies</p>
                    <p className='links-text footer-text'>Our Team</p>
                    <p className='links-text footer-text'>Contact Us</p>
                </div>

                <div className="featured-services footer-column">
                    <h2 className='services-header footer-header'>Featured Services</h2>
                    <p className='services-text footer-text'>Search Engine Optimization</p>
                    <p className='services-text footer-text'>App Development</p>
                    <p className='services-text footer-text'>Web Development</p>
                    <p className='services-text footer-text'>Marketing Analysis</p>
                    <p className='services-text footer-text'>Social Media Marketing</p>
                </div>

                <div className="contact-services footer-column">
                    <h2 className='contact-header footer-header'>Contact us</h2>
                    <p className='contact-text footer-text'>Office Address</p>
                    <p className='contact-text footer-text'>Plot No -186/A ,Sahid Nagar,Bhubaneswar.</p>
                    <p className='contact-text footer-text'>Phone: (+91) 7873775777</p>
                    <p className='contact-text footer-text'>Email: info@Digitaldeta.com</p>
                </div>

            </div>
            <div className='copyright-div'>
                <p className='copyright-text'>Copyright © 2019 DIGITALDETA . All Rights Reserved.</p>
                <div className='icons'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>


    )
}

export default Footer