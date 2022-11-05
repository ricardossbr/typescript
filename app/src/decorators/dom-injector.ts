export function domInject(selector: string){
    return function(target:any, key:string){
        let element: HTMLElement;
        const getter = function(){
            return !element ? document.querySelector(selector) : element;
        };
        Object.defineProperty(
            target,
            key,
            { get:getter }
        );
    }
}