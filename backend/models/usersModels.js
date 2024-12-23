import prisma from '../config/prismaClient.js';
import { ValidationError } from '../utils/errors.js';
import emailRegex from '../utils/emailReggex.js';

//Pegar todos os usuários
export const getAllUsers = async () => {
    return await prisma.users.findMany()
}

//Encontrar usuário pelo EMAIL
export const findUserByEmail = async (email) => {
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    });

    return user;
}

//Criar usuário
export const createUser = async (name, email) => {
    //Validações 
    if (!emailRegex.test(email)) throw new ValidationError('Email inválido');

    if (name.length === 0 || email.length === 0) throw new ValidationError("Campos não podem ficar vazios.")

    const userEmail = await findUserByEmail(email);
    if (userEmail) throw new ValidationError("Email já cadastrado");

    //Criar usuário se tudo estiver OK!
    const newUser = await prisma.users.create({
        data: {
            email,
            name,
        }
    })

    return newUser
}

//Editar usuário
export const updateUser = async (id, name, email) => {

    const user = await prisma.users.update({
        where: { id: id },
        data: {
            name: name,
            email: email,
        }
    })
    return user
}

//Deletar usuário
export const deleteUserById = async (id) => {
    const user = await prisma.users.delete({
        where: { id: id }
    })
    return user
}