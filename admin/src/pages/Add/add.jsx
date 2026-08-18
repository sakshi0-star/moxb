import React, { useState } from 'react'
import './add.css'
import axios from "axios"
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'

const Add = ({ url }) => {
    const [image, setImage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        // Validation
        if (!image) {
            toast.error("Please upload an image")
            return
        }

        if (!data.name || !data.description || !data.price) {
            toast.error("Please fill all fields")
            return
        }

        // Create FormData
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", data.price)
        formData.append("category", data.category)
        formData.append("image", image)

        try {
            setLoading(true)
            console.log("Sending product to:", `${url}/api/food/add`)
            
            const response = await axios.post(`${url}/api/food/add`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if (response.data.success) {
                toast.success(response.data.message || "✅ Product added successfully!")
                
                // Reset form
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"
                })
                setImage(false)
                document.getElementById('image').value = ""
            } else {
                toast.error(response.data.message || "Failed to add product")
            }

        } catch (error) {
            console.error("Error details:", error)
            
            if (error.response) {
                toast.error("Server Error: " + (error.response.data?.message || error.message))
            } else if (error.request) {
                toast.error("Connection Error: Backend not responding")
            } else {
                toast.error("Error: " + error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className='add'>
                <form className='flex-col' onSubmit={onSubmitHandler}>
                    {/* Image Upload Section */}
                    <div className='add-img-upload flex-col'>
                        <p>Upload Image</p>
                        <label htmlFor='image' style={{ cursor: 'pointer' }}>
                            <img 
                                src={image ? URL.createObjectURL(image) : assets.add_icon} 
                                alt="Upload" 
                            />
                        </label>
                        <input 
                            onChange={(e) => setImage(e.target.files[0])} 
                            type="file" 
                            id='image' 
                            hidden 
                            accept="image/*"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className='add-product-details flex-col'>
                        <p>Product Details</p>
                        <input 
                            onChange={onChangeHandler} 
                            value={data.name} 
                            name="name"
                            type="text" 
                            placeholder='Product Name' 
                            required
                        />
                        <input 
                            onChange={onChangeHandler} 
                            value={data.description} 
                            name="description"
                            type="text" 
                            placeholder='Product Description' 
                            required
                        />
                    </div>

                    {/* Category Section */}
                    <div className='add-price-category flex-col'>
                        <p>Select Category</p>
                        <select 
                            onChange={onChangeHandler} 
                            name="category"
                            value={data.category}
                        >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Noodles">Noodles</option>
                            <option value="Desert">Desert</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                        </select>
                    </div>

                    {/* Price Section */}
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input 
                            onChange={onChangeHandler} 
                            value={data.price} 
                            name="price"
                            type="number" 
                            placeholder='Product Price'
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type='submit' 
                        className='add-btn'
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "ADD"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Add