//Вывод в консоль - является число простым или нет
function primeNumbers(num) {

	if ((num % 2 !== 0) && num <= 1000) {
		console.log("Число " + num + " - простое число");
   
	} else if ((num % 2 === 0) && num <= 1000) {
		console.log("Число " + num + " - составное число");
    
	} else if (num > 1000) {
		console.log("Неверные данные");
	}
  
}

primeNumbers(14);