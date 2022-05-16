const expresiones={
    nombre:/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    numeros: /^[0-9]*$/
}
const formulario=document.getElementById('form');
const nombre=document.getElementById('nom');
const correo=document.getElementById('correo');
const direccion=document.getElementById('direc');
const telefono=document.getElementById('num');
const comentario=document.getElementById('comen');
const preg=document.getElementById('comen2')

formulario.addEventListener('submit', e=>{
    e.preventDefault();
    /* Validacion Nombre */
    if(expresiones.nombre.test(nombre.value)==false){
        alert("Nombre incorrecto");
        nombre.focus();
    }
    if(nombre.length<2){
        alert("El Nombre es muy corto");
        nombre.focus();
    }
    if(nombre.length>30){
        alert("El Nombre es muuuy largo");
        nombre.focus();
    }
    /*validacion correo*/
    if(expresiones.email.test(correo.value)==false){
        alert("el email colocado es incorrecto");
        correo.focus();
    }
    /*validacion numero de telefono*/
    if(expresiones.numeros.test(telefono.value)==false){
        alert("tu telefono es incorrecto");
        telefono.focus();
    }
    if(telefono.length<5){
        alert("tu numero de telefono es demasiado corto")
        telefono.focus();
    }
    if(telefono.length>15){
        alert("tu numero de telefono es demasiado largo")
        telefono.focus();
    }
    /*validacion comentarios*/
    if(expresiones.nombre.test(comentario.value)==false){
        alert("por favor no añadas caracteres especiales en este campo");
        comentario.focus();
    }
    if(expresiones.nombre.test(preg.value)==false){
        alert("por favor no añadas caracteres especiales en este campo");
        comentario.focus();
    }
})
function bodytecla(){
    document.body.style.background="#00ffff";
 }
 function bodytecla2(){
    document.body.style.backgroundColor="#9fe6fa";
 }

 function size(){
    var b =document.getElementById("joseph");
    b.style.fontSize="40px";
 }
 function size1(){
    var b =document.getElementById("joseph");
    b.style.fontSize="30px";
 }
 
 

 function size4(){
    var d =document.getElementById("joseph2");
    d.style.fontSize="50px";
 }
 function size5(){
    var d =document.getElementById("joseph2");
    d.style.fontSize="30px";
 }
 onmouseover=size;
 onmouseout=size1;
 
 onclick=size4;
 onmouseout=size5;
 function validad(){
    var d=document.getElementById("si");
           var e=document.getElementById("no");
   
    if(d.checked=="" && e.checked==""){
       alert("Tiene que seleccionar una de las dos opciones")
       d.focus();
       return false;
       }
   }