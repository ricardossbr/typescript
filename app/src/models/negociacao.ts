import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}
    
    
    public ehIgual(negociacao: Negociacao): boolean {
        return this._data === negociacao._data 
            && this.quantidade === negociacao.quantidade 
            && this.valor === negociacao.valor;
    }


    public imprimiNegociacoes(): string {
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