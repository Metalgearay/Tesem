function Calculator() {
  this.currentValue = 0;
}

Calculator.prototype.value = function() {
  return this.currentValue;
};

Calculator.prototype.add = function(num) {
  this.currentValue += num;
};

Calculator.prototype.subtract = function(num) {
  this.currentValue -= num;
};