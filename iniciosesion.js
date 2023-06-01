const formulario = document.querySelector("form"),
  checkbox = document.getElementById("check"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  p = document.querySelector("p");

function guardarLS(valor) {
  let user = { usuario: email.value, pass: password.value };

  if (user.usuario == "" || user.pass == "") {
    p.className = "error";
    p.innerText = "Todos los campos son requeridos";
    return;
  } else {
    valor === "localStorage" &&
      localStorage.setItem("item", JSON.stringify(user));

    valor === "sessionStorage" &&
      sessionStorage.setItem("item", JSON.stringify(user));
  }
  return user;
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //CÓDIGO A EJECUTAR
  //   if (checkbox.checked) {
  //   guardarLS("localStorage");
  // } else {
  //   guardarLS("sessionStorage");
  // }
 
  //convertir a op ternario
  checkbox.checked ? guardarLS("localStorage") : guardarLS("sessionStorage");
});