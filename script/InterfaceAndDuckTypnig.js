var _this = this;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getFullName = function () {
        return this.firsName + " " + this.lastName;
    };
    return Employee;
}());
var manager = new Employee();
var paymentAddress = new PaymentAddress();
var duckTypeOfPerson = {
    firsName: " Duck type",
    lastName: "-",
    age: 1,
    address: paymentAddress,
    getFullName: function () { return _this.firsName + " " + _this.lastName; }
};
// duck typing. 
// It the internal structure is matching then exchaing of different type is allowed, it like duck typing. even 
// here duckTypeOfPerson type is not Person type but still it allowed to assign.
manager = duckTypeOfPerson;
duckTypeOfPerson = manager;
// manager.dob; // dob wont be accessaible with Person type.
