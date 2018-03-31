//Округление суммы 2х аргументов до 3-го знака после запятой
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
} 

function fixedSum(num1, num2) {
  if (!isNumber(num1)) {
  console.log(num1 + " не является числом");
  } else if (!isNumber(num2)) {
      console.log(num2 + " не является числом");
    } else {
    return (+num1 +  +num2).toFixed(3);
    }
  }
  
var sum = fixedSum(1, 3.222222);  
console.log(sum);
 
  
 