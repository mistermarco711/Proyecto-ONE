const entradaUsuario = document.getElementById("txtaEncriptado");
const salidaUsuario = document.getElementById("txtaDesencriptado");

const divMensajeInicial = document.getElementById("main__mensaje__inicial");
const divMensajeEncriptado = document.getElementById("main__mensaje__encriptado");

const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const btnLimpiar = document.getElementById("btnLimpiar");

btnEncriptar.addEventListener("click", mostrarTextoEncriptado)
btnDesencriptar.addEventListener("click", mostrarTextoDesencriptado);
btnCopiar.addEventListener("click", copiarTexto);
btnLimpiar.addEventListener("click", limpiarVentana);

condicionesIniciales();

function condicionesIniciales() {
    divMensajeEncriptado.style.display = "none";
    divMensajeInicial.style.display = "block";
    entradaUsuario.value = "";
    salidaUsuario.value = "";
}

function mostrarTextoEncriptado() {
    divMensajeInicial.style.display = "none";
    divMensajeEncriptado.style.display = "block";
    let mensajeEncriptado = encriptarDesencriptar(entradaUsuario.value, 1);
    salidaUsuario.value = mensajeEncriptado;
}

function mostrarTextoDesencriptado() {
    let mensajeDesencriptado;
    if (salidaUsuario.value != "") {
        mensajeDesencriptado = encriptarDesencriptar(salidaUsuario.value, 2);
    } else {
        divMensajeInicial.style.display = "none";
        divMensajeEncriptado.style.display = "block";
        mensajeDesencriptado = encriptarDesencriptar(entradaUsuario.value, 2);
        
    }
    salidaUsuario.value = mensajeDesencriptado;

}

function encriptarDesencriptar(texto, opcion) {
    let matrixEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    if (opcion == 1) {
        for (let i = 0; i < matrixEncriptado.length; i++) {
            if (texto.includes(matrixEncriptado[i][0])) {
                texto = texto.replaceAll(matrixEncriptado[i][0], matrixEncriptado[i][1]);
            }
        }
        return texto;
    } else {
        for (let i = 0; i < matrixEncriptado.length; i++) {
            if (texto.includes(matrixEncriptado[i][1])) {
                texto = texto.replaceAll(matrixEncriptado[i][1], matrixEncriptado[i][0]);
            }
        }
        return texto;
    }

}
function copiarTexto() {

}

function limpiarVentana() {
    condicionesIniciales();
}
