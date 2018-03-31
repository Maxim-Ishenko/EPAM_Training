//Возврат строки заданной длины (усечение)
function cutter(str, num) {
    if (str.length > num) {
      return str.slice(0, num - 3) + "...";
    }
    return str;
}

console.log(cutter("uncle bens with aunt shmenz", 4));
