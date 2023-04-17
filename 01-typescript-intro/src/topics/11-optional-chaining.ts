//ENCADENAMIENTO OPCIONAL

export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger ={
    name:'Salvador',
}
const passenger2: Passenger ={
    name:'Raul',
    children: ['Natalia','Eliza']
}

const printChildren = (passenger: Passenger)=>{
    const howManyChildren= passenger.children?.length || 0; // ? optional chaining, traelo SI EXISTE sino pasa el valor 0;
                                                            //si seria ! le diria que NUNCA recibiria un nulo. (no es la negacion como en los if)
    console.log(passenger.name, howManyChildren);
    
}

printChildren(passenger1);