import express from 'express';
<<<<<<< HEAD
import { test, updateUser,deleteUser,signout, getUsers, getUser } from '../controllers/user.controller.js';
=======
import { test, updateUser,deleteUser,signout } from '../controllers/user.controller.js';
>>>>>>> parent of 3d8cc3c (Create users API routes & show users to admin dashbord & create delete function to admin)
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);
<<<<<<< HEAD
router.get('/getusers', verifyToken,getUsers);
router.get('/:userId', getUser);
=======
>>>>>>> parent of 3d8cc3c (Create users API routes & show users to admin dashbord & create delete function to admin)

export default router;