import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form:Element = document.querySelector('.form');

if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}else{
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const btnImportar: Element = document.querySelector('#btn-importar');
if(btnImportar){
    btnImportar.addEventListener( 'click', () => controller.importarNegociacoes());
}else{
    throw Error('Botão Importar negociações não encontrado!');
}