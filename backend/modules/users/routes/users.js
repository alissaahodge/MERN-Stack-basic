import express from 'express';
import {signin, signup, updateAccount, updateAccountPassword} from '../controllers/user.js';
import auth from '../../../middleware/auth.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id', auth, updateAccount);
router.patch('/password/:id', auth, updateAccountPassword);


export default router;
