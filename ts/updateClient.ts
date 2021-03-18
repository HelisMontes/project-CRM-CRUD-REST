import { selectClientForId, updateClientDB } from './API.js';
import {dataClient, DATAFORMUPDATECLIENT as DATAUPDATE, validateFormEmpty, showAlert } from './selectorsandfunctions';

document.addEventListener('DOMContentLoaded', () => {
    selectClient()
    DATAUPDATE.update.addEventListener('click', updateClient);
});

const selectClient = async () =>{ 
    const parametrosURL:any = new URLSearchParams(window.location.search);
    const idClient = Number( parametrosURL.get('id') );
    const dataClient:any = await selectClientForId(idClient);
    postDataForm(dataClient);
};

const postDataForm = (client:dataClient):void => {
    const { nombre, email, telefono, empresa, id }:dataClient = client
    DATAUPDATE.nombre.value = nombre;
    DATAUPDATE.email.value = email;
    DATAUPDATE.telefono.value = telefono;
    DATAUPDATE.empresa.value = empresa;
    DATAUPDATE.id.value = id;
}

const updateClient = (e:any):void =>{
    e.preventDefault();
    const data:dataClient = {
        nombre: DATAUPDATE.nombre.value.trim(),
        email: DATAUPDATE.email.value.trim(),
        telefono: DATAUPDATE.telefono.value.trim(),
        empresa: DATAUPDATE.empresa.value.trim(),
        id: Number (DATAUPDATE.id.value),
    }; Object.freeze(data);

    if(validateFormEmpty(data)){
        showAlert('Todo los campos son obligatorios');
        return
    }
    updateClientDB(data)
}