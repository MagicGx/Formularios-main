const expresiones={
    nombre:/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    numeros:/^[0-9]*$/,
}

const btnInicio = document.getElementById('btn-inicio')
const btnRegistro = document.getElementById('btn-registro');
const formulario = document.getElementById('form');
const usuario = document.getElementById('nombre');
const edad = document.getElementById('edad');
const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
let validacionCompleta=7;


btnInicio.addEventListener('click', ()=>{
    window.location.assign('D:/visualstudiocode/pryfin2/Formularios-main/Formulario-de-Login/index.html');
})

formulario.addEventListener('submit', e=> {
    e.preventDefault();
    /* Validacion de ususario */
    if(expresiones.nombre.test(usuario.value)==false){
        alert('Usuario no valido');
        usuario.focus();
        validacionCompleta=validacionCompleta-1;
    }
    if(usuario.length<2){
        alert('Nombre de usuario muy corto');
        usuario.focus();
        validacionCompleta=validacionCompleta-1;
    }
    if(usuario.length>15){
        alert('Nombre de usuario muy largo');
        usuario.focus();
        validacionCompleta=validacionCompleta-1;
    }
    /* Validacion de Edad*/

    if(expresiones.numeros.test(edad.value)==false){
        alert('Edad incorrecta');
        edad.focus();
        validacionCompleta=validacionCompleta-1;
    }

    if(edad.value.length>3){
        alert('Edad incorrecta');
        edad.focus();
        validacionCompleta=validacionCompleta-1;
    }

    if(edad.value<18){
        alert('Edad incorrecta');
        edad.focus();
        validacionCompleta=validacionCompleta-1;
    }
    /* Validacion de E-mail */

    if(expresiones.email.test(email.value)==false){
        alert('Email incorrecto');
        email.focus();
        validacionCompleta=validacionCompleta-1;
    }

    btnRegistro.addEventListener('click', ()=>{
        window.location.assign('D:/visualstudiocode/pryfin2/Formularios-main/Formulario-de-Login/index.html');
    })
})

