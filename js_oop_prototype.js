var First = function(color) {
    this.sleep = false;
    this.height = 0;
    this.color = color;
}

First.prototype.change = function(newColor) {
    this.color = newColor;
    console.log(this.color);
}

First.prototype.alarm = function() {
    console.log("Hi");
}

var Second = function(name) {
    this.name = name;
    this.yell = function() {
        console.log(name);
    };
}

Second.prototype = Object.create(First.prototype);

Second.prototype.jump = function(height) {
    this.height += height;
    console.log(this.name + ' jumping on ' + height);
  };

var Third = function(weight) {
    this.weight = weight;
    this.weightLoss = function(num) {
        this.weight -= num;
        console.log(this.weight);
    }
}

Third.prototype = Object.create(First.prototype);

Third.prototype.sleep = function() {
    (!this.sleep) ? this.sleep = true : console.log("I see you!");
}

var Fourth = function(age) {
    this.age = age;
    this.old = function(years) {
        this.age += years;
        console.log(years);
    } 
}

Fourth.prototype = Object.create(Third.prototype);


var first = new First('green');

var second = new Second('Gena');

var third = new Third(200);

var fourth = new Fourth(40);


first.change("yellow");

second.jump(10);

third.weightLoss(10);

fourth.old(10);

second.alarm();

fourth.sleep();






