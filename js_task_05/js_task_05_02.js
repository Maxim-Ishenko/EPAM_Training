//Списки
function arrayToList(arr) {
    var list = null;
    arr.reverse().forEach(function(item) {
    return list = {value: item, next: list};
    });
    return list;
}

   function listToArray(list) {
    var temp = list;
    var arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
   };

   function prepend(num, list) {
    var newList = {value: num, next: list};
    return newList;
  };

  function nth(list, num) {
    var arr = listToArray(list);
    return arr[num];
  };

console.log(arrayToList([10]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10,20,30]), 1));