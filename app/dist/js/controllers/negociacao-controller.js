var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logTimeExecution } from '../decorators/log-time-execution.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacaoService } from '../service/negociacao-service.js';
import { Imprimi } from '../util/imprimi.js';
import { MensagemViewError } from '../views/mensagem-view-error.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesJafoiImportada = false;
        this.service = new NegociacaoService();
        this.updateView();
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.updateView('Negociação Add com sucesso!');
        this.limparFormulario();
    }
    importarNegociacoes() {
        if (this.negociacoesJafoiImportada) {
            this.updateView('Todas as negociações, já foram importadas... não há novas!', true);
            throw Error('As negociações já foram importadas!');
        }
        this.service.getNegociacoesImportadas()
            .then(listNegociacao => listNegociacao.forEach(negociacao => this.negociacoes.adiciona(negociacao)))
            .then(() => {
            this.updateView('Negociações importadas com sucesso!');
            Imprimi(this.negociacoes, new Negociacao(new Date, 1, 2), new Negociacao(new Date, 1000, 2000), new Negociacao(new Date, 30000, 40000));
            this.negociacoesJafoiImportada = true;
        })
            .catch((reason) => {
            this.updateView('Error ao tentar fazer a importação, verifique se servidor está acessivel!', true);
            throw Error(`O servidor está inacessivel por favor verificar: ${reason}`);
        });
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        if (!Negociacao.ehDiaUtil(date)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    updateView(mensagem = '', msgError = false) {
        this.negociacoesView.update(this.negociacoes);
        if (msgError) {
            const msgErrorView = new MensagemViewError('#mensagemView');
            msgErrorView.update(mensagem);
            return;
        }
        mensagem != '' && this.mensagemView.update(mensagem);
    }
}
__decorate([
    domInject('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInject('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInject('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspect(),
    logTimeExecution()
], NegociacaoController.prototype, "adiciona", null);
//# sourceMappingURL=negociacao-controller.js.map