import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { ImprimiLog } from "../interfaces/imprimi-log.js";

export class Negociacao implements ImprimiLog{
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}


    imprimiNegociacoes(): string {
        return `
            ****** Negociação ******
            Data: ${this._data}
            Quantidade: ${this.quantidade}
            valor R$: ${this.valor}
            Volume: ${this.volume}
        `
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static ehDiaUtil(data: Date):boolean {
        return (data.getDay() + 1) > DiasDaSemana.DOMINGO 
            && (data.getDay() + 1) < DiasDaSemana.SABADO;
    }
}