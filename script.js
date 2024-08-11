const entradaUsuario = document.getElementById("entradaUsuario");

const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");

btnEncriptar.addEventListener("click",imprimir);
btnDesencriptar.addEventListener("click", imprimir);

function imprimir(){
    alert(entradaUsuario.value);
}