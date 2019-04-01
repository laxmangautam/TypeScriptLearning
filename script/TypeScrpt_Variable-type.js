var num;
num = 3;
num = ""; // error Type '""' is not assignable to type 'number'
var bool;
bool = true;
bool = ""; // error  Type '""' is not assignable to type 'boolean'
var undef; // we can assign only undefined on this variable. 
undef = ""; // error  Type '""' is not assignable to type 'undefined'
var stringvar;
stringvar = "correct value";
stringvar = true;
var myArray;
myArray = [];
myArray = [1, 3, 4];
myArray = [1, 3, ""]; // Error  Type 'string' is not assignable to type 'number'.
myArray.push(2);
myArray.push("cant push array"); // Argument of type '"cant push array"' is not assignable to parameter of type 'number'
num = myArray.pop();
bool = myArray.pop(); // Type 'number' is not assignable to type 'boolean'
// working with Tuple : 
var myTuple = [1, true];
myTuple.push(1, false);
myTuple.push(2, false);
var tuuple1 = myTuple.pop();
console.log(myTuple.pop());
var myNum = undefined;
console.log(typeof (myNum));
myNum = null;
console.log(typeof (myNum));
