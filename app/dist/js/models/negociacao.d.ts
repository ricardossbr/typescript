export declare class Negociacao {
    private _data;
    readonly quantidade: number;
    readonly valor: number;
    constructor(_data: Date, quantidade: number, valor: number);
    get volume(): number;
    get data(): Date;
    static ehDiaUtil(data: Date): boolean;
}
