 let employee  = {
    firstName:'Laxman',
    lastname : "Gautam",
    department :"Development",
    manager:"JM",
    printName : function() {
        return this.
    }

};
console.log(employee);
// Speical operator. 
console.log("firstName" in employee); // in operator  will check given attribute or property exists in object.
console.log(delete employee.firstName)
console.log("firstName" in employee); // Now firstName attrivute is not exists. 

for ( let property in employee) {
    console.log(employee +":" + employee[property]);

}

// arithmetic operation.
let num1 : string = "10";
let num2 : String = "20";
let numAnyType1 : any = "10";
let numAnyType2 : any = "30";
let numType3 : number = 30;
let boolean1 : boolean = true;

var result = num1 + num2;
var resultOfAnyType = numType3+ numAnyType1 + numAnyType2;
console.log("string = \"10\" + \"string = \"20\" " +result);
console.log("numType3 = \"30\", any = \"10\" + \"any = \"20\" " +resultOfAnyType);