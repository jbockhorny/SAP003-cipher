function takeValueEncode(){
         
    let text = document.getElementById("text").value;
    let offset = parseInt(document.getElementById("offset").value);
          
        if ( text === "" || offset < 1 || offset > 25 || isNaN(offset)) {
            alert("Para codificar digite uma mensagem e o deslocamento entre 1 e 25!");

        }  else {
            encode(text, offset);
        
}


function takeValueDecode(){

    let text = document.getElementById("text").value;
    let offset = parseInt(document.getElementById("offset").value);
          
        if ( text === "" || offset < 1 || offset > 25 || isNaN(offset)) {
            alert("Para codificar digite uma mensagem e o deslocamento entre 1 e 25!");

        }  else {
            decode(text, offset);

}
