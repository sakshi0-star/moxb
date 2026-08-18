import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {  // ← Changed to capital 'S'
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="Add Product" />
            <p>Add Product</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to='/list' className="sidebar-option">
            <img src={assets.add_icon} alt="List Product" />
            <p>List Product</p>  {/* ← Changed h1 to p for consistency */}
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to='/orders' className="sidebar-option">
            <img src={assets.add_icon} alt="Order Product" />
            <p>Order Product</p>  {/* ← Changed h1 to p for consistency */}
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar  // ← Changed to capital 'S'