import { inspect } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/log-time-execution.js";


export abstract class View<T>{
    protected elemento: HTMLInputElement;
    
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    protected abstract templente(negociacoes: T): string;

    //@inspect()
    //@logTimeExecution()
    update(negociacoes: T):void {
        this.elemento.innerHTML = this.templente(negociacoes);
    }
}