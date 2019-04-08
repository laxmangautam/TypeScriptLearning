interface Person {
    firsName:string;
    lastName:string;
    age:number;
    dob:string;
    address:PaymentAddress;
    getFullName():string;

}
let paymentAddress : PaymentAddress  = new PaymentAddress();
class Employee implements Person {
    firsName: string;    lastName: string;
    age: number;
    address: PaymentAddress;
    dob:string;
    salary ? : number;
    getFullName(): string {
        return this.firsName +" "+ this.lastName;
    }
   
}

let manager : Person  = new Employee();



let duckTypeOfPerson = {
    firsName:" Duck type",
    lastName:"-",
    age:1,
    address:paymentAddress,
    dob:"21-06-1987",
    getFullName: () => this.firsName + " " + this.lastName

};
// duck typing. 
// It the internal structure is matching then exchaing of different type is allowed, it like duck typing. even 
// here duckTypeOfPerson type is not Person type but still it allowed to assign.
manager = duckTypeOfPerson;
//manager.salary // Property 'salary' does not exist on type 'Person'.

duckTypeOfPerson = manager;
 manager.dob; 