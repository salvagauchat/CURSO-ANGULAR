
interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Datails;
}
interface Datails{
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer={
    audioVolume: 60,
    songDuration: 3,
    song: "Mienteme",
    details:{
        author: "Luis Miguel",
        year: 1979
    }
}

const{
    song:otraSong, audioVolume:volumen,details //de esta forma desestructuras el objeto, guardando solo la propiedad que queres mostrar.
                                                //sin tener que poner todo el tiempo "audioPlayer.song, audioPlayer.details.year"
}=audioPlayer;
const {author:autor}=details;

// console.log(otraSong, volumen, autor);

const dbz:string[]=["Goku","Vegeta", "Trunks"];
const [p1,p2,trunks]= dbz;

console.error('Personaje 3:', trunks);


export{}