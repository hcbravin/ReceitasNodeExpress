const receitas = require('../model/receitaMemoria')

exports.tela_principal = async function(req,res){
    await receitas.cria('receita_1','Ola mundo, Receitas.','Aqui vai os Ingredientes', 'Aqui ja vai o preparo', 15)    
    contexto = {
        titulo_pagina: 'Gerenciador de Receitas',
        pgHome: true,
        receitas: await receitas.lista(),
    }
    contexto.receitas_qt = contexto.receitas.length


    console.log(contexto.receitas_qt);
    res.render('index', contexto)
}

exports.sobre = async function(req,res){
    contexto = {
        titulo_pagina: "Receitas: Sobre o Aplicativo",
        pgSobre: true,
    }
    res.render('sobre',contexto)
}