export function ImprimirAlerta(Contenido, tipo){
    const Error = document.querySelector('.error');
    if(!Error){
        const Formulario = document.querySelector('#formulario');
        const AlertaDiv = document.createElement('div');
        AlertaDiv.textContent = Contenido;
        if(tipo === 'error'){
            AlertaDiv.classList.add('bg-red-800', 'text-white', 'text-center', 'font-bold', 'uppercase', 'p-2', 'mt-2', 'error');
        }
        else{
            AlertaDiv.classList.add('bg-green-800', 'text-white', 'text-center', 'font-bold', 'uppercase', 'p-2', 'mt-2', 'error');
            Formulario.reset();
        }
        Formulario.appendChild(AlertaDiv);
        setTimeout(()=>{
            AlertaDiv.remove();
        },3000);
    }
}