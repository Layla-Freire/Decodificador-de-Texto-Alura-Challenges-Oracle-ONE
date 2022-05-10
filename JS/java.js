//Criptografia

const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");



function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ay"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

//Descriptografia

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none"
}
function desencriptar(stringDesencriptada) {
    let matrizCodigoDes = [["ay", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigoDes.length; i++) {
        if(stringDesencriptada.includes(matrizCodigoDes[i][0])) {
            stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigoDes[i][0], matrizCodigoDes[i][1])
        }
    }

    return stringDesencriptada;
}

//botão copiar



function TextoCopiado() {
    let texto = document.getElementById('copiar');
    let botao = document.getElementById('copiado');
    texto.select();
    texto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(texto.value);
 
}


