//Функция-счетчик четных-нечетных элементов массива
function oddEvenZeroCount(arr) {

    var countOdd = 0;
    var countEven = 0;
    var countZero = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            countZero++;
        } else if (arr[i] % 2 == 0) {
            countEven++;
        } else if (arr[i] % 2 !==0) {
            countOdd++;
        } 
    };

    console.log("Odd elements: " + countOdd);
    console.log("Even elements: " + countEven);
    console.log("Zero elements: " + countZero);
}

oddEvenZeroCount([1,3,5,0,2,4,6]);