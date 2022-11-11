const cuadrado = function(x) {
    return x * x;
}
let numero = 4;
let numero2 = 3;
let numeroCuadrado = cuadrado(numero);
let sumaDeCuadrado= cuadrado(numero2) + cuadrado(numero2);
console.log(numeroCuadrado);
console.log(sumaDeCuadrado);

const ruido = function () {
    console.log("kataplum!");
}

ruido();



const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

let resultadoExponencial = exponencial(4, 8);
console.log(resultadoExponencial)


console.log(sumar(5,6));
function sumar(x, y) {//es otra forma de declarar una funcion
    return x + y;
}


const restar = (a, b) => {// funcion de flecha =>
    return a - b;
}
console.log(restar(40, 8));


function saludar(quien) {
  console.log("Hola " + quien);
  return;
}
saludar("Explorer");
console.log("Bye");

/*

//Excepciones
function preguntaComida(preguntar){
    let resultado = prompt(preguntar);
    if(resultado.toLowerCase() == "pollo") return "P";
    if(resultado.toLowerCase() == "pizza") return "Z";
    throw new Error("comida no valida " +resultado)
}

const comer = () =>{
    if (preguntaComida("que quieres comer?") == "Z")
        return "Que rico!";
    else return "wakala"

}
try{
    console.log("comer ", comer());
} catch(error) {
    console.log("hubo un error: ", error)
}

function preguntaDireccion(pregunta) {
  let result = prompt(pregunta);
  if (result.toLowerCase() == "izquierda") return "I";
  if (result.toLowerCase() == "derecha") return "D";
  throw new Error("Dirección inválida: " + result);
}


function mirar() {
  if (preguntaDireccion("A que lado?") == "I") {
    return "una casa";
  } else {
    return "2 osos hambrientos";
  }
}

try {
  console.log("Mira a ", mirar());
} catch (error) {
  console.log("Hubo un error: " + error);
}
*/


//Asincrono
setTimeout(() => console.log("Tick"), 2000);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
      2000
    )
  )
  

async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

  await promesa();
  console.log('Aquí termina la primer promesa');
  await promesa();
  console.log('Aquí termina la segunda promesa');
}

main();
