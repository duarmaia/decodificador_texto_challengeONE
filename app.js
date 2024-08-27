const textArea = document.querySelector(".textoEntrada");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Codificando a mensagem:
function btnCodificar() {
  const textoCodificado = codificar(textArea.value);
  mensagem.value = textoCodificado;
  textArea.value = "";
  console.log("Texto codificado:", textoCodificado);
}

function codificar(stringCodificada) {
  let matrizChaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // console.table(matrizChaves)

  stringCodificada = stringCodificada.toLowerCase();
  for (let i = 0; i < matrizChaves.length; i++) {
    if (stringCodificada.includes(matrizChaves[i][0])) {
      stringCodificada = stringCodificada.replaceAll(
        matrizChaves[i][0],
        matrizChaves[i][1]
      );
    }
  }
  return stringCodificada;
}

//Descodificando a mensagem:

function btnDescodificar() {
  const textoDescodificado = descodificar(textArea.value);
  mensagem.value = textoDescodificado;
  textArea.value = "";
  console.log("Texto descodificado:", textoDescodificado);
}

function descodificar(stringDescodificada) {
  let matrizChaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // console.table(matrizChaves)

  stringDescodificada = stringDescodificada.toLowerCase();
  for (let i = 0; i < matrizChaves.length; i++) {
    if (stringDescodificada.includes(matrizChaves[i][1])) {
      stringDescodificada = stringDescodificada.replaceAll(
        matrizChaves[i][1],
        matrizChaves[i][0]
      );
    }
  }
  return stringDescodificada;
}

//botão copiar:
const botaoCopiar = document.querySelector(".botao-copiar");
botaoCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
  mensagem.select();
  // navigator.clipboard.writeText (mensagem.value);

  document.execCommand("copy");
  showToast(`Texto copiado: ${mensagem.value}`);
  mensagem.value = "";
}

function showToast(texto) {
  const toast = document.getElementById("toast");
  toast.className = "toast show";
  toast.innerText = texto;
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
