import express from "express";
import {
    getproduct,
    getporductbyid,
    saveproduct,
    updateproduct,
    deleteproduct
} from "../controllers/kontroller.js";

const router = express.Router();

router.get('/products', getproduct);
router.get('/products/:id', getporductbyid);
router.post('/products', saveproduct);
router.patch('/products/:id', updateproduct);
router.delete('/products/:id', deleteproduct);

export default router;