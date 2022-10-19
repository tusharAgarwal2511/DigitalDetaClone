import React, { useState } from 'react'
import './Header.css'
// import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Dropdown, Menu } from 'semantic-ui-react'




const Header = () => {

    const [fix, setFix] = useState(false)
    const [clicked, setClicked] = useState(false)

    function setFixed() {
        if (window.scrollY >= 100) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }

    function handleClick() {
        setClicked(!clicked)

    }

    window.addEventListener('scroll', setFixed)


    return (
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
            <a href="/">
                <img className='heading-img' src="https://digitaldeta.com/wp-content/uploads/2021/05/DDLOGO.png" alt="heading" />
            </a>

            <div>
                <ul id='navbar' className={clicked ? 'active' : ''}>
                    <li><a className='nav-item' >Home</a></li>
                    <li><a className='nav-item' >About Us</a></li>
                    <li>

                        <a className='nav-item' >
                            <div class="dropdown">
                                <span>Services<i class="ri-arrow-drop-down-fill"></i></span>
                                <div class="dropdown-content">
                                    <h5 className='dropdown-element'>SEO</h5>
                                    <h5 className='dropdown-element'>App Development</h5>
                                    <h5 className='dropdown-element'>Web Development</h5>
                                    <h5 className='dropdown-element'>PPC Management</h5>
                                    <h5 className='dropdown-element'>Web Design</h5>
                                    <h5 className='dropdown-element'>Social Media Marketing</h5>
                                    <h5 className='dropdown-element'>Marketing Analysis</h5>
                                </div>
                            </div>
                            {/* <Dropdown text='Services' className='nav-item dropdown'>
                                <Dropdown.Menu className='dropdown-menu nav-item'>

                                    <Dropdown.Item text='SEO' className='dropdown-menu dropdown-item' />

                                    <Dropdown.Item text='App Development' className='dropdown-menu dropdown-item' />

                                    <Dropdown.Item text='Web Development' className='dropdown-menu dropdown-item' />

                                    <Dropdown.Item text='PPC Management' className='dropdown-menu dropdown-item' />

                                    <Dropdown.Item text='Web Design' className='dropdown-menu dropdown-item' />

                                    <Dropdown.Item text='Social Media Marketing' className='dropdown-menu dropdown-item' />

                                    <Dropdown.Item text='Marketing Analysis' className='dropdown-menu dropdown-item' />

                                </Dropdown.Menu>
                            </Dropdown> */}
                        </a>
                    </li>
                    <li><a className='nav-item' >Privacy Policy</a></li>
                    <li><a className='nav-item' >Our Team</a></li>
                    <li><a className='nav-item' >FAQ</a></li>
                    <li><a className='nav-item' >Contact Us</a></li>
                    <li>
                        <a href='#' className='nav-item' >
                            <div class="dropdown">
                                <span>Career<i class="ri-arrow-drop-down-fill"></i></span>
                                <div class="dropdown-content">
                                    <h5 className='dropdown-element'>Terms and Condition</h5>
                                    <h5 className='dropdown-element'>Graphic Design</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div id="mobile" onClick={handleClick} className='icon'>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>

        </nav >
    )
}

export default Header