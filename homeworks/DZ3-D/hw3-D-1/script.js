
//#qLQLJSeN7i
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”

let  Array1 = [2,17,13,6,22,31,45,66,100,-18];
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

for (let k1 = 0; k1 <Array1.length; k1 += 2) {
    console.log(Array1[k1]);
}
console.log('');

for (let k2 = 0; k2 <= Array1.length; k2 ++) {
    if (Array1[k2] % 3 === 0) {
        Array1[k2] = 'Okten';
    }
    console.log(Array1[k2]);
}
console.log('');









