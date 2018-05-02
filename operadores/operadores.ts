//operadores
let arregloNumeros=[1,2,3,4,5]

//arreglo tipado
// let arregloUsuarios:Array<UsuarioArreglo>=[
let arregloUsuarios: UsuarioArreglo[]=[
    {
        nombre:'Adrian',
        edad:28
    },  {
        nombre:'Gabriela',
        edad:10
    },  {
        nombre:'Felipe',
        edad:68
    },  {
        nombre:'Wendy',
        edad:32
    },  {
        nombre:'Roberto',
        edad:18
    }
];
//fat arrow funtions (funcion de flecha gorda)
//se usa en vez de las funciones Anonimas
//=> es para una funcion
//con parentecis
let sumarDosNumeros= (numeroUno:number, numeroDos:number):number=> {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1,2));//3
//cuando no hay mas parametros se usa directo una variable
//sin parentecis
let potenciaDeUnNumero= numero =>{
    return numero* numero;
};
//cuando no son necesarias las llaves cando quiero devolver algo
//sin llaves
let portenciaDeUnNumeroV2=numero =>numero*numero;
let sumarDosNumerosV2= (numeroUno:number, numeroDos:number):number=> numeroUno + numeroDos;
let sumaTotal=0;
let resultadoForEach=
    arregloNumeros.forEach(
        (valorActual, indiceActual,arreglo)=>{
            sumaTotal=sumaTotal+valorActual;
            console.log(valorActual);
            console.log(indiceActual);
            console.log(arreglo);
}
    );
console.log(resultadoForEach);
console.log(sumaTotal);
//este operador puede hacer cualquier tipo de operación matematica
//reduceRight va empresar de la derecha
let resultadoSumaConReduce=arregloNumeros.reduce(
    (valorAcumuladoActual,valorActualArreglo)=>{
        console.log('valoAcumuladoActual',valorAcumuladoActual);
        console.log('valorActualArreglo',valorActualArreglo);
        return valorAcumuladoActual-valorActualArreglo;
    },20
);
console.log(resultadoSumaConReduce);
let resultadoEdadDeUsuarios=arregloUsuarios.reduce(
    (acumuladoEdad:number,
     usuario:UsuarioArreglo)=> acumuladoEdad+usuario.edad,0
);
console.log(resultadoEdadDeUsuarios);
let nuevoArregloDeUsuarios=arregloUsuarios.map(
    //el arreglo trasformado o mutado
    (usuario:UsuarioArreglo)=>{
        usuario.becado=false;
        return usuario;
    }
)
    .map( (usuario:UsuarioArreglo)=>{
        usuario.deuda=calcularDeuda(
            usuario.edad
        );
        return usuario;
    })
    .filter(
        (usuario:UsuarioArreglo)=> {
            return usuario.deuda < 50;  // true,false
        }    )
    /* .find(
         ()=>{

         }
     )
 //.every
 //sale todos
 .some
     //every AND some OR =Boolean
 (
 (usuario:UsuarioArreglo)=>{
     return usuario.edad<30
 }
)*/;

console.log('nuevoArregloDeUsuario',nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario:number) {
   const  totalEdad =arregloUsuarios.reduce(
       (total,usuario:UsuarioArreglo)=> total+usuario.edad,0
   ) ;
   return totalEdad+(edadUsuario/100);
}

interface UsuarioArreglo {
    nombre:string;
    edad:number;
    deuda?:number;
    becado?:boolean;
}