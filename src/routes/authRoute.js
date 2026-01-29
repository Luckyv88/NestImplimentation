import express from 'express';
import { registerUser, login, verifyEmail } from '../controllers/authController.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.post('/verifyemail', verifyEmail); // #swagger.tags = ['Auth']

export default router;
