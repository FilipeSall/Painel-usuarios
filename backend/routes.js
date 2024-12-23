import express from 'express';
import { editUser, listUsers, newUser, removeUser } from './controllers/usersControllers.js';

const router = express.Router();

router.get('/', listUsers);
router.post('/', newUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);

export default router
