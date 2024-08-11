const entradaUsuario = document.getElementById("txtaEncriptado");
const salidaUsuario = document.getElementById("txtaDesencriptado");

const divMensajeInicial= document.getElementById("main__mensaje__inicial");
const divMensajeEncriptado = document.getElementById("main__mensaje__encriptado");

const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const btnLimpiar = document.getElementById("btnLimpiar");

btnEncriptar.addEventListener("click", encriptarTexto)
btnDesencriptar.addEventListener("click", desencriptarTexto);
btnCopiar.addEventListener("click", copiarTexto);
btnLimpiar.addEventListener("click", limpiarVentana);

condicionesIniciales();

function condicionesIniciales(){
    divMensajeEncriptado.style.display = "none";
    divMensajeInicial.style.display = "block";
    entradaUsuario.value = "";
    salidaUsuario.value = "";
}

function encriptarTexto(){
    divMensajeInicial.style.display = "none";
    divMensajeEncriptado.style.display = "block";
}

function desencriptarTexto(){

}

function copiarTexto(){

}

function limpiarVentana(){
    condicionesIniciales();
}
