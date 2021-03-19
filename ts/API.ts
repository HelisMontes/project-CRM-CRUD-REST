const url: string = 'http://localhost:4000/clientes';
import {DataClient} from './selectorsandfunctions.js';

export const newClient = async (client: DataClient): Promise<void> => {
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json' // los datos se enviaran como JSON
            }
        });
        window.location.href = 'index.html';
    } catch (error) { console.log(error); }
};

export const getClients = async(): Promise<DataClient[]> => {
    try {
        return (await fetch(url)).json();
    } catch (error) { console.log(error); }
};

export const deleteClient = async (id:number) => {
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        });
    } catch (error) { console.log(error); }
}

// ALL OF  FUNCTIONS **ASYNC** RETURN A **PROMISE<TYPE>**

/**
 * @describe fetch() function => just response **Promise<Response>**
 * await fetch() => return a **Response** in this class we can use **json()**
 * 
 * @param {number} id
 * @returns {Promise<DataClient>}
 */
export const selectClientForId = async (id: number): Promise<DataClient> => {
    try {
        return (await fetch(`${url}/${id}`)).json();
    } catch (error) { console.log(error); }
};

export const updateClientDB = async (data: DataClient): Promise<void> => {
    try {
        await fetch(`${url}/${data.id}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) { console.log(error); }
};