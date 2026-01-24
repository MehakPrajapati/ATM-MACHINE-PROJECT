class ATM {
    constructor() {
        this.balance = 0;
        this.pin = null; // pehle PIN nahi hota
    }

    createPin(newPin) {
        if (newPin.length !== 4) {
            this.show("PIN must be exactly 4 digits");
            return;
        }
        this.pin = newPin;
        this.show("PIN created successfully. Please login.");
        showEnterPin();
    }

    checkPin(enteredPin) {
        if (this.pin === null) {
            this.show("Please create PIN first");
            return;
        }

        if (enteredPin === this.pin) {
            document.getElementById("menu").classList.remove("hidden");
            this.show("PIN Verified");
        } else {
            this.show("Invalid PIN");
        }
    }

    checkBalance() {
        this.show("Balance = ₹" + this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            this.show("Insufficient Balance");
        } else {
            this.balance -= amount;
            this.show("Money Withdrawn Successfully");
        }
    }

    deposit(amount) {
        this.balance += amount;
        this.show("Money Deposited Successfully");
    }

    exit() {
        document.getElementById("menu").classList.add("hidden");
        this.show("Thank you for using ATM");
    }

    show(msg) {
        document.getElementById("output").innerText = msg;
    }
}

const atm = new ATM();

/* UI FUNCTIONS */

function submitPin() {
    let pin = document.getElementById("pin").value;
    atm.checkPin(pin);
}

function showCreatePin() {
    document.getElementById("pinSection").classList.add("hidden");
    document.getElementById("createPinSection").classList.remove("hidden");
}

function showEnterPin() {
    document.getElementById("createPinSection").classList.add("hidden");
    document.getElementById("pinSection").classList.remove("hidden");
}

function createPin() {
    let newPin = document.getElementById("newPin").value;
    atm.createPin(newPin);
}

function checkBalance() {
    atm.checkBalance();
}

function withdrawMoney() {
    let amount = Number(prompt("Enter amount to withdraw"));
    atm.withdraw(amount);
}

function depositMoney() {
    let amount = Number(prompt("Enter amount to deposit"));
    atm.deposit(amount);
}

function exitATM() {
    atm.exit();
}