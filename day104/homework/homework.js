// hw3
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`);
    }
}

// hw4
class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    ring() {
        console.log(`The ${this.brand} ${this.model} is ringing!`);
    }
}

// hw5
class Movie {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }

    play() {
        console.log(`Now playing: ${this.title} (${this.year})`);
    }
}

// hw6
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    meow() {
        console.log(`${this.name} the ${this.color} cat says Meow!`);
    } 
}

// hw7
class BankCard {
    constructor(cardNumber, balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
}
