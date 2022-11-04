import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

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