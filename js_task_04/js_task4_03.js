//Поиск подстроки 
function subStringi(str, subStr) {
    (str.indexOf(subStr) >= 0)? console.log("true"): console.log("false");
}

var str1 = "my name is Max";
var str2 = "ax";

subStringi(str1, str2);