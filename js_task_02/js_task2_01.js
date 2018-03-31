//Функция принимает строку или число и выводит соответствующий тип данных
function numberOrString(val) {
     
    if (typeof (val) === "string") {
        console.log("Вы ввели строку");
        
    } else if (typeof (val) === "number") {
        console.log("Вы ввели число");
       
    } else if (val === null || val === undefined) {
      console.log("Данные не соответствуют условиям. Введите строку или число.");
    }
    
}


numberOrString("7");