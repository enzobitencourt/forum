// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listPosts,
    newPost,
    findPost
} = require('../controllers/postsController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/posts', listPosts);
router.post('/create', newPost);
router.post('/find', findPost);

module.exports = router;