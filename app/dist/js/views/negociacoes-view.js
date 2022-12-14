import { View } from "./views.js";
export class NegociacoesView extends View {
    templente(negociacoes) {
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
                    ${negociacoes.lista().map(neg => {
            return `
                            <tr>
                                <th>${new Intl.DateTimeFormat().format(neg.data)}</th>
                                <th>${neg.quantidade}</th>
                                <th>${neg.valor}</th>
                                <th>${neg.volume}</th>
                            </tr>
                        `;
        }).join('')}
                    
                </tbody>
            </table>
        `;
    }
}
//# sourceMappingURL=negociacoes-view.js.map