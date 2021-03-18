"use strict";
const DATAFORMADDCLIENT = {
    nombre: document.querySelector('#nombre'),
    email: document.querySelector('#email'),
    telefono: document.querySelector('#telefono'),
    empresa: document.querySelector('#empresa'),
    addclient: document.querySelector('#addclient'),
    formulario : document.querySelector('#formulario'),
}; Object.freeze(DATAFORMADDCLIENT);
const showAlert = (message) => {
    const alerta = document.querySelector('.bg-red-100');
    if (!alerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center");
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${message}</span>
        `;
        DATAFORMADDCLIENT.formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
};
export {DATAFORMADDCLIENT, showAlert} 

