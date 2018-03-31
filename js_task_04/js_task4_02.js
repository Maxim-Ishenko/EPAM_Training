//Возврат строки с первым заглавным символом
function bigLetter(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

var str1 = "my name is Max";
var str2 = bigLetter(str1);

console.log(str2);