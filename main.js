let nombre = "Jordi";
let dni = 35231924;
let perro = false;
let nacimiento = null;
let rich = undefined;
let numero = Symbol("peras");
let naranja = { nombre: 'Jordi', dni: 35231924 };
let naranja1 = ["Jordi", 35231924, false];
function ninguna() {
    console.log(typeof naranja);
}

if (true) {
    (diego = ("manuel"));
}

console.log(typeof nombre);
console.log(typeof dni);
console.log(typeof perro);
console.log(typeof nacimiento);
console.log(typeof rich);
console.log(typeof numero);
console.log(typeof naranja);
console.log(typeof naranja.nombre);
console.log(typeof naranja1);
console.log(typeof (naranja1[0]));
console.log(typeof (naranja1[1]));
console.log(typeof (naranja1[2]));
ninguna();
console.log("manuel");

