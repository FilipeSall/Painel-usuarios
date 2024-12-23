import express from 'express';
import dotenv from 'dotenv';
import router from './routes.js';
import cors from 'cors'; 
import { errorHandler } from './middlewares/errorhandle.js';

//configurações
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use('/users', router);

// Middleware de erro
app.use(errorHandler);


//inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse em: http://localhost:${PORT}`)
})
