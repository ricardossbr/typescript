export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.lista());
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
//# sourceMappingURL=negociacoes.js.map