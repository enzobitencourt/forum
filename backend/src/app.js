// Importar o pacote express (servidor)
const express = require('express');
// Importar o cors para lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const findUserRouter = require('./routes/findUserRouter');
const postsRouter = require('./routes/postsRouter')
const commentRouter = require('./routes/commentRouter')
const reactionsRouter = require('./routes/reactionsRouter')

// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o uso dos cors no servidor
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api/find', findUserRouter);
app.use('/api/posts', postsRouter)
app.use('/api/comments', commentRouter)
app.use('/api/reactions', reactionsRouter)
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 3333);

module.exports = app;