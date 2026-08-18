import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import foodRouter from './routes/foodroute.js'
import userRouter from './routes/userRoutes.js'  // ← Check this import

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ limit: "16mb", extended: true }))

// Routes
app.use('/api/food', foodRouter)
app.use('/api/user', userRouter)  // ← Check this line
app.use('/uploads', express.static('uploads'))

const PORT = 4000
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`)
})

export default app