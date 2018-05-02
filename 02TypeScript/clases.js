console.log('hola mundo');
//let  hola='HoLa';
//let  hola:String='Hola';// se es redundante cuando se asigna un valis
var hola;
//let hola:any;
var adios = 'Adios';
hola = 1;
hola = '123';
var nombre = 'kath';
var edad = 22.3;
var casado = false;
var fechaNacimiento = new Date();
// son usasos la orientada en objetos para hacer JAson
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var Vicente = {
    nombre: 'Vicente',
    //nombre:'Vicente';
    casado: false,
    edad: 30
};
//jason
var Kath = new Usuario(nombre, 'Kate', casado, false, edad, 22);
console.log(Kath);
console.log(Vicente);
var UsuarioDos = /** @class */ (function () {
    //protected y private de pone un gion antes _
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this.casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //template String
        return saludo + ".Mi nombre es " + this.nombre + ",estoy casado " + this.casado + ", mi edades " + this._edad;
    };
    return UsuarioDos;
}());
console.log(Kath2.imprimirUsuario('hola Soy Goku'));
var carla = {
    nombre: 'ADrian',
    edad: 28,
    imprimir: function (saludo) {
        return '';
    }
};
var Kath2 = new UsuarioDos(nombre, 'Kate', casado, false, edad, 22);
console.log(Kath2);
