import { ValidationError } from "../utils/errors";

//GET /users
export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        return res.status(201).json(users)

    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//POST /users

//PUT /users/:id

//DELETE /users/:id