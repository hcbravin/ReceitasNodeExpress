class Receita {
    constructor(chave, titulo, ingredientes, preparo, tempo) {
        this._chave = chave;
        this._titulo = titulo;
        this._ingredientes = ingredientes;
        this._preparo = preparo;
        this._tempo = tempo;
    }

    get chave() {
        return this._chave;
    }

    get titulo() {
        return this._titulo;
    }

    get ingredientes() {
        return this._ingredientes;
    }

    get preparo() {
        return this._preparo
    }

    get tempo(){
        return this._tempo
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }

    set ingredientes(novoingredientes) {
        this._ingredientes = novoingredientes;
    }

    set tempo(novotempo){
        this._tempo = novotempo
    }

    set preparo(novopreparo) {
        this._preparo = novopreparo
    }
}

module.exports = Receita;