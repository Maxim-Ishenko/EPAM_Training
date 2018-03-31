//Вставка строки с заданного индекса
function stringiVstringi(str1, str2, num) {
    var arr = str1.split(" ");
    arr[num]+=" " + str2;
    str1 = arr.join(" ");
    console.log(str1);
}

stringiVstringi("I am cool","very", 0);