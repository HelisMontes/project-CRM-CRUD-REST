import { selectClientForId, updateClientDB } from './API.js';
import { DataClient, option as mockData, validateFormEmpty, showAlert } from './selectorsandfunctions';

document.addEventListener('DOMContentLoaded', () => selectClient());
mockData.update.addEventListener('click', () => updateClient);

const selectClient = async (): Promise<void> => { 
    const parametrosURL:any = new URLSearchParams(window.location.search);
    const idClient = Number( parametrosURL.get('id') );
    const DataClient:any = await selectClientForId(idClient);
    postDataForm(DataClient);
};

const postDataForm = (client: DataClient): void => {
    const { nombre, email, telefono, empresa, id }: DataClient = client
    mockData.nombre.value = nombre;
    mockData.email.value = email;
    mockData.telefono.value = telefono;
    mockData.empresa.value = empresa;
    mockData.id.value = id;
}

const updateClient = (e: any): void =>{
    e.preventDefault();
    const data: DataClient = {
        nombre: mockData.nombre.value.trim(),
        email: mockData.email.value.trim(),
        telefono: mockData.telefono.value.trim(),
        empresa: mockData.empresa.value.trim(),
        id: Number (mockData.id.value),
    }; Object.freeze(data);

    if(validateFormEmpty(data)){
        showAlert('Todo los campos son obligatorios');
        return
    }
    updateClientDB(data)
}