import {DATAFORMADDCLIENT as DATAFORM, showAlert, dataClient} from './selectorsandfunctions.js';
import {newClient} from './API.js';

document.addEventListener('DOMContentLoaded', ()=>{
    DATAFORM.addClient.addEventListener('click', validateForm);
});

const validateForm = (e:any):void =>{ 
    e.preventDefault();
    const data:dataClient = {
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

const validateFormEmpty = (obj:any):any => !Object.values(obj).every( imput => imput!=='' );