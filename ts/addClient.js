"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectorsandfunctions_js_1 = require("./selectorsandfunctions.js");
const API_js_1 = require("./API.js");
document.addEventListener('DOMContentLoaded', () => {
    selectorsandfunctions_js_1.DATAFORMADDCLIENT.addClient.addEventListener('click', validateForm);
});
const validateForm = (e) => {
    e.preventDefault();
    const data = {
        nombre: selectorsandfunctions_js_1.DATAFORMADDCLIENT.nombre.value,
        email: selectorsandfunctions_js_1.DATAFORMADDCLIENT.email.value,
        telefono: Number(selectorsandfunctions_js_1.DATAFORMADDCLIENT.telefono.value),
        empresa: selectorsandfunctions_js_1.DATAFORMADDCLIENT.empresa.value,
    };
    Object.freeze(data);
    if (validateFormEmpty(data)) {
        selectorsandfunctions_js_1.showAlert('Todo los campos son obligatorios');
        return;
    }
    API_js_1.newClient(data);
};
const validateFormEmpty = (obj) => !Object.values(obj).every(imput => imput !== '');
