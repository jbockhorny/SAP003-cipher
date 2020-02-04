document.getElementById("encode").addEventListener("click", takeValueEncode);

let form = document.getElementById("form");
let result = document.getElementById("result");

function takeValueEncode(event) {
  event.preventDefault();

  let offset = Number(document.getElementById("offset").value);
  let text = document.getElementById("text").value;
           
  if ( !text || !offset || offset < 0 ) {
    alert(`Para codificar digite uma mensagem e o deslocamento maior que 0!`);    

  } else if ((offset % 26) === 0) { 
    alert(`Com o deslocamento ${offset} você percorreu o alfabeto inteiro e voltou a sua mensagem original!`);

  } else {        
    result.textContent=`A mensagem "${text}"codificada é ${window.cipher.encode(offset, text)}!`;
  }
  form.reset(); 
}

document.getElementById("decode").addEventListener("click", takeValueDecode);

function takeValueDecode(event) {
  event.preventDefault();

  let offset = Number(document.getElementById("offset").value);
  let text = document.getElementById("text").value;
          
  if ( !text || !offset || offset < 0 ) {
    alert(`Para codificar digite uma mensagem e o deslocamento maior que 0!`);   

  } else if ((offset %26) === 0) { 
    alert(`Com o deslocamento ${offset} você percorreu o alfabeto inteiro e voltou a sua mensagem original!`);

  } else {
    result.textContent=`A mensagem "${text}" decodificada é ${window.cipher.decode(offset, text)}!`;
  }
  form.reset();  
}