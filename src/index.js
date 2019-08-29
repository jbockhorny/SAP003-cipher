document.getElementById("encode").addEventListener("click", takeValueEncode);

let text = document.getElementById("text");
let offset = document.getElementById("offset");
let form = document.getElementById("form");
let result = document.getElementById("result");

function takeValueEncode() {
  event.preventDefault();

  let parsedOffset = Number(offset.value);
           
  if ( text.value === "" || isNaN(parsedOffset) || parsedOffset === 0 ) {
    alert("Para codificar digite uma mensagem e o deslocamento!");  
    document.getElementById("text").focus(); 

  } else if ((parsedOffset %26) === 0) { 
    alert("Com o deslocamento " + offset + " você percorreu o alfabeto inteiro e voltou a sua mensagem original!")
  
   } else if (parsedOffset <0) {
    result.innerHTML=`<p>A mensagem "${text.value}" codificada é: <br/> ${window.cipher.decode(-parsedOffset, text.value)}!</p>`;

  } else {        
    result.innerHTML=`<p>A mensagem "${text.value}"codificada é: ${window.cipher.encode(parsedOffset, text.value)}!</p>`;
  }
  form.reset();
  text.focus(); 
}

document.getElementById("decode").addEventListener("click", takeValueDecode);
function takeValueDecode() {
  event.preventDefault();

  let parsedOffset = Number(offset.value);
          
  if ( text.value === "" || isNaN(parsedOffset)|| parsedOffset === 0 ) {
    alert("Para decodificar digite uma mensagem e o deslocamento!");

  } else if (parsedOffset <0) {
    result.innerHTML=`<p>A mensagem "${text.value}" decodificada é: ${window.cipher.encode(-parsedOffset, text.value)}!</p>`;

  } else {
    result.innerHTML=`<p>A mensagem "${text.value}" decodificada é: ${window.cipher.decode(parsedOffset, text.value)}!<p>`;
  }
  form.reset();
  text.focus(); 
}

