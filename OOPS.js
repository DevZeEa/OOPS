// encapsulation : restrict the direct access to the object data
class Bank{
    #balance = 0;
    deposit(amount){
        this.#balance+=amount;
    }
    getBalance(){
return `This is your current balance ${this.#balance}`;
     } 
}
// const bank = new Bank()
// console.log(bank.getBalance());

// abstraction : hides the implementation details 

class Car{
    start(){
        return  `starting`
    }
    cooking(){
        return `cooking`
    }
    pressButton(){
    const st =  this.start();
    const ck = this.cooking();
    return st + ' ' + ck
    }
}
const car = new Car()
console.log(car.pressButton());

// polymorphism: the ability tp represent single entity in many forms . it would be data,methods etc

class Power{
    solar(){
        return 'I am solar power';
    }
}
class Machine extends Power{
    solar(){
        return `I use solar Power!`
    }
}
const p = new Power();
console.log(p.solar());
const el = new Machine();
console.log(el.solar());

// static method is a method which is called by class itself nobody else call it.

class Bike{
    static btnStart(power,petrol){
        return power + petrol;
    }
}
// const Bike_1  = new Bike()
// console.log(Bike_1.btnStart(4,5));

// there's usecase to call directly on class and donot want to give access to the instance of the class
console.log(Bike.btnStart(9,55));

