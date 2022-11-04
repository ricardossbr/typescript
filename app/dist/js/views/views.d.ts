export declare abstract class View<T> {
    protected elemento: HTMLInputElement;
    constructor(seletor: string);
    protected abstract templente(negociacoes: T): string;
    update(negociacoes: T): void;
}
