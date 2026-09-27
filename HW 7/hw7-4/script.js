//#zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. <br>
// Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, <br>
// туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та <br>
// відповідного колбеку
//
class Cinderella {
    constructor (name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cinderellas = [
    new Cinderella( 'asd1', 1231, 34),
    new Cinderella( 'asd2', 1232, 35),
    new Cinderella( 'asd3', 1233, 36),
    new Cinderella( 'asd4', 1234, 37),
    new Cinderella( 'asd5', 1235, 38),
    new Cinderella( 'asd6', 1236, 39),
    ];
const prince = new Prince ('qwe', 12345, 36);
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
}
const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;
console.log(cinderellas);
console.log(cinderellaMain);






