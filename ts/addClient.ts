import {DATAFORMADDCLIENT as DATAFORM, showAlert} from './selectorsandfunctions.js';

document.addEventListener('DOMContentLoaded', ()=>{
    DATAFORM.addclient.addEventListener('click', validateForm);
});

const validateForm = (e:any):void =>{ 
    e.preventDefault();
    const data:any = {
        nombre: DATAFORM.nombre.value,
        email: DATAFORM.email.value,
        telefono: Number (DATAFORM.telefono.value),
        empresa: DATAFORM.empresa.value,
    }; Object.freeze(data);
    if(validateFormEmpty(data)){
        showAlert('Todo los campos son obligatorios');
        return
    }
};

const validateFormEmpty = (obj:any):any => !Object.values(obj).every( imput => imput!=='' );