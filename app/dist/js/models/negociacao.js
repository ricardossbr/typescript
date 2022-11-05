import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ehIgual(negociacao) {
        return this._data === negociacao._data
            && this.quantidade === negociacao.quantidade
            && this.valor === negociacao.valor;
    }
    imprimiNegociacoes() {
        return `
            ****** Negociação ******
            Data: ${this._data}
            Quantidade: ${this.quantidade}
            valor R$: ${this.valor}
            Volume: ${this.volume}
        `;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static ehDiaUtil(data) {
        return (data.getDay() + 1) > DiasDaSemana.DOMINGO
            && (data.getDay() + 1) < DiasDaSemana.SABADO;
    }
}
//# sourceMappingURL=negociacao.js.map