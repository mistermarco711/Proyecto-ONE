/***************************************************************************************************
***************************ENCRIPTADOR Y DESENCRIPTADOR DE TEXTO************************************ 
***************************Realizado por: Marco Antonio Sandoval************************************
********************************Fecha:13 de agosto de 2024******************************************/

//Defición de variables 
const entradaUsuario = document.getElementById("txtaEncriptado");
const salidaUsuario = document.getElementById("txtaDesencriptado");

const divMensajeInicial = document.getElementById("main__mensaje__inicial");
const divMensajeEncriptado = document.getElementById("main__mensaje__encriptado");

const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const btnLimpiar = document.getElementById("btnLimpiar");

//Asignación de eventos en los botones
btnEncriptar.addEventListener("click", mostrarTextoEncriptado)
btnDesencriptar.addEventListener("click", mostrarTextoDesencriptado);
btnCopiar.addEventListener("click", copiarTexto);
btnLimpiar.addEventListener("click", limpiarVentana);

entradaUsuario.addEventListener("keydown", (evento) => {
    if (evento.keyCode === 13) {
      evento.preventDefault();
    }
  });
entradaUsuario.addEventListener("keyup", () => {
    entradaUsuario.value = entradaUsuario.value.replace(/[^a-zA-Z^ ]/g,'');
})

condicionesIniciales();

//Función para inicializar el programa y ocultar el textarea de resultado
function condicionesIniciales() {
    divMensajeEncriptado.style.display = "none";
    divMensajeInicial.style.display = "flex";
    entradaUsuario.value = "";
    salidaUsuario.value = "";
}
//Función de validaciones
function validaciones() {
    if (entradaUsuario.value == "") {
        alert("¡No hay dato! Por favor escriba el texto que desee procesar");
        return false;
    } else {
        return true;
    }
}
//Función para mostrar el resultado del texto encriptado y ocultar el mensaje de bienvenida
function mostrarTextoEncriptado() {
    if (validaciones() == true) {
        divMensajeInicial.style.display = "none";
        divMensajeEncriptado.style.display = "flex";
        let mensajeEncriptado = encriptarDesencriptar(entradaUsuario.value, 1);
        salidaUsuario.value = mensajeEncriptado;
    }
}
//Función para mostrar el resultado del texto desencriptado y ocultar el mensaje de bienvenida
function mostrarTextoDesencriptado() {
    if (validaciones() == true) {
        let mensajeDesencriptado;
        if (salidaUsuario.value != "") {
            mensajeDesencriptado = encriptarDesencriptar(salidaUsuario.value, 2);
        } else {
            divMensajeInicial.style.display = "none";
            divMensajeEncriptado.style.display = "flex";
            mensajeDesencriptado = encriptarDesencriptar(entradaUsuario.value, 2);
        }
        salidaUsuario.value = mensajeDesencriptado;
    }
}
//Función qeu contiene las reglas de encriptación y devuelve el código encriptado o desencriptado
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
//Función que permite copiar el texto en el clipboard
function copiarTexto() {
    navigator.clipboard.writeText(salidaUsuario.value);
    alert('Contenido copiado');
}
//Función para limpiar todos los datos de la ventana y volver a condiciones iniciales
function limpiarVentana() {
    condicionesIniciales();
}
