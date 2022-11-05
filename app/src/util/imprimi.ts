import { ImprimiLog } from "../interfaces/imprimi-log.js";

export function Imprimi(...elements: Array<ImprimiLog>): void{
    console.log(elements)
    elements.forEach(res => console.log(res.imprimiNegociacoes()));
}