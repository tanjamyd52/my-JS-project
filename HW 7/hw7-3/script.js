//#vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель,<br>
// виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає <br>
//     його в поточний об’єкт car
//
function Car(mode, producer, year, maxSpeed, engineVolume) {
this.mode = mode;
this.producer = producer;
this.year = year;
this.maxSpeed = maxSpeed;
this.engineVolume = engineVolume;
this.drive = function () {
   console.log(`їдемо зі швідкістю ${this.maxSpeed} на годину`)
};
this.info = function () {
  for (const key in this){
      console.log(key, this[key]);
  }
};
this.increaseMaxSpeed = function (SpeedToAdd) {
    if (SpeedToAdd > 0)
this.maxSpeed = this.maxSpeed + SpeedToAdd;
};
this.changeYear = function (Year){
     if (Year > 1815)
    this.year = Year;
};
this.addDriver = function (driver){
    if (driver) this.driver = driver
};
}

const car = new Car('asd', 'qwe', 1234,122,4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
console.log(car);
car.changeYear(2000);
console.log(car);
car.addDriver({});
console.log(car);
//
//#5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, <br>
// рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і <br>
//     додає його в поточний об’єкт car
//

//
class Car1 {
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швідкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(SpeedToAdd) {
        if (SpeedToAdd > 0)
            this.maxSpeed = this.maxSpeed + SpeedToAdd;
    };

    changeYear = function (Year) {
        if (Year > 1815)
            this.year = Year;
    };
    addDriver = function (driver) {
        if (driver) this.driver = driver
    }
}
const car1 = new Car('asd', 'qwe', 1234,122,4);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
console.log(car1);
car1.changeYear(2000);
console.log(car1);
car1.addDriver({});
console.log(car1);