import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";



export class NegociacoesView extends View<Negociacoes>{

    protected templente(negociacoes: Negociacoes): string {   
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    ${negociacoes.lista().map( neg => {
                        return `
                            <tr>
                                <th>${new Intl.DateTimeFormat().format(neg.data)}</th>
                                <th>${neg.quantidade}</th>
                                <th>${neg.valor}</th>
                                <th>${neg.volume}</th>
                            </tr>
                        `
                    }).join('')}
                    
                </tbody>
            </table>
        `
    }
}