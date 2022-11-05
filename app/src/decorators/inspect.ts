export function inspect (){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const originalMethod = descriptor.value;
        descriptor.value = function(...params: Array<any>){
            console.log(`**** Method: ${propertyKey}`);
            console.log(`**** Params: ${JSON.stringify(params)}`);
            const response = originalMethod.apply(this, params);
            console.log(`**** Return: ${JSON.stringify(response)}`);
            return response;           
        }
        return descriptor;
    }
}