document.getElementById("codificar").addEventListener("click", takeValueEncode);

function takeValueEncode() {
  event.preventDefault();
  
  let text = document.getElementById("text").value;
  let offset = Number(document.getElementById("offset").value);
           
  if ( text === "" || isNaN(offset) || offset === 0 ) {
    alert("Para codificar digite uma mensagem e o deslocamento!");

  } else if (offset <0) {
    document.getElementById("Resultado").innerHTML=`<p>A mensagem "${text}" codificada é: ${window.cipher.decode(-offset, text)}!</p>`;

  } else {        
    document.getElementById("Resultado").innerHTML=`<p>A mensagem "${text}"codificada é ${window.cipher.encode(offset, text)}!</p>`;
  }
  text = "";
  offset ="";
}

document.getElementById("decodificar").addEventListener("click", takeValueDecode);
function takeValueDecode() {
  event.preventDefault();

  let text = document.getElementById("text").value;
  let offset = Number(document.getElementById("offset").value);
          
  if ( text === "" || isNaN(offset)|| offset === 0 ) {
    alert("Para decodificar digite uma mensagem e o deslocamento!");

  } else if (offset <0) {
    document.getElementById("Resultado").innerHTML=`<p>A mensagem "${text}" decodificada é ${window.cipher.encode(-offset, text)}!</p>`;

  } else {
    document.getElementById("Resultado").innerHTML=`<p>A mensagem "${text}" decodificada é ${window.cipher.decode(offset, text)}!<p>`;
  }

}

