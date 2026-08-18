import express from "express";
import foodControllers from "../controllers/foodcontrollers.js"
import multer from "multer";
const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage }) 
foodRouter.post("/add", upload.single("image"), foodControllers.addFood)
foodRouter.get("/list", foodControllers.listFood)  // Changed to GET
foodRouter.post("/remove", foodControllers.removeFood)

export default foodRouter;