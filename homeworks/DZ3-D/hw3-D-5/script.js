//#0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами)<br>
// через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write


let  usersList = [];
 usersList[0] = 78;
 usersList[1] = -9;
 usersList[2] = 'hjk';
 usersList[3] = 'tya';
 usersList[4] = true;
 usersList [5] = false;
 usersList[6] = 'loy';
 usersList[7] = -34;
 usersList[8] = 'drt';
 usersList[9] = 'uio';
let i = 0;
while (i  < 10  ){
    let user = usersList[i];
    console.log(user);
    i++;
}
console.log ('');

for ( let i = 0; i < 10; i++) {
    console.log(i);
}
for ( let i = 0; i < 10; i++) {
document.write(' індекс :' + i + '<br>');
}




