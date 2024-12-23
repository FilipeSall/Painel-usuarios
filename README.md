# Projeto Full Stack com Node.js, Express, React, Vite e TypeScript

Este é um projeto full stack desenvolvido com Node.js e Express no backend, e React com Vite e TypeScript no frontend.

## Como rodar o projeto

Siga os passos abaixo para configurar e iniciar o projeto:

### 1. Clone o repositório

```bash
git clone https://github.com/FilipeSall/Painel-usuarios.git
```

### 2. Configure o Backend

1. Acesse a pasta do repositório e navegue até o diretório do backend:

    ```bash
    cd backend
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Renomeie o arquivo `.env.example` para `.env`:

    ```bash
    mv .env.example .env
    ```

4. Abra o arquivo `.env` e insira as credenciais necessárias. **Não altere o valor da variável `PORT`.**

5. Inicie o servidor do backend:

    ```bash
    npm run dev
    ```

### 3. Configure o Frontend

1. Acesse o diretório do frontend:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Inicie o servidor do frontend:

    ```bash
    npm run dev
    ```

## Resultado

Após seguir os passos acima, o projeto estará rodando com o backend e o frontend funcionando corretamente. Abra o navegador e acesse o endereço fornecido no terminal para visualizar o projeto em execução.

---

### Observações
- Certifique-se de ter instalado em sua máquina o MySQL e certifique-se de ter o DB com o nome user_db.
