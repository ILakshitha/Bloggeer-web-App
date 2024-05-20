import express from 'express';
import { create, getadds } from '../controllers/add.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/create',verifyToken, create);
router.get('/getadds',verifyToken, getadds);


export default router;