// cw1
class Bank {
    constructor(username) {
        this.username = username;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

let myAccount = new Bank("John");

myAccount.deposit(100);

console.log(myAccount.username);
console.log(myAccount.balance);


// cw2
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(this.brand + " " + this.model + " is running");
    }
}

let car1 = new Car("Toyota", "Corolla");
car1.start();
