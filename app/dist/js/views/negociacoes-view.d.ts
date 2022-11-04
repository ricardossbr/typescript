import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";
export declare class NegociacoesView extends View<Negociacoes> {
    protected templente(negociacoes: Negociacoes): string;
}
