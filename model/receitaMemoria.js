const { text } = require("express")
var Receita = require("./modelos.js")

const lista_receitas = []

class ReceitaMemoria {

    async atualiza(chave,titulo,ingredientes,preparo,tempo){
        lista_receitas[chave] = new Receita(chave, titulo, ingredientes, preparo, tempo)
        return lista_receitas[chave]
    }

    async cria(chave, titulo, ingredientes, preparo, tempo){
        lista_receitas[chave] = new Receita(chave, titulo, ingredientes, preparo, tempo)
        return lista_receitas[chave]
    }

    async consulta(chave) {
        if(lista_receitas[chave]){
            return lista_receitas[chave]
        }else{
            throw new Error(`Receita com a chave ${chave} não existe`)
        }
    }

    async pesquisa(termo) {
        const termo_busca = termo.toLowerCase().trim();
        return Object.values(lista_receitas).filter(r =>
            r.titulo.toLowerCase().includes(termo_busca)
        );
    }

    async deleta(chave){
        if(lista_receitas[chave]){
            delete lista_receitas[chave]
        } else throw new Error(`Receita com chave ${chave} não existe`)
    }

    async preparo(chave,preparo){
        if(lista_receitas[chave]){
            lista_receitas[chave]._preparo = preparo
        }else{
            throw new Error(`Receita com a chave ${chave} não existe`)
        }
    }

    async lista() {
        return Object.values(lista_receitas)
    }
}

var notas = new ReceitaMemoria();
module.exports = notas