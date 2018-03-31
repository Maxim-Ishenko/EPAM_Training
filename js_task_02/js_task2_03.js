//Вывод в консоль количества четных, нечетных и нулевых элементов массива
function oddEvenElements(arr) {

    var odd = [];
    var even = [];
    var zero = [];
    
    for (i=0; i<arr.length; i++) {
    
        if (arr[i] === 0) {
            zero.push(arr[i]);
           
         } else if (arr[i] % 2 === 0) {
            even.push(arr[i]);
           
        } else if (arr[i] % 2 !== 0) {
            odd.push(arr[i]);   
        } 
    }
    
    console.log("Нулей в массиве: " + zero.length);   
    console.log("Четных элементов в массиве: " + even.length);  
    console.log("Нечетных элементов в массиве: " + odd.length);    
}

oddEvenElements([1, 3, 6, 7, 8, 0, 2, 0, 1]);