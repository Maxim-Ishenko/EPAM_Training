//Калькулятор
var calculator = {};
var result = 0;

calculator.add = function(a) {
    result +=a;
    return function(b) {
        result = 0;
        result += (a+b);
    };
};

calculator.substract = function(a) {
    return result -=a
};

calculator.multiple = function(a) {
    return result *= a; 
};

calculator.divide = function(a) {
    return result /= a; 
};

calculator.getResult = function() {
    return result;
}

calculator.reset = function() {
    result = 0;
    return result;
}

calculator.add(4);
calculator.substract(1);
console.log(calculator.getResult());
calculator.add(4)(1);
console.log(calculator.getResult());
console.log(calculator.reset());