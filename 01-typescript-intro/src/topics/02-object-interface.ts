
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character{
    name:string;
    hp: number;
    skills:string[];
    hometown?:string; //puede ser un string o un undefined
}

const strider: Character={ //con el ctrl+. agrego todo.
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown='Rivendell';

console.table(strider);




export{}