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
for (let m =  Array1.length-1; m >= 0; m--){
    console.log(Array1[m]);
}
console.log('');

let i = 9;
while(i<Array1.length ){
    let user = Array1[i];
    console.log(user);
    i--;
}
console.log('');

for (let k = 9; k<Array1.length; k--) {
    console.log(Array1[k])}
console.log('');

let j = 9;
while(j<Array1.length){
    let user = Array1[j];
   console.log(user);
   j -= 2;
}
console.log('');

for (let k = 9; k<Array1.length; k -= 2) {
    console.log(Array1[k]);
}
console.log('');

