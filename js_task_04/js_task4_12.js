//Случайное целое число в диапазоне от min до max 
function intRandNum(min, max) {
  return Math.floor(min + (Math.random()*(max + 1 - min)));
}

var lucky = intRandNum(14, 97);
console.log(lucky);
