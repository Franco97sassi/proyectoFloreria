// const snack1= document.getElementById('snack1');
//  const qwe= document.getElementById('qwe');
// const snack3= document.getElementById('snack3');
// const snack4= document.getElementById('snack4');
// const snack5= document.getElementById('snack5');
// snackQuestion1 = document.querySelector(".snackQuestion1");
// snackQuestion2 = document.querySelector(".snackQuestion2");
// snackQuestion3 = document.querySelector(".snackQuestion3");
// snackQuestion4 = document.querySelector(".snackQuestion4");


//        window.location.href=" snack2.html"
// })
// qwe.addEventListener('click', (e)=>{

//        window.location.href=" contacto.html"

//  })
// snack3.addEventListener('click', ()=>{
//        window.location.href=" contacto.html"

// })
// snack4.addEventListener('click', ()=>{
//        window.location.href=" contacto.html"
// })
// snack5.addEventListener('click', ()=>{
//        window.location.href="contacto.html"
// })



// const DateTime = luxon.DateTime;

// const ahora= DateTime.now()
// horaActual.value=ahora.toLocaleString(DateTime.TIME_24_SIMPLE)
// let dates = document.querySelectorAll('input[type="date"]');
// let inicio = DateTime.now().toFormat("yyyy-MM-dd");
// let fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");

// const evento= document.getElementById('evento');
// const tipo= document.getElementById('tipo');
// const total= document.getElementById('total');
// const fecha= document.getElementById('fecha');


// tipo.addEventListener ('input',()=>{
//        localStorage.setItem('tipo',tipo.value)
// }      
// )

// const mostrar=()=>{
//        localStorage.getItem('evento',evento.value)
//       tipo.innerHTML=tipo.value;

// }
const evento = document.getElementById('evento');
const evento3 = document.getElementById('evento3');
const snack1=document.getElementById("snack1");
// const mostrar1 = document.getElementById("mostrar1")
const mostrar=document.getElementById("mostrar");

// const borrar=document.querySelector(".btn-danger")

const crearLS = () => {
        const ingreso = document.getElementById('input1');
        localStorage.setItem('valor', ingreso.value)
        //      evento.innerText=localStorage.getItem('valor')
        // evento.innerText=ingreso.value
};
const mostrarLS = () => {
        // evento.innerText = localStorage.getItem('valor')
        evento3.innerText = localStorage.getItem('valor')

};
const borrarLS = () => {
        localStorage.removeItem('valor')

};

// snack1.addEventListener('click', crearLS);
// mostrar1.addEventListener('click', mostrarLS)
// borrar.addEventListener('click',borrarLS)
if(snack1){  
snack1.addEventListener('click',  () => {
        const ingreso = document.getElementById('input1');
        localStorage.setItem('valor', ingreso.value);
}) };
// mostrar3.addEventListener('click', mostrarLS)
if(mostrar){

 
mostrar.addEventListener('click', () =>{
        evento3.innerText = localStorage.getItem('valor');
 })};
 