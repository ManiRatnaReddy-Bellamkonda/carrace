//Author: Mani
//ID: C0887487

//constructor is called when the object is created
class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas
    }
//Honk method that will print “Tuut tuut” when called for each instance and displays the brand, model, year, color and price of the car.
    honk() {
        console.log('Tuut tuut');
        console.log('Brand is: ' + this.brand);
        console.log('Model is: ' + this.model);
        console.log('Year made: ' + this.year);
        console.log('Color: ' + this.color);
        console.log('Price: ' + this.price);
    }
// gas calculation for each lap
    race(lap){
        let yearDiff = new Date().getFullYear() - this.year;
        this.gas = this.gas - 5 - yearDiff;
        if (this.gas <= 0) {
            console.log(this.brand + ' is out of the race due to lack of gas.');
        }
        else {
            console.log(this.brand + ' has ' + this.gas + 'L gas Left after lap ' + lap);
        }
    }
}

//Object creation 

const car_A = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const car_B = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const car_C = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const car_D = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const car_E = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const car_F= new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);


//calling Honk method  for each object
car_A.honk();
console.log('\n');
car_B.honk();
console.log('\n');
car_C.honk();
console.log('\n');
car_D.honk();
console.log('\n');
car_E.honk();
console.log('\n');
car_F.honk();
console.log('\n');

//Race between all the cars for 7 turns
for (let i = 0; i < 7; i++) {
    console.log('Lap ' + (i + 1));
    car_A.race((i+1));
    car_B.race((i+1));
    car_C.race((i+1));
    car_D.race((i+1));
    car_E.race((i+1));
    car_F.race((i+1));
    console.log('\n');
}
