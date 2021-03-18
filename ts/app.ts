import { getClient, deleteClient } from './API.js';
import {dataClient} from './selectorsandfunctions';

const listClient = document.querySelector('#listado-clientes');
document.addEventListener('DOMContentLoaded', () => showClients());
listClient.addEventListener('click', confirmDelete);

const showClients = async () => {
    const dataClients:dataClient[] = await getClient();
    dataClients.map(client => {
        const { nombre, email, telefono, empresa, id }:dataClient = client
        const row:any = document.createElement('tr');
        row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        listClient.appendChild(row);
    })
};

function confirmDelete (e:any):void{
    e.preventDefault();
    if(e.target.classList.contains('eliminar')){
        const idClient:number = Number(e.target.dataset.cliente);
        const accept:boolean = confirm(`¿Deseas eliminar este cliente?`)
        accept ? deleteClient(idClient) : false ;
    }
};