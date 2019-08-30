document.getElementById("encode").addEventListener("click", takeValueEncode);

let form = document.getElementById("form");
let result = document.getElementById("result");

function takeValueEncode() {
  event.preventDefault();

  let offset = Number(document.getElementById("offset").value);
  let text = document.getElementById("text").value;
           
  if ( text === "" || isNaN(offset) || offset === 0 ) {
    alert("Para codificar digite uma mensagem e o deslocamento!");    

  } else if ((offset %26) === 0) { 
    alert("Com o deslocamento " + offset + " você percorreu o alfabeto inteiro e voltou a sua mensagem original!");
  
  } else if (offset <0) {
    result.innerHTML=`<p>A mensagem "${text}" codificada é: ${window.cipher.decode(-offset, text)}!</p>`;

  } else {        
    result.innerHTML=`<p>A mensagem "${text}"codificada é ${window.cipher.encode(offset, text)}!</p>`;
  }
  form.reset(); 
}

document.getElementById("decode").addEventListener("click", takeValueDecode);
function takeValueDecode() {
  event.preventDefault();

  let offset = Number(document.getElementById("offset").value);
  let text = document.getElementById("text").value;
          
  if ( text === "" || isNaN(offset)|| offset === 0 ) {
    alert("Para decodificar digite uma mensagem e o deslocamento!");

  } else if ((offset %26) === 0) { 
    alert("Com o deslocamento " + offset + " você percorreu o alfabeto inteiro e voltou a sua mensagem original!");

  } else if (offset <0) {
    result.innerHTML=`<p>A mensagem "${text}" decodificada é ${window.cipher.encode(-offset, text)}!</p>`;

  } else {
    result.innerHTML=`<p>A mensagem "${text}" decodificada é ${window.cipher.decode(offset, text)}!<p>`;
  }
  form.reset();  
}