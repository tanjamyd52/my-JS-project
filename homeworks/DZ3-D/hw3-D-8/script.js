//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемент


let usersList  =[];
let currentNumber = 1;
    while ( usersList.length < 50) {
        if (currentNumber % 2 === 0) {
            usersList.push(currentNumber);
        }
        currentNumber++;
    }
    console.log (usersList);
    console.log('');

let usersList1  =[];
let currentNumber1 = 1;
while ( usersList1.length < 50) {
    if (currentNumber1 % 2 !== 0) {
        usersList1.push(currentNumber1);
    }
    currentNumber1++;
}
console.log (usersList1);
console.log('');

    const usersList2 = [];
    for (let i = 0; i < 20; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        usersList2.push(randomNum);
    }
    console.log(usersList2);
    console.log('');

    let randomArray = [];
    for (let i = 0; i < 20; i++) {
    const randomNum = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    randomArray.push(randomNum);
}
console.log(randomArray);
    console.log('');

let randomArray1 = [];
for (let i = 0; i < 20; i++) {
    const randomNum1 = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    randomArray1.push(randomNum1);
}
console.log(randomArray1);
for ( let i = 2; i < randomArray1.length ; i+= 3) {
    console.log (`Індекс [${i}] : ${randomArray1[i]}`);
}
console.log('');







