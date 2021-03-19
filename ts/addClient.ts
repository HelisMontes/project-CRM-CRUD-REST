import {DATA_FORM_ADD_CLIENT as DATAFORM, showAlert, DataClient, validateFormEmpty} from './selectorsandfunctions.js';
import {newClient} from './API.js';

document.addEventListener('DOMContentLoaded', () =>{
    DATAFORM.addClient.addEventListener('click', validateForm);
});

const validateForm = (e:any): void =>{ 
    e.preventDefault();
    const data: DataClient = {
        nombre: DATAFORM.nombre.value.trim(),
        email: DATAFORM.email.value.trim(),
        telefono: DATAFORM.telefono.value.trim(),
        empresa: DATAFORM.empresa.value.trim(),
    }; Object.freeze(data);
    if(validateFormEmpty(data)){
        showAlert('Todo los campos son obligatorios');
        return
    }
    newClient(data);
};