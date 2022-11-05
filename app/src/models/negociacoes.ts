import { ImprimiLog } from '../interfaces/imprimi-log.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements ImprimiLog{

    imprimiNegociacoes(): string {
        return JSON.stringify(this.negociacoes, null, 3);
    }
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
