export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    imprimiNegociacoes() {
        return JSON.stringify(this.negociacoes, null, 3);
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
