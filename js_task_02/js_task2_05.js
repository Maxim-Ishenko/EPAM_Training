//Вывод в консоль максимального элемента массива
function maxInArr(arr) {

	var max = arr[0];
  
	for (i=1; i<arr.length; i++) {
		if (max < arr[i]) {
		max = arr[i];
		}
	}
	console.log("Максимальное значение: " + max);
	}
		
maxInArr([10, 4, 77, 6, 74, 90]);
		