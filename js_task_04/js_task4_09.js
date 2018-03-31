//Определение количества вхождений каждого символа в заданную строку
function howMuch(str) {
  
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        obj[str[i]] = str.split(str[i]).length-1;
    }

    var arr = [];
    for (var key in obj) {
       
        arr.push(key + ": " + obj[key]); 
        
    }

    str = arr.join(", ");
    console.log(str);
}
   

howMuch("maxima");