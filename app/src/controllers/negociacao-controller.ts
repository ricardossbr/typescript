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
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesJafoiImportada: boolean = false;
    private service: NegociacaoService = new NegociacaoService();

    constructor() {
        this.updateView();        
    }

    @inspect()
    @logTimeExecution()
    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.updateView('Negociação Add com sucesso!');
        this.limparFormulario();
    }

    public importarNegociacoes():void {
        if(this.negociacoesJafoiImportada){
            this.updateView('Todas as negociações, já foram importadas... não há novas!', true);
            throw Error('As negociações já foram importadas!');
        } 
        this.service.getNegociacoesImportadas()
        .then(
            listNegociacao => listNegociacao.forEach(negociacao => this.negociacoes.adiciona(negociacao))
        )
        .then(() => {
            this.updateView('Negociações importadas com sucesso!');
            Imprimi(this.negociacoes, new Negociacao(new Date, 1, 2), new Negociacao(new Date, 1000, 2000), new Negociacao(new Date, 30000, 40000));
            this.negociacoesJafoiImportada = true
        })
        .catch((reason:any) => { 
            this.updateView('Error ao tentar fazer a importação, verifique se servidor está acessivel!', true);
            throw Error(`O servidor está inacessivel por favor verificar: ${reason}` );
        })
        
    }

    private criaNegociacao(): Negociacao {
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

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private updateView(mensagem: string = '', msgError:boolean = false):void{
        this.negociacoesView.update(this.negociacoes);
        if(msgError){
            const msgErrorView = new MensagemViewError('#mensagemView');
            msgErrorView.update(mensagem);
            return;
        }
        mensagem != '' && this.mensagemView.update(mensagem);
    }
}
