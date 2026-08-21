import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { food_list as initialFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    // Use ONE URL only
    const url = "https://moxb-backend.onrender.com";

    // For local backend, use:
    // const url = "http://localhost:4000";

    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState(initialFoodList);


    const addToCart = async (itemId) => {

        if (!cartItems[itemId]) {
            setCartItems(prev => ({
                ...prev,
                [itemId]: 1
            }));
        } else {
            setCartItems(prev => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }));
        }

        if (token) {
            try {
                await axios.post(
                    url + "/api/cart/add",
                    { itemId },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
            }
        }
    };


    const removeFromCart = async (itemId) => {

        setCartItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));

        if (token) {
            try {
                await axios.post(
                    url + "/api/cart/remove",
                    { itemId },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
            }
        }
    };


    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for (const item in cartItems) {

            if (cartItems[item] > 0) {

                const foodItem = food_list.find(
                    food => food._id === item
                );

                if (foodItem) {
                    totalAmount +=
                        cartItems[item] * foodItem.price;
                }
            }
        }

        return totalAmount;
    };


    const fetchFoodList = async () => {

        try {
            const response = await axios.get(
                url + "/api/food/list"
            );

            setFoodList(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };


    // Moved OUTSIDE fetchFoodList
    const loadCartData = async (token) => {

        try {
            const response = await axios.post(
                url + "/api/cart/get",
                {},
                {
                    headers: { token }
                }
            );

            setCartItems(response.data.cartData);

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {

        const loadData = async () => {

            await fetchFoodList();

            const savedToken = localStorage.getItem("token");

            if (savedToken) {

                setToken(savedToken);

                await loadCartData(savedToken);
            }
        };

        loadData();

    }, []);


    useEffect(() => {
        console.log("Cart Items:", cartItems);
    }, [cartItems]);


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        url
    };


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;