var express = require('express')
var router = express.Router()
var controllerReceita = require('../controller/controllerReceita')

// Cria
router.get('/cria', controllerReceita.criar_get)
router.post('/cria', controllerReceita.criar_post)
// Consulta
router.get('/consulta/:chave_receita', controllerReceita.consulta)
// Altera
router.get('/altera/:chave_receita', controllerReceita.altera_get)
router.post('/altera/:chave_receita', controllerReceita.altera_post)
// Deleta
router.get('/deleta/confirma/:chave_receita', controllerReceita.deleta)
router.get('/deleta/:chave_receita', controllerReceita.deleta_confirma)
// Pesquisa
router.get('/pesquisa', controllerReceita.pesquisa_get);
router.post('/pesquisa', controllerReceita.pesquisa_post)

module.exports = router
