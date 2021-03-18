const url:string = 'http://localhost:4000/clientes';
import {dataClient} from './selectorsandfunctions.js';

export const newClient = async (client:dataClient) => {
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
}