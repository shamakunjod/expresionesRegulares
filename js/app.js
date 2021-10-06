function validar(){
    var verificar = document.getElementById('clave').value;
    var expresion = document.getElementById('expresion').value;
    var re = new RegExp(expresion, 'g');
    var respuesta = document.getElementById('respuesta');
    var coincidencia =verificar.match(re);    
    
    if(re.test(verificar)){
        if(coincidencia[0].length==verificar.length){                
            respuesta.innerHTML="Clave valida";
        }else{
            respuesta.innerHTML="Clave invalida";
        }
    }else{
        respuesta.innerHTML="Clave invalida";
    }  
}