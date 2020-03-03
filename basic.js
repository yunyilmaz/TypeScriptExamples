var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.announce = function () {
        return "Hello, my name is " + this.name;
    };
    return Customer;
}());
var firstCustomer = new Customer("Alice");
var newMessage = firstCustomer.announce();
// change text on the page
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
