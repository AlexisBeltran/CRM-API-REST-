import {ObtenerCliente, EditarCliente} from './API.js';
import {ImprimirAlerta} from './funciones.js';
let Id;
const NombreInput = document.querySelector('#nombre'),
              EmailInput = document.querySelector('#email'),
              TelefonoInput = document.querySelector('#telefono'),
              EmpresaInput = document.querySelector('#empresa'),
              IdInput = document.querySelector('#id');

const Formulario = document.querySelector('#formulario');
(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const Parametro = new URLSearchParams(window.location.search);
        Id = parseInt(Parametro.get('id'));
        GetClient();
        Formulario.addEventListener('submit', ValidarCampo);
    });

    async function GetClient(){
        const Cliente = await ObtenerCliente(Id);
        const {Nombre, Email, Telefono, Empresa, id } = Cliente;
        
        NombreInput.value = Nombre;
        EmailInput.value = Email;
        TelefonoInput.value = Telefono;
        EmpresaInput.value = Empresa;
        IdInput.value = id;
    }

    function ValidarCampo(e){
        e.preventDefault();
        const Cliente = {
            Nombre: NombreInput.value,
            Email: EmailInput.value,
            Telefono: TelefonoInput.value,
            Empresa: EmpresaInput.value,
            id: parseInt(IdInput.value)
        }
        const ClienteAceptado = (Object.values(Cliente).every(input => input !== ""));
        if(!ClienteAceptado){
            ImprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }
        ImprimirAlerta('Agregado Correctamente', 'correcto');
        EditarCliente(Cliente);
    }
})();