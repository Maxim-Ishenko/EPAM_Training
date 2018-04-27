function Calculator() {
  this.result = 0;

  this.reset = function() {
    this.result = 0;
  };

  this.getResult = function() {
    return this.result;
  };

  this.add = function(num) {
    this.result += num;
    return this;
  };

  this.substract = function(num) {
    this.result -= num;
    return this;
  };

  this.multiple = function(num) {
    this.result *= num;
    return this;
  };

  this.divide = function(num) {
    this.result /= num;
    return this;
  };

  this.getInitialState = function() {
    setTimeout(
      function() {
          console.log(this.result);
        this.result = 5;
      }.bind(this),
      3000
    );
    return this;
  };

this.valueOf = function () {return this.result;}

//this.toString = function () {return this.result;}

}

var calculator = new Calculator();

console.log(+calculator.add(4).add(3).multiple(5));

/*
//Bind
function bind(function, context) {
    return function() {
      return function.apply(context, arguments);
    };
  }

  console.log(bind());*/