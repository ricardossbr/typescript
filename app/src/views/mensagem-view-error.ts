import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";

export class MensagemViewError extends View<string>{

    protected templente(mensagem: string): string {
        return `<p class="alert alert-danger">${mensagem}</p>`;
    }
}