import express from 'express';
import dotenv from 'dotenv';

//configurações
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(express.json());

//inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse em: http://localhost:${PORT}`)
})
