var employee = {
    firstName: 'Laxman',
    lastname: "Gautam",
    department: "Development",
    manager: "JM"
};
// Speical operator. 
console.log("firstName" in employee); // in operator  will check given attribute or property exists in object.
console.log(delete employee.firstName);
console.log("firstName" in employee); // Now firstName attrivute is not exists. 
// arithmetic operation.
var num1 = "10";
var num2 = "20";
var numAnyType1 = "10";
var numAnyType2 = "30";
var numType3 = 30;
var boolean1 = true;
var result = num1 + num2;
var resultOfAnyType = numType3 + numAnyType1 + numAnyType2;
console.log("string = \"10\" + \"string = \"20\" " + result);
console.log("numType3 = \"30\", any = \"10\" + \"any = \"20\" " + resultOfAnyType);
