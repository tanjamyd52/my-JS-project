//#yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

//#GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

//#Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let Array = [4,23,6,78,9,10,34,87,54,76];
let i = 0;
while (i < Array.length) {
    console.log(Array[i]);
    i = i + 1;
}
console.log('');
 for (let user of Array){
     console.log(user);
 }
 console.log('');
 let Stroka = ['dfg','kil','oiu','lkj','rty','lki','ret','ser','mnb','mju'];
let i1 = 0;
 while (i1 < Stroka.length) {
     console.log(Stroka[i1]);
     i1++;
 }
 console.log('');
 for (let user of Stroka) {
     console.log(user);
 }
 console.log('');
 let usersList = [true,false,false,false,false,1,2,3,4,5,];
 let j = 0;
 while (j < usersList.length) {
     console.log(usersList[j]);
     j++;
 }
 console.log('');
 for (let user of usersList) {
     console.log(user);
      }