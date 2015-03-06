function countWords(string) {
  return string.split(" ").length;
}

function makeAdder(num1) {
  return function(num2) {
    return num1+num2;
  };
}

function forEach(arr, funcRunOnEachElement) {
  for(var i = 0, len=arr.length; i<len; i++) {
    funcRunOnEachElement(arr[i]);
  }
}

function map(arr, funcRunOnEachElement) {
  var newMapArray = [];
  forEach(arr, function(el) {
    var modifiedElement = funcRunOnEachElement(el);
    newMapArray.push(modifiedElement);
  });
  return newMapArray;
}

function filter(arr, filterCheckerFunc) {
  var newArray = [];
  arr.forEach(function(el) {
    if(filterCheckerFunc(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}

var contains = function (arrOrObject, searchParam) {
  for (var key in arrOrObject) {
    if (arrOrObject.hasOwnProperty(key)) {
      if (arrOrObject[key] === searchParam) {
        return true;
      }
    }
  }
  return false;
};

var reduce = function(array, startVal, interatingFunc) {
  var currentVal = startVal;
  forEach(array, function(el) {
    currentVal = interatingFunc(currentVal, el);
  });
  return currentVal;
};

var countWordsInReduce = function(currentVal, nextEl) {
  return currentVal + countWords(nextEl);
};

var sum = function(arr) {
  var addIterator = function(currentVal, nextEl) {
    return currentVal + nextEl;
  };
  
  return reduce(arr, 0, addIterator);
};

// "for loop version"
// var every = function(arr, elementChecker) {
//   for(var i = 0, len = arr.length; i<len; i++) {
//     if (!elementChecker(arr[i])) {
//       return false
//     }
//   }
//   return true;
// };

var every = function(arr, elementChecker) {
  var reduceIterator = function(currentVal, nextEl) {
    return (elementChecker(nextEl) && currentVal);
  };
  return reduce(arr, true, reduceIterator);
};

var any = function(arr, elementChecker) {
  if (typeof elementChecker === "undefined") {
    elementChecker = function (i) {
      return i;
    };
  }
  
  var reduceIterator = function(currentVal, nextEl) {
    return (elementChecker(nextEl) || currentVal);
  };
  
  return reduce(arr, false, reduceIterator);
};

var once = function(inputFunc) {
  var runAlready = false;
  
  return function() {
    if (!runAlready) {
      inputFunc();
      runAlready = true;
    }
  }
};















