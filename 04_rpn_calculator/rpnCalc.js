
// *** Version 1 of RPN Calculator ***

// function Calculator() {
//   this.numStack = [];
// }
// Calculator.prototype.push = function(n) {
//   this.numStack.push(n);
// };
// Calculator.prototype.plus = function() {
//   if (this.numStack.length < 2) {
//     throw("calculator is empty");
//   } else {
//     var num1 = this.numStack.pop();
//     var num2 = this.numStack.pop();
//     this.numStack.push(num1+num2);
//   }
// };
// Calculator.prototype.value = function() {
//   return this.numStack[this.numStack.length-1];
// };
// Calculator.prototype.minus = function() {
//   if (this.numStack.length < 2) {
//     throw("calculator is empty");
//   } else {
//     var num1 = this.numStack.pop();
//     var num2 = this.numStack.pop();
//     this.numStack.push(num2-num1);
//   }
// };
// Calculator.prototype.times = function() {
//   if (this.numStack.length < 2) {
//     throw("calculator is empty");
//   } else {
//     var num1 = this.numStack.pop();
//     var num2 = this.numStack.pop();
//     this.numStack.push(num2*num1);
//   }
// };
// Calculator.prototype.divide = function() {
//   if (this.numStack.length < 2) {
//     throw("calculator is empty");
//   } else {
//     var num1 = this.numStack.pop();
//     var num2 = this.numStack.pop();
//     this.numStack.push(num2/num1);
//   }
// };

// _________________________________________________________________________

// *** Version 2 of RPN Calculator ***
// function Calculator() {
//   this.numStack = [];
// }
// Calculator.prototype.popCompute = function(operation) {
//   if (this.numStack.length < 2) {
//     throw("calculator is empty");
//   } else {
//     var newval;
//     var num1 = this.numStack.pop();
//     var num2 = this.numStack.pop();
    
//     if (operation === "plus") {
//       newval = num1 + num2;
//     } else if (operation === "minus") {
//       newval = num2-num1;
//     } else if (operation === "times") {
//       newval = num2*num1;
//     } else if (operation === "divide") {
//       newval = num2/num1;
//     }
    
//     this.numStack.push(newval);
//   }
// };
// Calculator.prototype.push = function(n) {
//   this.numStack.push(n);
// };
// Calculator.prototype.plus = function() {
//   this.popCompute("plus");
// };
// Calculator.prototype.value = function() {
//   return this.numStack[this.numStack.length-1];
// };
// Calculator.prototype.minus = function() {
//   this.popCompute("minus");
// };
// Calculator.prototype.times = function() {
//   this.popCompute("times");
// };
// Calculator.prototype.divide = function() {
//   this.popCompute("divide");
// };

// _____________________________________________________________________________________

// *** Version 3 *** of RPN Calculator (functional)

// function Calculator() {
//   this.numStack = [];
// }

// (function (CP) {
//   CP.popCompute = function(operationFunc) {
//     if (this.numStack.length < 2) {
//       throw("calculator is empty");
//     } else {
//       var newval;
//       var num1 = this.numStack.pop();
//       var num2 = this.numStack.pop();

//       newval = operationFunc(num1, num2);
//       this.numStack.push(newval);
//     }
//   };

//   CP.push = function(n) {
//     this.numStack.push(n);
//   };

//   CP.value = function() {
//     return this.numStack[this.numStack.length-1];
//   };

//   CP.plus = function() {
//     this.popCompute(function(first, second) {
//       return first + second;
//     });
//   };

//   CP.minus = function() {
//     this.popCompute(function(first, second) {
//       return second - first;
//     });
//   };

//   CP.times = function() {
//     this.popCompute(function(first, second) {
//       return second * first;
//     });
//   };

//   CP.divide = function() {
//     this.popCompute(function(first, second) {
//       return second / first;
//     });
//   };
// })(Calculator.prototype);

// __________________________________________________________________________________
// Bad because it could overwrite any existing properties on the prototype
//
// Calculator.prototype = {
//   push: function(n) {
//     this.numStack.push(n);
//   },
//
//   value: function() {
//     return this.numStack[this.numStack.length-1];
//   }
// };