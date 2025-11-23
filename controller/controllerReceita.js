const receitas = require('../model/receitaMemoria')

exports.criar_get = async function(req,res){ // Feito
    let lista = await receitas.lista();

    contexto = {
        titulo_pagina: 'Receitas: Criar Receita',
        pgCria: true,
        receitas_qt: (lista.length + 1),
    }
    res.render('criaReceita', contexto)
}

exports.criar_post = async function(req,res){ // Feito
    try {
        const chave = req.body.chave
        const titulo = req.body.titulo
        const ingredientes = req.body.ingredientes
        const preparo = req.body.preparo
        const tempo = req.body.tempo
        
        await receitas.cria(chave, titulo, ingredientes, preparo, tempo)
        res.redirect('/')

    } catch (error) {
        console.error('Erro ao criar receita:', error)
        res.status(500).send('Erro interno do servidor')
    }
}

exports.consulta = async function(req,res){ // Feito
    var chave = req.params.chave_receita
    var receita = await receitas.consulta(chave)

    contexto = {
        titulo_pagina: 'Receitas: Consultar Receita',
        chave: receita.chave,
        titulo: receita.titulo,
        ingredientes: receita.ingredientes,
        preparo: receita.preparo,
        tempo: receita.tempo,
    }
    res.render('consultaReceita', contexto)
}

exports.altera_get = async function(req,res){ // Feito
    var chave = req.params.chave_receita
    var receita = await receitas.consulta(chave)

    contexto = {
        titulo_pagina: 'Receitas: Altera Receita',
        chave: receita.chave,
        titulo: receita.titulo,
        ingredientes: receita.ingredientes,
        preparo: receita.preparo,
        tempo: receita.tempo,
    }
    res.render('alteraReceita', contexto)
}

exports.altera_post = async function(req,res){ // Feito
    var chave = req.body.chave
    var titulo = req.body.titulo
    var ingredientes = req.body.ingredientes
    var preparo = req.body.preparo
    var tempo = req.body.tempo
    await receitas.atualiza(chave, titulo, ingredientes, preparo, tempo)
    res.redirect('/')
}

exports.deleta_confirma = async function(req,res){ // Feito
    var chave = req.params.chave_receita
    var receita = await receitas.consulta(chave)
    contexto = {
        titulo_pagina: 'Receitas: Confirmar Delete',
        chave: receita.chave,
        titulo: receita.titulo,
    }
    res.render('deletarReceita',contexto)
}

exports.deleta = async function(req,res){ // Feito
    var chave = req.params.chave_receita
    await receitas.deleta(chave)
    res.redirect('/')
}

exports.pesquisa_get = async function(req, res) {
    contexto = {
        titulo_pagina: 'Receitas: Pesquisa',
        nenhuma: true,
        pgPesquisa: true,
    }
    res.render('pesquisaReceita', contexto)
}

exports.pesquisa_post = async function(req, res) {

    var termo_pesquisa = req.body.termo_pesquisa;
    var resultado = await receitas.pesquisa(termo_pesquisa)

    contexto = {
        titulo_pagina: 'Receitas: Pesquisa',
        pgPesquisa: true,
        termo_pesquisa: termo_pesquisa,
        resultado: resultado,
        nenhuma: resultado.length === 0,
    }

    console.log('Termo Buscado: ' + termo_pesquisa);
    console.log('Resultados: ' + resultado.length)

    res.render('pesquisaReceita', contexto)
    
}