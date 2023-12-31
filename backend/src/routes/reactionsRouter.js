// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    createReaction,
    deleteReaction,
    listReactions,
    findReaction
} = require('../controllers/reactionsController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/list/:id', listReactions);
router.post('/create', createReaction);
router.post('/delete', deleteReaction);
router.post('/find', findReaction);

module.exports = router;