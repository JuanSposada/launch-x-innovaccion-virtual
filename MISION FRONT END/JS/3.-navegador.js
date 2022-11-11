//Encontrar elementos de HTML

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

console.log(parrafo);


//Cambiar valores de HTML
titulo.innerHTML = "Titulo cambiado";
titulo.innerHTML = "Te amo y quiero todo contigo 💖💖"; 
parrafo[0].innerHTML =  "Estoy loco por  ti Zareth 😻";



document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + parrafo[0].innerHTML;

links[0].href = "https://github.com/"; 
links[0].target = "_blanck"

//Cambiar estilos

titulo.style.color = "red"
titulo.style.animation;

//Eventos

function cambiarTexto(obj) {
    obj.innerHTML = "Texto clickeado"
    obj.style.color = "blue";
}

function mOver(obj) {
    obj.innerHTML = "Mouse over now"
    obj.style.backgroundColor = "green"
}

function mOut(obj) {
    obj.innerHTML = "Mouse out"
    obj.style.backgroundColor = "red"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta)

function alerta() {
    alert("alerta");
}