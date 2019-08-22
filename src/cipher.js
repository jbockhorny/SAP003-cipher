window.cipher = {};


//let lenghtAsci = 90;
     
    function encode(text, offset){

    let alphabetSize = 26;
    let firstAsci = 65;
    let textEncode =[];    
    let encodeArray =[];
        
    //Loop não esta acontecendo    
    for (let i=0; i < text.length; i++){
                
        textEncode[i] = (text.charCodeAt(i)-firstAsci+offset)% alphabetSize +firstAsci;
        encodeArray.push(String.fromCharCode(textEncode[i]));
        console.log(encodeArray);
        return encodeArray.join('');
        
        }        
    }