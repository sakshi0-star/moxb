import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our selection has something for everyone!</p>
            <div className="explore-menu-list">
                <div 
                    onClick={() => setCategory("All")}
                    className={category === "All" ? "explore-menu-list-item active" : "explore-menu-list-item"}
                >
                    <img src="/all_icon.png" alt="All" />
                    <p>All</p>
                </div>
                {menu_list.map((item, index) => (
                    <div 
                        key={index}
                        onClick={() => setCategory(item.menu_name)}
                        className={category === item.menu_name ? "explore-menu-list-item active" : "explore-menu-list-item"}
                    >
                        <img src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default Exploremenu