

function addNumbers(a:number,b:number){ //si no retorna nada es un void, diferente a un undifined
    return a+b;
}

//funciones flecha

const addNumbersArrow= (a:number, b:number):string=>{ //puedo decirle q tipo de dato devuelve.
    return `${a+b}`;
}

function multiply(firstNumber:number, secodNumber?:number, base:number=2){
    return firstNumber*base;
}

// const result:string = addNumbers(1,2).toString(); //asi lo transformo en string.
// const result2:string=addNumbersArrow(1,2);
// const multiplyResult:number=multiply(5);

// console.log( {result, result2, multiplyResult} ); //lo encierro entre {} para verlo como un objeto.

interface Character {
    name: string;
    hp:number;
    shouHp:()=>void;
}

const healCharacter = (character: Character, amount:number)=>{
    character.hp+=amount;
}

const aragon: Character={
    name:'Aragon',
    hp:100,
    shouHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }, 
}

healCharacter(aragon,100);
healCharacter(aragon,25);

aragon.shouHp();


export{};