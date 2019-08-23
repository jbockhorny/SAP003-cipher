window.cipher = {
    encode: encode,
    decode: decode
};
     
    function encode(text, offset){
    
        let textEncode =[];    
        let alphabetSize = 26;
        let firstAsci = 65;

            for (let i=0; i < text.length; i++){ 

                if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){

                    textEncode[i]= (text.charCodeAt(i)-firstAsci+offset)% alphabetSize +firstAsci;
                    textEncode[i]= (String.fromCharCode(textEncode[i]));         
                        
                } else{   
                    
                    textEncode[i] = text.charAt(i);
                }                    
            
                let encodeResult = textEncode.join("");  
                console.log(encodeResult);  
                }     
    }

    
    

    function decode(text, offset){
    
        let textDecode =[];    
        let alphabetSize = 26;
        let firstAsci = 90;

        for (let i=0; i < text.length; i++){ 

        if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){

            textDecode[i] = (text.charCodeAt(i)-firstAsci-offset)% alphabetSize +firstAsci;
            textDecode[i] = (String.fromCharCode(textDecode[i]));

                       
                  
        } else{   
            
            textDecode[i] = text.charAt(i);
        }
        
        let decodeResult = textDecode.join("");
        console.log(decodeResult); 
        
          
        }
          
    }

    