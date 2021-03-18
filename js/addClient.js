import {DATAFORMADDCLIENT as DATAFORM, showAlert, validateFormEmpty} from './selectorsandfunctions.js';
import {newClient} from './API.js';
document.addEventListener('DOMContentLoaded', () => {
    DATAFORM.addClient.addEventListener('click', validateForm);
});
const validateForm = (e) =>{ 
    e.preventDefault();
    const data = {
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