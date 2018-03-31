//Вывод в консоль элементов массива и их общего кол-ва
function arrayReview(arr) {

    for (i = 0; i < arr.length; i++) {
      console.log(i + "-й элемент массива --> " + arr[i]);
    };

    console.log("Всего элементов в массиве: " + arr.length);
}

arrayReview([1, 3, 5, 7, 9,,,,7]);
