import { Negociacoes } from "../models/negociacoes";

export abstract class View<T>{
    protected elemento: HTMLInputElement;
    
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    protected abstract templente(negociacoes: T): string;

    update(negociacoes: T):void {
        this.elemento.innerHTML = this.templente(negociacoes);
    }
}