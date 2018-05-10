//Функция, вызывающая исходную с задержкой ms
function delay(f, ms) {
  //Обертка
  return function() {
    //Сохраняем контекст в локальные переменные
    var ctx = this;
    var args = arguments;
    //Вызов функции по таймеру с задержкой
    setTimeout(function() {
      f.apply(ctx, args);}, ms);
  };
}

function f(x) {
  console.log(x);
}

var f1 = delay(f, 2000);
var f2 = delay(f, 3500);

f2(1);
