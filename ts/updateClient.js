import { selectClientForId } from './API.js';
import { DATAFORMUPDATECLIENT as DATAUPDATE } from './selectorsandfunctions.js';

document.addEventListener('DOMContentLoaded', () => selectClient());
const selectClient = async () => {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idClient = Number(parametrosURL.get('id'));
    const dataClient = await selectClientForId(idClient);
    postDataForm(dataClient);
};
const postDataForm = (client) => {
    const { nombre, email, telefono, empresa, id } = client;
    DATAUPDATE.nombre.value = nombre;
    DATAUPDATE.email.value = email;
    DATAUPDATE.telefono.value = telefono;
    DATAUPDATE.empresa.value = empresa;
    DATAUPDATE.id.value = id;
};
