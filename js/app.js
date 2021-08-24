import {MostrarCliente, EliminarCliente} from './API.js'
const ListadoClientes = document.querySelector('#listado-clientes');

document.addEventListener('DOMContentLoaded', MostrarClientesJson);
ListadoClientes.addEventListener('click', Eliminar);

async function MostrarClientesJson(){
    const Cliente = await MostrarCliente();
    Cliente.forEach((cliente) => {
        const {Nombre, Email, Telefono, Empresa, id} = cliente;
        ListadoClientes.innerHTML += `
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${Nombre} </p>
            <p class="text-sm leading-10 text-gray-700"> ${Email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${Telefono}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${Empresa}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
    `;
    });
}

function Eliminar(e){
    e.preventDefault();
    if(e.target.classList.contains('eliminar')){
        const ID = parseInt(e.target.dataset.cliente);
        EliminarCliente(ID);
    }
}