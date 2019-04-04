var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Person.prototype.greet = function () {
        return "Hi " + this.getFullName();
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        return "Hello world from " + _super.prototype.getFullName.call(this);
    };
    Programmer.prototype.greetLikeNorMalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aPerson = new Person("Laxman", "Gautam");
aPerson.id = 1;
console.log(aPerson.getFullName());
var aProgrammer = new Programmer("Laxman", " G");
console.log(aProgrammer.greet());
console.log(aProgrammer.greetLikeNorMalPeople());
