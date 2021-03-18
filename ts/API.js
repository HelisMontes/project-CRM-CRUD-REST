"use strict";
const url = 'http://localhost:4000/clientes';
export const newClient = async (client) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json' // los datos se enviaran como JSON
            }
        });
        window.location.href = 'index.html';
    }
    catch (error) {
        console.log(error);
    }
};
export const getClient = async () => {
    try {
        const result = await fetch(url);
        const data = result.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
export  const deleteClient = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const selectClientForId = async (id) => {
    try {
        const result = await fetch(`${url}/${id}`);
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
};