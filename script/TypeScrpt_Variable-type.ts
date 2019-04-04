console.log("Js is load..");
var num;
num = 3; // num variable is implicit type to number so assigning other type will give error in type script. 
//num ="";               // error Type '""' is not assignable to type 'number'
document.write(typeof(num)+" num : "+num+"<br>");

var bool:boolean;
bool = true;
// bool ="";              // error  Type '""' is not assignable to type 'boolean'

let varBoolean:boolean; 
document.write(typeof (bool) + " bool : " + bool + "<br>");
document.write(typeof (varBoolean) + " varBoolean : " + varBoolean + "<br>");


var undef : undefined; // we can assign only undefined on this variable. 
//undef ="";             // error  Type '""' is not assignable to type 'undefined'

 var stringvar :String;
 stringvar = "correct value"; 
 // stringvar = true; 

 var myArray : number[];
 myArray = [];
 myArray = [1,3,4];
 document.write("Before adding element in array " + myArray.toString()+"<br>");
 //myArray = [1,3,""]; // Error  Type 'string' is not assignable to type 'number'.
 myArray.push(2);
 document.write("After  adding element in array " + myArray.toString()+"<br>");
 myArray.pop();
 document.write("After  pop (remove)  element in array " + myArray.toString()+"<br>");

// myArray.push("cant push array"); // Argument of type '"cant push array"' is not assignable to parameter of type 'number'

 num  = myArray.pop();
 //bool = myArray.pop();           // Type 'number' is not assignable to type 'boolean'
 
 // working with Tuple : 

 var myTuple :[number, boolean] =[1,true]
 myTuple.push(2,false);
 myTuple.push(3,false);
 document.write("[" + myTuple.toString()+ "] pop LIFO : "+ myTuple.pop().toString()+"<br>");

 var tuuple1  = myTuple.pop();
 document.write(" 3rd tuple element is "+tuuple1+" <br> after removed [" + myTuple.toString()+ "] <br>");
 document.write (myTuple.pop().toString());

 var myNum = undefined;
 document.write(typeof(myNum));
 document.write(typeof (myNum)+"<br>");
 myNum = null;
 document.write(typeof(myNum));
 document.write(typeof (myNum)+"<br>");
