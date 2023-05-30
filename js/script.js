const textArea = document.querySelector(".cajatexto");
const mensaje = document.querySelector(".desencript");
const btnCopiar = document.querySelector(".boton-copiar");

function botonencrip() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  document.getElementById("contenedor-respuesta2").style.display = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
     
    if (/^[a-z]+(?: [a-z]+)*$/.test(stringEncriptado)) {
    
        for (let i = 0; i < matrizCodigo.length; i++) {
          if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
          }     
        }
        
        return stringEncriptado;
      }
        else{
        alert('El texto contiene caracteres especiales. Por favor, revisa y corrige antes de continuar')
        
      }
      mensaje = "";
  }
  

function botondesencrip(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.getElementById("contenedor-respuesta2").style.display = "none";
           
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter", "e"],["imes", "i"], ["ai", "a"],["ober", "o"],["ufat", "u"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }     
    }
    return stringDesencriptado

}

function clean(){
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
    document.getElementById("contenedor-respuesta2").style.display = "";
   
}

document.getElementById("boton-copiar").onclick = function () {
    let text = document.getElementById("textocopiar").value;
    navigator.clipboard.writeText(text);
    alert("Texto copiado");
  }


