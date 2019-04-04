class Person {
    firstName:string;
    lastName:string;
    id:number;
    
    constructor(firstName:string,lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName +' '+this.lastName;
    }
    greet() {
        return "Hi " + this.getFullName();
    }
}

class Programmer extends Person {
    greet() {
        return "Hello world from " + super.getFullName();
    }

    greetLikeNorMalPeople() {
        super.greet();
    }
}

let aPerson = new Person("Laxman","Gautam");

aPerson.id = 1;
console.log(aPerson.getFullName());
let aProgrammer = new Programmer("Laxman", " G" );


console.log(aProgrammer.greet());
console.log(aProgrammer.greetLikeNorMalPeople());
