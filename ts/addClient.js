"use strict";
import {DATAFORMADDCLIENT as DATAFORM, showAlert} from './selectorsandfunctions.js';
import {newClient} from './API.js';

document.addEventListener('DOMContentLoaded', () => {
    DATAFORM.addClient.addEventListener('click', validateForm);
});
const validateForm = (e) =>{ 
    e.preventDefault();
    const data = {
        nombre: DATAFORM.nombre.value,
        email: DATAFORM.email.value,
        telefono: Number (DATAFORM.telefono.value),
        empresa: DATAFORM.empresa.value,
    }; Object.freeze(data);
    if(validateFormEmpty(data)){
        showAlert('Todo los campos son obligatorios');
        return
    }
    newClient(data);
};

const validateFormEmpty = (obj) => !Object.values(obj).every( imput => imput!=='' );
