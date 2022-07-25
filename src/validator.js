const validator = {
  isValid: (creditCardNumber) => {
    let sumNumber = 0;
    let totalSum = 0;
    
    creditCardNumber = creditCardNumber.split("").reverse();
    
    for (var i = 0; i < creditCardNumber.length; i++) {
      
      if (i % 2 === 1) {
        
        creditCardNumber[i] = creditCardNumber[i] * 2;
        
        if (creditCardNumber[i] >= 10) {
          
          sumNumber = creditCardNumber[i].toString().split("");
          
          
          creditCardNumber[i] = parseInt(sumNumber[0]) + parseInt(sumNumber[1]);
        }
      }
              
      
            totalSum = totalSum + parseInt(creditCardNumber[i]);
          }
          
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
      
