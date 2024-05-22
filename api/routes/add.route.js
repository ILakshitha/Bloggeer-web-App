import express from 'express';
import { create, deleteadd, getadds, updateadd } from '../controllers/add.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/create',verifyToken, create);
router.get('/getadds',verifyToken, getadds);
router.delete('/deleteadd/:addId',verifyToken,deleteadd);
router.put('/updateadd/:addId',verifyToken,updateadd);


export default router;