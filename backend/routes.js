import express from 'express';
import { editUser, listUsers, newUser } from './controllers/usersControllers.js';

const router = express.Router();

router.get('/', listUsers);
router.post('/', newUser);
router.put('/:id', editUser);

export default router
