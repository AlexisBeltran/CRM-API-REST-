const URL = "http://localhost:4000/clientes";

export const NuevoCliente = async cliente => {
    try{
        await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
}

export const MostrarCliente = async () => {
    try{
        const Resultado = await fetch(URL);
        const Respuesta = await Resultado.json();
        return Respuesta;
    }catch(error){
        console.log(error);
    }
}

export const EliminarCliente = async (id) => {
    try{
        await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });
    }catch(error){
        console.log(error);
    }

}

export const ObtenerCliente = async id => {
    try{
        const Resultado = await fetch(`${URL}/${id}`);
        const Respuesta = await Resultado.json();
        return Respuesta;
    }catch(Error){ 
        console.log(Error);
    }
}

export const EditarCliente = async cliente => {
    try{
        await fetch(`${URL}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    }catch(Error){
        console.log(Error);
    }
}