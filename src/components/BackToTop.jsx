import React, { useEffect, useState } from 'react'
import './BackToTop.css'

const BackToTop = () => {

    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            }
            else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {backToTop && (
                <button className='back-to-top-button' onClick={scrollUp}><i class="fa-solid fa-caret-up"></i></button>
            )}
        </div>
    )
}

export default BackToTop