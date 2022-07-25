const validator = {
  isValid: (creditCardNumber) => {
    let sumNumber = 0;
    let totalSum = 0;
    //Convirtiendo el string en array y reversando
    creditCardNumber = creditCardNumber.split("").reverse();
    //vamos a iterar en las posiciones para poder hacer la multiplicacion
    for (var i = 0; i < creditCardNumber.length; i++) {
      //buscamos las posiciones pares
      if (i % 2 === 1) {
        //multiplicamos el valor de la posicion par por 2
        creditCardNumber[i] = creditCardNumber[i] * 2;
        //Si es mayor a 10
        if (creditCardNumber[i] >= 10) {
          //Si es mayor a 10 debemos convertir el numero en string y de string a array
          sumNumber = creditCardNumber[i].toString().split("");
          //console.log("El valor" + sumNumber);
          //una vez convertido en array y teniendo la posicion 0 y 1 las sumamos
          creditCardNumber[i] = parseInt(sumNumber[0]) + parseInt(sumNumber[1]);
        }
      }
              //multiplicamos el valor de la posicion par por 2
      //Una vez sumados, tenemos una variable acumuladora que contiene los numeros restantes de nuestro input
            totalSum = totalSum + parseInt(creditCardNumber[i]);
          }
          //Pasamos aplicar nuestro modulo 10
          let validCard = totalSum % 10 == 0 ? true : false;
          return validCard;
        },
        maskify: (creditCardNumber) => {
          let enmascarada = creditCardNumber.length;
          let masky = "";
          for (let i = 0; i < enmascarada - 4; i++) {
            masky += "#";
          }
          return masky + creditCardNumber.substring(enmascarada - 4, enmascarada);
        },
      };
      
      export default validator;
      
