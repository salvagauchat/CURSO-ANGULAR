export class Person{
    // public name: string;
    // public address: string;

    constructor(
        public name: string, //se hace asi todo junto, lo de arriba ya es al pedo.
        public address:string='No Address'){}
}



// export class Hero extends Person{

    
//     constructor(
//         public apodo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(apodo,"Rafaela");
//     }
// }


export class Hero {

    // public person:Person;

    constructor(
        public apodo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        
    }
}
const rodolfo = new Person("Rodolfo");
const persona = new Hero('Batman',45,'Rodolfo Garcia', rodolfo);

console.log(persona);
