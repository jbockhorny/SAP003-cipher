window.cipher = {
  encode: encode,
  decode: decode
};

const alphabetSize = 26;
function encode(offset, text) {

  let textEncode = "";
  let firstAsciUppercase = 65;
  let firstAsciLowercase = 97;
  

  for (let i in text) {

    const uppercase = text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90;
    const lowercase = text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122;

    if (uppercase) {

      textEncode += String.fromCharCode((text.charCodeAt(i) - firstAsciUppercase + offset) % alphabetSize + firstAsciUppercase);
    } else if (lowercase) {

      textEncode += String.fromCharCode((text.charCodeAt(i) - firstAsciLowercase + offset) % alphabetSize + firstAsciLowercase);
    } else {

      textEncode += text.charAt(i);
      console.log('Caracter', textEncode)
    }
  }
  return textEncode;
}

function decode(offset, text) {

  let textDecode = "";
  let firstAsciUppercase = 90;
  let firstAsciLowercase = 122;
  for (let i in text) {

    const uppercase = text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90;
    const lowercase = text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122;

    if (uppercase) {

      textDecode += String.fromCharCode((text.charCodeAt(i) - firstAsciUppercase - offset) % alphabetSize + firstAsciUppercase);

    } else if (lowercase) {

      textDecode += String.fromCharCode((text.charCodeAt(i) - firstAsciLowercase - offset) % alphabetSize + firstAsciLowercase);

    } else {

      textDecode += text.charAt(i);
    }
  }
  return textDecode;
}