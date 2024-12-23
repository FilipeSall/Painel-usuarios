import { getAllUsers, createUser, deleteUserById, findUserByEmail, updateUser } from "../models/usersModels.js";
import { ValidationError } from "../utils/errors.js";


//GET /users
export const listUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        return res.status(201).json(users)
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Um erro inesperado aconteceu." });
    }
}

//POST /users
export const newUser = async (req, res) => {
    try {
        const { email, name } = req.body;

        const normalizedEmail = email.toLowerCase().trim();

        const user = await createUser(name, normalizedEmail);

        res.status(201).json({ message: 'Usuário criado com sucesso.', user });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Um erro inesperado aconteceu." });
    }
}

//PUT /users/:id
export const editUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const { id } = req.params;

        const user = await updateUser(id, name, email);
        res.status(201).json({ message: "Usuário editado com sucesso.", user })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Um erro inesperado aconteceu." });
    }
}

//DELETE /users/:id
export const removeUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = deleteUserById(id);
        res.status(201).json({ message: "Usuário deletado com sucesso", user })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Um erro inesperado aconteceu." });
    }
}
