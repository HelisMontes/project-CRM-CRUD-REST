import { selectClientForId, updateClientDB } from './API.js';
import { DATAFORMUPDATECLIENT as DATAUPDATE, validateFormEmpty, showAlert  } from './selectorsandfunctions.js';
document.addEventListener('DOMContentLoaded', () => {
    selectClient()
    DATAUPDATE.update.addEventListener('click', updateClient);
});
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
const updateClient = (e) =>{
    e.preventDefault();
    const data = {
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
