import React from 'react'
import './Header.css';
import { assets } from '../../assets/assets';


const Header = () => {
  return (
    <div
      className='header'
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
        <div className='header-content'>
            <h2>Even the hungriest can find something here.</h2>
            <p>Order from your favorite local restaurants for delivery or pickup.</p>
            <button>View Menu</button>
            
        </div>
    </div>
  )
}

export default Header
