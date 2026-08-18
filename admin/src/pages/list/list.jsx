import React, { useState, useEffect } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from "react-toastify"

const List = ({ url }) => {  // ← Receive URL as prop
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchList = async () => {
        try {
            setLoading(true)
            console.log("Fetching from:", `${url}/api/food/list`)
            
            const response = await axios.get(`${url}/api/food/list`)
            console.log("Response:", response.data)

            if (response.data.success) {
                setList(response.data.data)
                toast.success("Products loaded!")
            } else {
                toast.error(response.data.message || "Failed to load products")
            }
        } catch (error) {
            console.error("Error fetching list:", error)
            toast.error("Error: " + (error.response?.data?.message || error.message))
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchList()
    }, [url])

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: productId })
            if (response.data.success) {
                toast.success("Product deleted!")
                fetchList()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Error deleting product")
        }
    }

    return (
        <div className='list add'>
            <h2>All Products</h2>
            
            {loading ? (
                <p>Loading products...</p>
            ) : list.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className='list-table'>
                    <div className='list-table-format title'>
                        <b>Image</b>
                        <b>Name</b>
                        <b>Category</b>
                        <b>Price</b>
                        <b>Action</b>
                    </div>
                    {list.map((item) => (
                        <div key={item._id} className='list-table-format'>
                            <img src={`${url}/images/${item.image}`} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>₹{item.price}</p>
                            <p 
                                className='cursor'
                                onClick={() => deleteProduct(item._id)}
                            >
                                ❌ Delete
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default List