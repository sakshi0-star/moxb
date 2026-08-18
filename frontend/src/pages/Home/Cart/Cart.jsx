import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../context/StoreContext'

const Cart = () => {

    const {
        cartItems,
        food_list,
        currency,
        removeCartItem
    } = useContext(StoreContext)

    console.log("Cart Items:", cartItems)
    console.log("Food List:", food_list)

    return (
        <div className='cart'>

            <div className="cart-items">

                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <hr />

                {food_list.map((item) => {

                    if (cartItems[item._id] > 0) {

                        return (
                            <div
                                key={item._id}
                                className="cart-items-format"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-img"
                                />

                                <p>{item.name}</p>

                                <p>
                                    {currency}{item.price}
                                </p>

                                <p>
                                    {cartItems[item._id]}
                                </p>

                                <p>
                                    {currency}
                                    {item.price * cartItems[item._id]}
                                </p>

                                <p
                                    onClick={() => removeCartItem(item._id)}
                                    className="cart-remove-icon"
                                >
                                    ×
                                </p>

                            </div>
                        )
                    }

                    return null
                })}

            </div>

        </div>
    )
}

export default Cart