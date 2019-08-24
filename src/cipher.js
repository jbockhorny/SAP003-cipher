window.cipher = {
  encode: encode,
  decode: decode
};
     
function encode(text, offset) {

  let textEncode =[]; 
  let alphabetSize = 26;
  let firstAsciUppercase = 65;
  let firstAsciLowercase = 97;

  for (let i=0; i < text.length; i++) { 

    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) {

      textEncode[i]= (text.charCodeAt(i)-firstAsciUppercase+offset)% alphabetSize +firstAsciUppercase;
      textEncode[i]= (String.fromCharCode(textEncode[i]));
                                                                
    } else if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122) {

      textEncode[i]= (text.charCodeAt(i)-firstAsciLowercase+offset)% alphabetSize +firstAsciLowercase;
      textEncode[i]= (String.fromCharCode(textEncode[i]));                           
                 
    } else {
      textEncode[i] = text.charAt(i);
    }                  
                     
  } 
  return textEncode.join(""); 
   
}     

function decode(text, offset) {
    
  let textDecode =[];    
  let alphabetSize = 26;
  let firstAsciUppercase = 90;
  let firstAsciLowercase = 122;

  for (let i=0; i < text.length; i++) { 

    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) {

      textDecode[i] = (text.charCodeAt(i)-firstAsciUppercase-offset)% alphabetSize +firstAsciUppercase;
      textDecode[i] = (String.fromCharCode(textDecode[i]));
                            
    } else if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122) {

      textDecode[i]= (text.charCodeAt(i)-firstAsciLowercase-offset)% alphabetSize +firstAsciLowercase;
      textDecode[i]= (String.fromCharCode(textDecode[i]));                
                
    } else {
      textDecode[i] = text.charAt(i);
    }                 
  }
  return textDecode.join("");          
}