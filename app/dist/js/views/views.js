export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(negociacoes) {
        this.elemento.innerHTML = this.templente(negociacoes);
    }
}
//# sourceMappingURL=views.js.map