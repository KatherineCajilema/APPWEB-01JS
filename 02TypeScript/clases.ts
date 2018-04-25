console.log('hola mundo');
//let  hola='HoLa';
//let  hola:String='Hola';// se es redundante cuando se asigna un valis
let hola: number | string;
//let hola:any;
const  adios='Adios';
hola=1;
hola ='123';
let nombre: string='kath';
let edad: number=22.3;
let casado:boolean=false;
let fechaNacimiento:Date=new Date();
// son usasos la orientada en objetos para hacer JAson
class Usuario{
    //public nombre:string;
    nombre:string;// ya se sabe que asi es public
    private casado: boolean;
    protected edad:number;
    constructor(nombre:string,casado:boolean,edad:number){
        this.nombre=nombre;
        this.casado=casado;
        this.edad=edad;
    }
}
let Vicente={
    nombre:'Vicente',
    //nombre:'Vicente';
    casado:false,
    edad:30
};
//jason
let Kath:Usuario= new Usuario(nombre:'Kate', casado: false,edad:22);
console.log(Kath);
console.log(Vicente);
class UsuarioDos {
    //protected y private de pone un gion antes _
    constructor( public nombre:string,
                private _casado:boolean,
                 protected _edad:number){

    }
    get casado(){
        return this.casado;
    }
    set casado(casado:boolean){
        this._casado=casado;
    }
    imprimirUsuario(saludo:string) {
        //template String
        return `${saludo}.Mi nombre es ${this.nombre},estoy casado ${this.casado}, mi edades ${this._edad}`;

    }
}

console.log(Kath2.imprimirUsuario(saludo:'hola Soy Goku'));
let Carla: UsurioTres={
    nombre:'Kath',edad:28
}
interface UsuarioTres{
    nombre:string;
    casado?:boolean;//hacer opcional un dato
    
}


let Kath2:UsuarioDos= new UsuarioDos(nombre:'Kate', casado: false,edad:22);
console.log(Kath2);