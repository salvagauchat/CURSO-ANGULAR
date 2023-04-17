export class Person{
    // public name: string;
    // public address: string;

    constructor(public name: string, //se hace asi todo junto, lo de arriba ya es al pedo.
        public address:string){}
}



export class Hero extends Person{
    constructor(
        public apodo: string,
        public age: number,
        public realName: string,
    ){
        super(apodo,"Rafaela");
    }
}

const persona = new Hero('Ramon',45,'Salva');

console.log(persona);
