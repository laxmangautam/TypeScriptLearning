var employee = {
    firstName: 'Himal',
    lastName: "Thapa",
    department: "Development",
    manager: null,
    salary: 30000,
    getName: function () {
        return this.firstName + " " + this.lastname;
    }
};
console.log(Object.toString());
// Speical operator. 
console.log("firstName" in employee); // in operator  will check given attribute or property exists in object.
console.log(delete employee.lastName);
console.log("firstName" in employee); // Now firstName attrivute is not exists. 
employee.firstName = employee.getName();
console.log(Object.toString());
for (var property in employee) {
    console.log(property + ":->" + employee[property]);
}
for (var _i = 0, _a = Object.keys(employee); _i < _a.length; _i++) {
    var property = _a[_i];
    console.log(property + " : >> " + employee[property]);
}
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
