// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Função que cria um novo favorito
async function createReaction(request, response) {
    const { user, post, comentario } = request.body;

    const query = "INSERT INTO reactions (user_id, post_id, comment_id) VALUES (?, ?, ?)";

    connection.query(query, [user, post, comentario], (err, results) => {
        if (err) {
            response.status(400).json({
                success: false,
                message: "Não foi possível realizar a operação. Verifique os dados informados.",
            });
        } else {
            response.status(200).json({
                success: true,
                message: "Operação realizada com sucesso.",
            });
        }
    });
}

async function findReaction(request, response) {
    const { user, comentario } = request.body;

    const query = "SELECT 1 FROM comments WHERE `user_id` = ? AND `comment_id` = ?";

    connection.query(query, [user, comentario], (err, results) => {
        try {
            if (err) {
                response.status(500).json({
                    success: false,
                    message: "Ocorreu um erro ao buscar a reação",
                    error: err
                });
            } else {
                if (results && results.length > 0) {
                    response.status(200).json({
                        success: true,
                        message: `Sucesso! Reação encontrada.`
                    });
                } else {
                    response.status(404).json({
                        success: false,
                        message: `Reação não encontrada`
                    });
                }
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar a reação",
                error: e
            });
        }
    });
}


// Função que remove usuário no banco
async function deleteReaction(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM reactions WHERE `comment_id` = ? AND `user_id` = ?" ;

    // Recebimento de parametro da rota
    const params = Array(
        request.body.comentario,
        request.body.user
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Reação deletada.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function listReactions(request, response) {
    const query = 'SELECT * FROM reactions WHERE `comment_id` = ?'
    const id = request.params.id

    connection.query(query, id, (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de favoritos com sucesso',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os favoritos.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}


module.exports = {
    createReaction,
    deleteReaction,
    listReactions,
    findReaction,
}