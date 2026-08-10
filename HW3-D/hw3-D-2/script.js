//#qLQLJSeN7i1
//  – є масив [2,17,13,6,22,31,45,66,100,-18] :
//  1.  вивести масив у зворотньому порядку.
//   наступні завдання виконати у зворотньому циклі:
//  2. перебрати його циклом while
//  3. перебрати його циклом for
//  4. перебрати циклом while та вивести  числа тільки з непарним індексом
//  5. перебрати циклом for та вивести  числа тільки з непарним індексом
//  6. перебрати циклом while та вивести  числа тільки парні  значення
//  7. перебрати циклом for та вивести  числа тільки парні  значення
//  8. замінити кожне число, кратне 3, на слово “okten”

let Array1 = [2,17,13,6,22,31,45,66,100,-18];
const newOrder = Array1.toReversed();
console.log(newOrder);
console.log('');
let i = Array1.length - 1;
while(i >= 0){
        console.log(Array1[i]);
        i--;
   }
console.log('');
Array1.reverse();
for (const item of Array1) {
    console.log(item)}
console.log('');

let m = 1 ;
while(m < Array1.length ) {
    console.log(Array1[m]);
    m += 2;
}
console.log('');

for (let k1 = 1 ; k1 < Array1.length; k1 +=2) {
    console.log(Array1[k1]);
}
console.log('');

let j =  0;
while(j < Array1.length) {
console.log(Array1[j]);
   j += 2;
}
console.log('');

 for (let k = 0; k < Array1.length ; k += 2) {
    console.log(Array1[k]);
}
console.log('');

for (let k2 = 0; k2 <= Array1.length; k2 ++) {
    if (Array1[k2] % 3 === 0) {
        Array1[k2] = 'Okten';
    }
    console.log(Array1[k2]);
}



