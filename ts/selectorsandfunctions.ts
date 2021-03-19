const DATA_FORM_ADD_CLIENT:any = {
    nombre : document.querySelector('#nombre'),
    email : document.querySelector('#email'),
    telefono : document.querySelector('#telefono'),
    empresa : document.querySelector('#empresa'),
    addClient : document.querySelector('#addclient'),
    formulario : document.querySelector('#formulario'),
}; Object.freeze(DATA_FORM_ADD_CLIENT);

const showAlert = (message: string): void => {
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${message}</span>
        `;
        DATA_FORM_ADD_CLIENT.formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
};

const validateFormEmpty = (obj) => !Object.values(obj).every( imput => imput !=='' );

const DATA_FORM_UPDATE_CLIENT: any = {
    nombre : document.querySelector('#nombre'),
    email : document.querySelector('#email'),
    telefono : document.querySelector('#telefono'),
    empresa : document.querySelector('#empresa'),
    id : document.querySelector('#id'),
    update: document.querySelector('#update')
}; Object.freeze(DATA_FORM_UPDATE_CLIENT);

type DataClient = {
    nombre:string,
    email:string,
    telefono:number,
    empresa:string,
    id?:number,
}

export {DATA_FORM_ADD_CLIENT, showAlert, DataClient, DATA_FORM_UPDATE_CLIENT as option, validateFormEmpty} 