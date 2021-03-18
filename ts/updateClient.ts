import { selectClientForId } from './API.js';
import {dataClient, DATAFORMUPDATECLIENT as DATAUPDATE } from './selectorsandfunctions';

document.addEventListener('DOMContentLoaded', () => selectClient());

const selectClient = async () =>{ 
    const parametrosURL:any = new URLSearchParams(window.location.search);
    const idClient = Number( parametrosURL.get('id') );
    const dataClient:any = await selectClientForId(idClient);
    postDataForm(dataClient);
};

const postDataForm = (client:dataClient) => {
    const { nombre, email, telefono, empresa, id }:dataClient = client
    DATAUPDATE.nombre.value = nombre;
    DATAUPDATE.email.value = email;
    DATAUPDATE.telefono.value = telefono;
    DATAUPDATE.empresa.value = empresa;
    DATAUPDATE.id.value = id;
}