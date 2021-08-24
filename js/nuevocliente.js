import {ImprimirAlerta} from './funciones.js';
import {NuevoCliente} from './API.js';
(function(){
    const Formulario = document.querySelector('#formulario');
    Formulario.addEventListener('submit', ValidarFormulario);
    function ValidarFormulario(e){
        e.preventDefault();
        const Nombre = document.querySelector('#nombre').value,
              Email = document.querySelector('#email').value,
              Telefono = document.querySelector('#telefono').value,
              Empresa = document.querySelector('#empresa').value;
        const Cliente = {
            Nombre,
            Email,
            Telefono,
            Empresa
        }
        //EVERY HACE UN RECORRIDO DE MI OBJETO Y VALIDA EN CASO DE QUE ALGUN CAMPO ESTE VACIO DEVUELVE UN FALSE Y SI ESTAN TODOS LLENOS UN TRUE
        const AceptadoCliente = (Object.values(Cliente).every(input => input !== ""));
        console.log(AceptadoCliente);
        if(!AceptadoCliente){
            ImprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }
        ImprimirAlerta('Agregado correctamente', 'correcto');
        NuevoCliente(Cliente);
    }
})();