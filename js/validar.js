document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", validar); 
});
  
function validar(evt) {
    evt.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let formatoMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(nombre.length == 0) {
      alert("Por favor ingresa tu nombre");
      return;
    }

    if (!document.getElementById("email").value.match(formatoMail)){
        alert("Por favor ingresa un email válido.");
        return;
       }
    let consulta = document.getElementById("consulta").value;
    if(consulta.length == 0) {
      alert("Tu consulta no puede estar vacía.");
      return;
    }
    alert("¡Gracias por contactarnos!")
    this.submit();
}

