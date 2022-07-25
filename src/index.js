import validator from "./validator.js";

document.getElementById("btn").addEventListener("click", () => {
  let creditCardNumber = document.getElementById("cardNumber").value;
  let nameCard = document.getElementById("namecard").value;
  
  if (creditCardNumber == " ") {
    alert("DEBES INTRODUCIR UN NUMERO");
    return document.getElementById("cardNumber").value;
  }
  if (nameCard == "") {
    alert("DEBES INTRODUCIR TU NOMBRE Y APELLIDO");
    return document.getElementById("namecard").value;
  }
  validarTarjeta(creditCardNumber);
  maskyCard(creditCardNumber);
  nombreComprador(nameCard);
});

function validarTarjeta(creditCardNumber) {
  let exitoso = validator.isValid(creditCardNumber);
  if (exitoso === true) {
    console.log("tarjeta valida");
    document.getElementById("mensaje-valido").innerHTML = "su numero de tarjeta es valido ";
  } else {
    console.log(
      "Su tarjeta es invalida por favor verifiquela e intente nuevamente"
    );
    document.getElementById("mensaje-invalido").innerHTML = "Su tarjeta es invalida por favor verifiquela e intente nuevamente";
  }
}
function maskyCard(creditCardNumber) {
  
  document.getElementById("cardNumber").value = validator.maskify(creditCardNumber);
}

function nombreComprador(nameCard) {
  document.getElementById("nameResul").innerHTML = nameCard;
}
