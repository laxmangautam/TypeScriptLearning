interface iEmployee {
    firstName : String,
    lastName : String,
    department:String,
    salary:number,
    manager?:iEmployee,
    getName () :string,
}

let employee :iEmployee = {
    firstName:'Himal',
    lastName : "Thapa",
    department :"Development",
    manager:null,
    salary: 30000,
    getName:function(){
        return this.firstName +" "+this.lastname;
    }
   
};
console.log(Object.toString());
// Speical operator. 
console.log("firstName" in employee); // in operator  will check given attribute or property exists in object.
console.log(delete employee.lastName)
console.log("firstName" in employee); // Now firstName attrivute is not exists. 
employee.firstName =employee.getName();
console.log(Object.toString());



for ( let property in employee) {
   
    console.log(property +":->" + employee[property]);

}

for ( let property of Object.keys(employee)) {
    console.log(property +" : >> " + employee[property]);

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