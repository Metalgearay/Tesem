var f2c = function (f) {
  return (f-32)*5/9;
};

var c2f = function (c) {
  return c*9/5+32;
};

var t = new Temperature()
function Temperature(f) {
  // this.far = f;
  var far = f;

  this.getF = function () {
    return far;
  };

  this.setF = function(f) {
    if (typeof f == "number"){
      far = f;  
    }
  };
}

Temperature.prototype.setFahrenheit = function (f) {
  this.setF(f);
};
Temperature.prototype.fahrenheit = function () {
  return this.getF();
};

Temperature.prototype.setCelcius = function (c) {
  this.setF(c2f(c));
};

Temperature.prototype.celcius = function () {
  return f2c(this.getF());
};


