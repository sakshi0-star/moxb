import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
    return (
        <div className='footer' id = "footer">
            <div className="footer-content">
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Fresh food, delivered fast. Locally sourced, expertly prepared, and brought straight to your door.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>

                <div className="footer-content-">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 234 567 890</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>

            </div>
            <hr />
            <p className="footer-copyr">Copyright 2026 @Tomato.com -All Rights Reserved</p>
            
            
        </div>
            )
}
 export default footer