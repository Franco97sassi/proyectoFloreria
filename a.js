const span= document.querySelector('span');
const guardar=document.querySelector(".btn-success")
const mostrar=document.querySelector(".btn-primary")
const borrar=document.querySelector(".btn-danger")

const crearLS = () => {
    const ingreso= document.getElementById('ingreso');
    localStorage.setItem('valor',ingreso.value)
 
 }
  const mostrarLS = () => {
    span.innerText=localStorage.getItem('valor')
    }
    const borrarLS = () => {
        localStorage.removeItem('valor')
        
        }

guardar.addEventListener('click',crearLS)
// mostrar.addEventListener('click',mostrarLS)
// borrar.addEventListener('click',borrarLS)