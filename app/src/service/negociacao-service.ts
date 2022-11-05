import { NegociacoesImport } from "../interfaces/negociacoes-import.js";
import { Negociacao } from '../models/negociacao.js';

export class NegociacaoService{

    public getNegociacoesImportadas(): Promise<Negociacao[]> {
        const negociacaoImport: Negociacao[] = new Array();
        return fetch('http://localhost:8080/dados')
        .then((res:Response) => res.json() )
        .then( (negociacoesImport: Array <NegociacoesImport>) => {
            negociacoesImport
            .forEach(
                negociacoes => negociacaoImport.push(new Negociacao(new Date, negociacoes.quantity, negociacoes.price))
            )
            return negociacaoImport;
        })
        .catch((reason:any) => { throw Error(`O servidor está inacessivel por favor verificar: ${reason}` ) });
        
    }

}