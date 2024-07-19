const textoEnc = document.querySelector(".container__input");
const respuesta = document.querySelector(".evaluar");//cuadro de texto invisible en evaluar
const contenido = document.querySelector(".tarjeta");
const botonCopiar = document.querySelector(".container__boton_copiar");
const textoAviso = document.querySelector(".presentacion__botones__subtitulo"); 


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar() {
    let textoDeUsuario = textoEnc.value;
    let texto = textoDeUsuario.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");//reconocedor de caracteres especiales y eliminador de estos
    if ((textoDeUsuario=="")||(textoDeUsuario!==texto)||(textoDeUsuario !== textoDeUsuario.toLowerCase())){
        textoMsg(textoDeUsuario,texto);
    }else{
        let textoCifrado = texto.replace(/e/mg, "enter").replace(/i/mg, "imes").replace(/a/mg, "ai").replace(/o/mg, "ober").replace(/u/mg, "ufat");
        respuesta.innerHTML=textoCifrado;
        console.log(textoCifrado);
        botonCopiar.style.visibility="inherit";//hacer visible el boton 
        contenido.remove(); 
    }
    return;
}

function desEncriptar() {
    let textoDeUsuario = textoEnc.value;
    let texto = textoDeUsuario.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    if ((textoDeUsuario=="")||(textoDeUsuario!==texto)||(textoDeUsuario !== textoDeUsuario.toLowerCase())){
        textoMsg(textoDeUsuario,texto);
    }else{
        let textoDesCifrado = texto.replace(/enter/mg, "e").replace(/imes/mg, "i").replace(/ai/mg, "a").replace(/ober/mg, "o").replace(/ufat/mg, "u");
        console.log(textoDesCifrado);
        respuesta.innerHTML=textoDesCifrado;
        botonCopiar.style.visibility="inherit";
        contenido.remove(); 
    }
    return;
}

function copiar(){
    let copiarTxt=respuesta;
    copiarTxt.select();
    document.execCommand("Copy");
}

function textoMsg(textoIngresado,textoTransformado){
    if(textoIngresado==""){
        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFFFF";
        textoAviso.style.fontWeight = "800"; 
        textoAviso.textContent = "No debe estar vacio";
        
        setTimeout(()=>{
            textoAviso.removeAttribute("style");
        },1500);
    }else if (textoIngresado!==textoTransformado){
        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFFFF";
        textoAviso.style.fontWeight = "800"; 
        textoAviso.textContent = "No debe tener acentos o caracteres especiales";
        
        setTimeout(()=>{
            textoAviso.removeAttribute("style");
        },1500);
    }else if(textoIngresado !== textoIngresado.toLowerCase()){
        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFFFF";
        textoAviso.style.fontWeight = "800"; 
        textoAviso.textContent = "No debe contener mayusculas";
        
        setTimeout(()=>{
            textoAviso.removeAttribute("style");
        },1500);
    }
}
