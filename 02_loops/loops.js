function repeat(str, times) {
  // method 1
  // var returnstring = "";
  // for(var i = 0; i < times; i++) {
  //   returnstring += str;
  // }
  // return returnstring;

  // method 2
  var retarray = [];
  for(var i = 0; i < times; i++) {
    retarray.push(str);
  }
  return retarray.join("");
}

function join(arr, delim) {
  var retstring = "";
  
  for(var i = 0, len = arr.length; i < len; i++) {
    if (delim && i>0) {
      retstring += delim;
    }
    retstring += arr[i];
  }
  
  return retstring;
}

function sum(arr) {
  var sum = 0, i = arr.length;
  
  while (i--) {
    sum += arr[i];
  }
  
  return sum;
}


function paramify(obj) {
  var params = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.push(key + "=" + obj[key]);
    }
  }
  params.sort();
  return join(params, "&");
}

// function factorial(n) {
//   var product = 1;
//   for(var i=1; i<=n; i++) {
//     product *= i;
//   }
//   return product;
// }

function factorial(n) {
  if (n<=1) {
    return 1;
  }
  return n * factorial(n-1);
}

function concat_string() {

  return Array.prototype.slice.call(arguments).join('');
  // or
  // return join(arguments, "");
}
