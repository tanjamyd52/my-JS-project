//3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// //  4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент <br>
// //  є парним, та записати їх в новий масив
// //  5. Вивести кожен елемент масиву, сусід справа якого є парним
// //   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// //  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. <br>
// //  Обрахувати середній чек.
// //7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// //8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, <br>
// // якщо елемент є числом, додати його в інший масив.

let randomArray1 = [];
let randomArray2 = [];
for (let i = 0; i < 20; i++) {
    const randomNum1 = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    randomArray1.push(randomNum1);
}
console.log(randomArray1);
for ( let i = 2; i < randomArray1.length ; i+= 3) {
    if (randomArray1[i] % 2 === 0) {
    console.log (`Індекс [${i}] : ${randomArray1[i]}`);
   randomArray2[i] = randomArray1[i];
   console.log ( randomArray2[i] );
}}
console.log('');

let randomArray3 = [];
for (let i = 0; i < 20; i++) {
    const randomNum2 = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    randomArray3.push(randomNum2);
}
console.log(randomArray3);
for ( let i = 0; i < 20 ; i++) {
 if (randomArray3[i+1] % 2 === 0) {
    console.log(randomArray3[i]);
 }
}
console.log('');
let ArrayChecks  = [100,250, 50, 168, 120, 345, 188];
let sum = 0;
for( let i= 0;i<ArrayChecks.length;i++) {
    sum += ArrayChecks[i];
}
const average = sum / ArrayChecks.length;
    console.log(average);
    console.log('');

let randomArray4 = [];
let randomArray5 = [];
for (let i = 0; i < 30; i++) {
    const randomNum3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    randomArray4.push(randomNum3);
    randomArray5[i] = randomArray4[i] * 5;
}
console.log(randomArray4);
console.log(randomArray5);
console.log('');
let Array6 = [];

let ListOfItems = [23, 34, 45, 56, 67, "css", "html", "javascript", "mysql", "mongodb", true, false];
for (let i = 0; i < ListOfItems.length; i++) {
     if (typeof ListOfItems[i] === 'number') {
Array6[i] = (ListOfItems[i]);
    }
}
console.log(ListOfItems);
console.log(Array6);







