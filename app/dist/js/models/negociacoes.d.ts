import { Negociacao } from './negociacao.js';
export declare class Negociacoes {
    private negociacoes;
    adiciona(negociacao: Negociacao): void;
    lista(): readonly Negociacao[];
}
