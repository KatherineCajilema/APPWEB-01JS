//operadores
var arregloNumeros = [1, 2, 3, 4, 5];
//arreglo tipado
// let arregloUsuarios:Array<UsuarioArreglo>=[
var arregloUsuarios = [
    {
        nombre: 'Adrian',
        edad: 28
    }, {
        nombre: 'Gabriela',
        edad: 10
    }, {
        nombre: 'Felipe',
        edad: 68
    }, {
        nombre: 'Wendy',
        edad: 32
    }, {
        nombre: 'Roberto',
        edad: 18
    }
];
//fat arrow funtions (funcion de flecha gorda)
//se usa en vez de las funciones Anonimas
//=> es para una funcion
//con parentecis
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1, 2)); //3
//cuando no hay mas parametros se usa directo una variable
//sin parentecis
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
//cuando no son necesarias las llaves cando quiero devolver algo
//sin llaves
var portenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
var sumarDosNumerosV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
//este operador puede hacer cualquier tipo de operación matematica
//reduceRight va empresar de la derecha
var resultadoSumaConReduce = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valoAcumuladoActual', valorAcumuladoActual);
    console.log('valorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaConReduce);
var resultadoEdadDeUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) { return acumuladoEdad + usuario.edad; }, 0);
console.log(resultadoEdadDeUsuarios);
var nuevoArregloDeUsuarios = arregloUsuarios.map(
//el arreglo trasformado o mutado
function (usuario) {
    usuario.becado = false;
    return usuario;
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    return usuario.deuda < 50; // true,false
});
console.log('nuevoArregloDeUsuario', nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad + (edadUsuario / 100);
}
