document.getElementById("suscribirse").addEventListener("click", validation);


// Name and Email validation Function.
function validation() {
    var name = document.getElementById("nombre").value;
    var email = document.getElementById("mail").value;
    var emailReg = /\w+@\w+\.+[a-z]/;
    var addres = document.getElementById("direccion").value;
    var selector = document.getElementById("selector").value
    if (name === '' || email === '' || addres === '' || selector === "0") {
        alert("Por favor complete los campos...!!!!!!");
        return false;
    } else if (!(email).match(emailReg)) {
        alert(" Email inválido...!!!!!!");
        return false;
    } else {
        return alert("Muchas gracias por suscribirte");
    }
}