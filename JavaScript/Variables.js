console.log('hola mundo');
var mutar;
var nombre = 'Kath';
mutar = nombre;
var edad= 22;
var peso= 1111;
var casado= false;
var fechaNacimiento = new Date();
var noExisto = null;//false
var noEstoyDefinido = undefined;//false
//0 falso 1 true -1 true
//cmd+a =seleccionar
//cdm+alt+l= indentar
if(noExisto){
    //console.log('Verdadero');
}else {
    //console.log('falso');

}

//Json: son llamados como objetos
var usuario={
    //numeros de tipo number
    //"Clave":"valor"
    "nombre":"Kath",
    "apellido":"Cajilema",
    cedula:'kate',
    edad:28,
    
    imprimir:function () {
        console.log(this.nombre+''+this.apellido+''+this.edad);
    }
};

//console.log(usuario.imprimir);
//para imprrimir el nombre de la funcion com () imprime lo de adentro de la funcion
usuario.imprimir();
//console.log(usuario.nombre); //kath
//console.log(usuario);
//todo lo q se tiene en JS se puede imprimir
 delete usuario.edad;//eliminar
 //console.log(usuario);
 usuario.fechaNacimiento= new Date();
 //console.log(usuario);
 usuario.mascota={};
 usuario.mascota.nombre="Kath";
 //console.log(usuario);

 var arreglo=[1,2,"kath",true,undefined,null,new Date( ),{nombre:"FEr"},[1,"k"],usuario.imprimir(),usuario.imprimir,];
 console.log(arreglo);
 function sumarNumeros(numeroUno, numeroDos) {
     return numeroUno+numeroDos;
 }
 //console.log(sumarNumeros(1,2));
 //console.log(sumarNumeros(1,99.99));
 var potenciaDeDosDeUnNumero=function (numero) {
     return numero* numero;
 }
 var potenciaDeDosDeUnNumeroDos=function (numero) {
     return numero*numero
 }
 //console.log((potenciaDeDosDeUnNumero(3,23,3,4,5)));
//console.log(potenciaDeDosDeUnNumeroDos(5,6));


