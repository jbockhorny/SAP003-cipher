function takeValueEncode() {

  let text = document.getElementById("text").value;
  let offset = Number(document.getElementById("offset").value);
           
  if ( text === "" || isNaN(offset) || offset === 0 ) {
    alert("Para codificar digite uma mensagem e o deslocamento!");

  } else if (offset <0){
    document.getElementById("Resultado").innerHTML=`<p>A mensagem codificada é ${window.cipher.decode(text, -offset)}</p>`;

  }else {        
    document.getElementById("Resultado").innerHTML=`<p>A mensagem codificada é ${window.cipher.encode(text, offset)}</p>`;
  }
}

function takeValueDecode() {

  let text = document.getElementById("text").value;
  let offset = Number(document.getElementById("offset").value);
          
  if ( text === "" || isNaN(offset)|| offset === 0 ) {
    alert("Para decodificar digite uma mensagem e o deslocamento!");

  } else if (offset <0){
    document.getElementById("Resultado").innerHTML=`<p>A mensagem decodificada é ${window.cipher.encode(text, -offset)}</p>`;

  } else {
    document.getElementById("Resultado").innerHTML=`<p>A mensagem decodificada é ${window.cipher.decode(text, offset)}</p>`;
  }
}