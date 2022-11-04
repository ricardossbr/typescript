import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
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
