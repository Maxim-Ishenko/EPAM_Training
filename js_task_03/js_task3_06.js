//Глубокое клонирование объекта
function deepClone(obj) {  
    var cloneObj = {};  

    for (var prop in obj) {  
        if (typeof obj[prop] == 'object') {  
          cloneObj[prop] = deepClone(obj[prop]);  
        } else {
          cloneObj[prop] = obj[prop];
        }
    }; 

    return cloneObj;  
}

var ob1 = {a:1, b:{c:0}, e:{f:{g:1}}};
var ob2 = deepClone(ob1);

console.log(ob1.e.f === ob2.e.f);