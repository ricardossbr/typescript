export function logTimeExecution (){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const originalMethod = descriptor.value;
        descriptor.value = function(...params: Array<any>){
            const t1 = performance.now();
            const response = originalMethod.apply(this, params);
            const t2 = performance.now();
            console.log(`${propertyKey.toLocaleUpperCase()}, tempo de execução: ${(t2 - t1)/1000} segundos.`);
            return response;           
        }
        return descriptor;
    }
}