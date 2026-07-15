//#WpkK0ZH1
// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

let ListOfItems = [23, 34, 45, 56, 67, "css", "html", "javascript", "mysql", "mongodb", true, false];
console.log(ListOfItems);

// #4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до <br>
// конкретного індексу. Вивести в консоль#WpkK0ZH1

const Array = [ 1, 2, 3, 5, 6, 7];
console.log(Array[5]);
console.log(Array[0]);
console.log('');

//#qLQLJSeN7i
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8.  вивести масив у зворотньому порядку.
//   наступні завдання виконати у зворотньому циклі із тим же масивом.
//  2. перебрати його циклом while
//  3. перебрати його циклом for
//  4. перебрати циклом while та вивести  числа тільки з непарним індексом
//  5. перебрати циклом for та вивести  числа тільки з непарним індексом
//  6. перебрати циклом while та вивести  числа тільки парні  значення
//  7. перебрати циклом for та вивести  числа тільки парні  значення
//  8. замінити кожне число, кратне 3, на слово “okten”


let Array1 = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while(i<Array1.length){
    let user = Array1[i];
    console.log(user);
    i++;
}
console.log('');

for (let user of Array1) {
    console.log(user);
}
console.log('');

let j = 1;
while(j<Array1.length){
    let user = Array1[j];
    console.log(user);
    j += 2;
}
console.log('');

for (let k = 1; k<Array1.length; k += 2) {
    console.log(Array1[k]);
}
console.log('');


let j1 = 0;
while(j1<Array1.length){
    let user = Array1[j1];
    console.log(user);
    j1 += 2;
}
console.log('');

for (let k = 0; k<Array1.length; k += 2) {
    console.log(Array1[k]);
}
console.log('');

for (let k = 0; k<= Array1.length; k ++) {
    if (Array1[k] % 3 === 0) {
        Array1[k] = 'Okten';
    }
    console.log(Array1[k]);
}
console.log('');

for (let m =  Array1.length-1; m >= 0; m--){
    console.log(Array1[m]);
}
console.log('');

let i1 = 9;
while(i1<Array1.length ){
    let user = Array1[i1];
    console.log(user);
    i1--;
}
console.log('');

for (let k = 9; k<Array1.length; k--) {
    console.log(Array1[k])}
console.log('');

let j2 = 9;
while(j2<Array1.length){
    let user = Array1[j2];
    console.log(user);
    j2 -= 2;
}
console.log('');

for (let k = 9; k<Array1.length; k -= 2) {
    console.log(Array1[k]);
}
console.log('');








