import React from 'react'
import './Footer.scss'
import logo from '../../img/Logo.svg'
import i1 from '../../img/i1.png'
import i2 from '../../img/i2.png'
import i3 from '../../img/i3.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="wrapper">
                 <Link to={'/'}>   <img src={logo} alt="" /></Link>
                    <div className="info">
                        <p>
                            About Us
                        </p>
                        <p>
                            Contact
                        </p>
                        <p>
                            Terms & Conditions
                        </p>
                    </div>
                    <div className="social">
                        <div className="facebook">
                            <img src={i1} alt="" />
                            <p>
Facebook
                            </p>
                        </div>
                        <div className="twitter">
                            <img src={i2} alt="" />
                            <p>
Twitter
                            </p>
                        </div>
                        <div className="instagram">
                            <img src={i3} alt="" />
                            <p>
Instagram
                            </p>
                        </div>
                    </div>
                    <div className="massage">
                        Subscribe to our newsletter <br />
                        <input className='massage__int' placeholder='Email Address' type="text" name="" id="" />
                        <button className='massage__btn'>
                            ok
                        </button>
                    </div>
                    <div className="addres">
                        <p>
                            497 Evengreed Rd. Roseville, Ca 95673 <br />
                            +44 345 678 903 <br />
                            adobexd@gmail.com
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer