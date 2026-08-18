import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './FoodDisplay.css';
import FoodItem from '../fooditem/fooditem.jsx';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='fooddisplay' id="food-display">
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};
export default FoodDisplay;