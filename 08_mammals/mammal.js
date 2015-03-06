var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
};

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a Mammal";
};

Mammal.prototype.haveBaby = function() {
  var babyName = "Baby " + this.name;
  var newBaby = new this.constructor(babyName);
  this.offspring.push(newBaby);
  return newBaby;
};

var Cat = function(name, color) {
  // arguments
  // this = {};
  // this.__proto__ = Cat.prototype
  // Mammal.call(this, name);  
  // Mammal.apply(this, [name]); // === 
  Mammal.call(this, name);
  this.color = color;
};

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
// Cat.prototype = new Mammal(name, color);

Cat.prototype.haveBaby = function(color) {
  // var catBabyName = "Baby " + this.name;
  // var kitten = new Cat(catBabyName, color);
  // this.offspring.push(kitten);
  var kitten = Mammal.prototype.haveBaby.call(this, color);
  debugger;
  kitten.color = color;
  return kitten;
};
