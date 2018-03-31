//Верблюжья нотация
function camel(string) {
    var lowStr = string.toLowerCase();  
    var arr = lowStr.split(' ');

    for (i = 1; i < arr.length; i++) {
       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    var str = arr.join('');

 console.log(str);
}

camel("mAx majijiji");