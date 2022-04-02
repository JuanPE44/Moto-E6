//Establecer Fecha

const dia = document.getElementById('dia');
const diaNumero = document.getElementById('dia-numero');
const mes = document.getElementById('mes');
const hora = document.getElementById('hora');
const minutos = document.getElementById('minutos');

//Variables globales 

let caja = true;

const pantalla = document.querySelector('.pantalla-prendida');
const tareasContenedor = document.getElementById('tareas-contenedor');
const cajas = document.querySelector('.cajas');
const caja1 = document.querySelector('.C1');
const caja2 = document.querySelector('.C2');
const caja3 = document.querySelector('.C3');
const finCajas = document.querySelector('.fin-cajas');
const contenedorContraseña = document.querySelector('.contenedor-contraseña');
const footer = document.querySelector('.footer');
const outputNum = document.querySelector('.output-num');
const botones = document.querySelectorAll('.boton');
const botonBorrar = document.querySelector('.boton-borrar');
const botonPrender = document.querySelector('.boton-prender');
const footerIconos = document.querySelector('.footer-iconos');



// BOTONES


botonPrender.addEventListener('click', () => {
  const prender = pantalla.classList.toggle('pantalla-apagada');
  if(caja===false) {
    abrirCaja();
  }

  console.log(prender);

})

botones.forEach(boton => {
  boton.addEventListener('click', () =>{
    agregarNumero(boton.innerHTML);
  });
});

botonBorrar.addEventListener('click', () =>{
  const num = outputNum.innerHTML;
  const num2 = num.substring(0, num.length - 1); 
  outputNum.innerHTML = num2;
});



//Funciones

const establecerFecha = () => {
  const date = new Date();
  dia.textContent = date.toLocaleString('es', {weekday: 'short'})+'.,';
  diaNumero.textContent = date.toLocaleString('es', {day: 'numeric'});
  mes.textContent = date.toLocaleString('es', {month: 'short'})+'.';
  hora.textContent = date.getHours();
  minutos.textContent = date.getMinutes();

  if (parseInt(minutos.innerHTML)<10) {
    minutos.textContent = '0'+date.getMinutes();
  }
  if ((parseInt(hora.innerHTML)<10)) {
    hora.textContent = '0'+date.getHours();
  }

}

function botonRegresar() {
  const botonRegresar = document.createElement('div');
  const regresarIcono = document.createElement('i'); 
  footer.appendChild(botonRegresar);
  botonRegresar.classList.add('boton-regresar');
  botonRegresar.addEventListener('click', abrirCaja);
  botonRegresar.appendChild(regresarIcono)
  regresarIcono.classList.add('fa-solid','fa-angle-left');


}

const cerrarCaja = () => {
  caja1.classList.add('animacion-caja1');
  caja2.classList.add('animacion-caja2');
  caja3.classList.add('animacion-caja3');
  finCajas.classList.add('animacion-finCajas');
  contenedorContraseña.classList.add('animacion-contraseña');

  footerIconos.style.opacity = '0';
  
  botonRegresar(); 
  caja = false;
}

const abrirCaja = () => {

  caja = true;

  caja1.classList.remove('animacion-caja1');
  caja1.classList.add('animacion2-caja1');

  caja2.classList.remove('animacion-caja2');
  caja2.classList.add('animacion2-caja2');

  caja3.classList.remove('animacion-caja3');
  caja3.classList.add('animacion2-caja3');


  finCajas.classList.remove('animacion-finCajas');
  finCajas.classList.add('animacion-finCajas2');

  contenedorContraseña.classList.remove('animacion-contraseña');
  contenedorContraseña.classList.add('animacion-contraseña2');


  setTimeout(resetear = () => {
    const botonRegresar = document.querySelector('.boton-regresar');

    caja1.classList.remove('animacion2-caja1');
    caja2.classList.remove('animacion2-caja2');
    caja3.classList.remove('animacion2-caja3');
    finCajas.classList.remove('animacion-finCajas2');
    contenedorContraseña.classList.remove('animacion-contraseña2');

    botonRegresar.parentNode.removeChild(botonRegresar);

    footerIconos.style.opacity = '1';

    outputNum.innerHTML = '';
  },1100);
}

const agregarNumero = (numero) => {
  outputNum.innerHTML += numero;
}




//Llamado de funciones

finCajas.addEventListener('click', cerrarCaja);

establecerFecha();
setInterval('establecerFecha();',5000);



