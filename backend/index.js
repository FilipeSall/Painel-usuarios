import express from 'express';
import dotenv from 'dotenv';
import router from './routes.js';

//configurações
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(express.json());

// Rotas
app.use('/users', router);

//inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse em: http://localhost:${PORT}`)
})
