"use strict";
class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "Hello, my name is " + this.name;
    }
}
let firstCustomer = new Customer("Alice");
let newMessage = firstCustomer.announce();
// change text on the page
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
