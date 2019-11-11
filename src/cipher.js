window.cipher = {
  encode: encode,
  decode: decode
};

let alphabetSize = 26;
// offset > 0 ? alphabetSize = 26 : alphabetSize = 25;

function encode(offset, text) {

  let textEncode;
  let firstAsciUppercase = 65;
  let firstAsciLowercase = 97;

  for (let i = 0; i < text.length; i++) {

    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {

      textEncode += String.fromCharCode((text.charCodeAt(i) - firstAsciUppercase + offset) % alphabetSize + firstAsciUppercase);


    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {

      textEncode += String.fromCharCode((text.charCodeAt(i) - firstAsciLowercase + offset) % alphabetSize + firstAsciLowercase);

    } else {
      textEncode += text.charAt(i);
    }
  }
  return textEncode;

}

function decode(offset, text) {

  let textDecode;
  let firstAsciUppercase = 90;
  let firstAsciLowercase = 122;

  for (let i = 0; i < text.length; i++) {

    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {

      textDecode += String.fromCharCode((text.charCodeAt(i) - firstAsciUppercase - offset) % alphabetSize + firstAsciUppercase);

    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {

      textDecode += String.fromCharCode((text.charCodeAt(i) - firstAsciLowercase - offset) % alphabetSize + firstAsciLowercase);

    } else {
      textDecode += text.charAt(i);
    }
  }
  return textDecode;
}