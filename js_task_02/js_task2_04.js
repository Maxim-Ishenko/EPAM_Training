//Проверка на рвенство-неравенство всех элементов массива
function compareOfArrElements(arr) {

  var output;
  var first = arr[0];
  
  for (var i=1; i<arr.length; i++) {
	 
  if (first === arr[i]) {
   output = "   true";
  } else {
    console.log("   false");  
  	return;
  } 
   
 } 
console.log(output);
} 
  
compareOfArrElements([1, 1, 1, 1]);