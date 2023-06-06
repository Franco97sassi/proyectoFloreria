const snack1= document.getElementById('snack1');
const qwe= document.getElementById('qwe');
const snack3= document.getElementById('snack3');
const snack4= document.getElementById('snack4');
const snack5= document.getElementById('snack5');
snackQuestion1 = document.querySelector(".snackQuestion1");
snackQuestion2 = document.querySelector(".snackQuestion2");
snackQuestion3 = document.querySelector(".snackQuestion3");
snackQuestion4 = document.querySelector(".snackQuestion4");
snack1.addEventListener('click', ( )=>{
        
       window.location.href=" snack2.html"
})
qwe.addEventListener('click', (e)=>{
       
       window.location.href=" contacto.html"

 })
snack3.addEventListener('click', ()=>{
       window.location.href=" contacto.html"
        
})
snack4.addEventListener('click', ()=>{
       window.location.href=" contacto.html"
})
snack5.addEventListener('click', ()=>{
       window.location.href="contacto.html"
})



const DateTime = luxon.DateTime;

const ahora= DateTime.now()
horaActual.value=ahora.toLocaleString(DateTime.TIME_24_SIMPLE)
let dates = document.querySelectorAll('input[type="date"]');
let inicio = DateTime.now().toFormat("yyyy-MM-dd");
let fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");