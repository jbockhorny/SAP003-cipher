window.cipher = {};
     
    function encode(text, offset){
    
        let textEncode =[];    
        let alphabetSize = 26;
        let firstAsci = 65;

        for (let i=0; i < text.length; i++){ 

        if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){

            textEncode[i]= (text.charCodeAt(i)-firstAsci+offset)% alphabetSize +firstAsci;
            textEncode[i]=(String.fromCharCode(textEncode[i]));
            
                  
        } else{   
            
            textEncode[i] = text.charAt(i);
        }
                    
       
        let encodeResult = textEncode.join("");  
         
               
    
          
        }
          
    }

    
    

    function decode(text, offset){
    
        let textEncode =[];    
        let alphabetSize = 26;
        let firstAsci = 65;

        for (let i=0; i < text.length; i++){ 

        if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){

            textEncode[i] = (text.charCodeAt(i)-firstAsci-offset)% alphabetSize +firstAsci;
            textEncode[i]=(String.fromCharCode(textEncode[i]));
            
                  
        } else{   
            
            textEncode[i] = text.charAt(i);
        }
                    
       
        let encodeResult = textEncode.join("");  
        
          
        }
          
    }

    