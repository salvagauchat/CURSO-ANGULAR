
export function whatsMyTypes<T>(argument: T):T{

    return argument;
}

const amIString = whatsMyTypes<string>('Hola mundo'); //si tiene <> le obliga a pasar un dato como string .
const amINumber = whatsMyTypes(100);
const amIArray = whatsMyTypes([1,2,3,4,5,6]);

console.log( amIString.split(' '));
console.log( amINumber.toFixed());
console.log( amIArray.join('-'));
