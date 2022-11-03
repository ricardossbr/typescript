export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
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
    update(negociacoes) {
        this.elemento.innerHTML = this.templente(negociacoes);
    }
}
