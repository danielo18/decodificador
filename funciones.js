var textoa="ai";
var textoe="enter";
var textoi="imes";
var textoo="ober";
var textou="ufat";
function encriptarTexto(){
    let text = document.getElementById('textoTrabajar').value;
    let encriptado="";
    let letra="";
     for(var con=0; con<text.length;con++){
        letra=text.charAt(con);
       if(text.charAt(con)=='a'){
            letra=textoa;
       }
       if(text.charAt(con)=='e'){
            letra=textoe;
       }
       if(text.charAt(con)=='i'){
            letra=textoi;
       }
       if(text.charAt(con)=='o'){
            letra=textoo;
       }
       if(text.charAt(con)=='u'){
            letra=textou;
       } 
       encriptado+=letra;
  }
  document.getElementById('resultadoCopiar').value=encriptado;
  document.getElementById('copio').removeAttribute('disabled');
}

function desencriptarTexto(){
    let text = document.getElementById('textoTrabajar').value;
    let desencriptado="";
    let letra="";
    for(var con=0; con<text.length;con++){
        letra=text.charAt(con);
        if(text.charAt(con)=='a'&& text.slice(con,con+2)=="ai" ){
           letra="a";
           con++;
       }
       if(text.charAt(con)=='e' && text.slice(con,con+5)=="enter"){
            letra="e";
            con=con+4;
       }
       if(text.charAt(con)=='i'&& text.slice(con,con+4)=="imes"){
            letra="i";
            con=con+3;
       }
       if(text.charAt(con)=='o'&& text.slice(con,con+4)=="ober"){
            letra="o";
            con=con+3;
       }
       if(text.charAt(con)=='u'&& text.slice(con,con+4)=="ufat"){
            letra="u";
            con=con+3;  
       } 
       desencriptado+=letra;
    }

    document.getElementById('resultadoCopiar').value=desencriptado;
    document.getElementById('copio').removeAttribute('disabled');
}

function copiarTexto(){
    let texto = document.getElementById('resultadoCopiar').value;
    navigator.clipboard.writeText(texto).then(
        () => {
          /* clipboard successfully set */
        },
        () => {
          /* clipboard write failed */
        },
      );
}
