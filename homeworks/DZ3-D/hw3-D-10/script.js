//– Дано 2 масиви з рівною кількістю об’єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: ‘vasya’, age: 31, status: false},
//     {id: 2, name: ‘petya’, age: 30, status: true},
//     {id: 3, name: ‘kolya’, age: 29, status: true},
//     {id: 4, name: ‘olya’, age: 28, status: false}
// ];
 // let citiesWithId = [
// {user_id: 3, country: ‘USA’, city: ‘Portland’},
//     {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
//     {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
//     {user_id: 4, country: ‘USA’, city: ‘Miami’}
// ];
//З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: ‘vasya’,
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
// country: ‘Ukraine’,
//             city: ‘Ternopil’
//         }
//     },
//     // TO BE CONTINUED …..
// ]

let usersWithId = [
     {id: 1, name: 'vasya', age: 31, status: false,address:{} },
     {id: 2, name: 'petya', age: 30, status: true,address:{} },
     {id: 3, name: 'kolya', age: 29, status: true,address:{} },
     {id: 4, name: 'olya', age: 28, status: false, address:{}}
 ];
console.log(usersWithId);
let citiesWithId = [
     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
     {user_id: 3, country: 'USA', city: 'Portland'},
     {user_id: 4, country: 'USA', city: 'Miami'}
 ];

console.log(citiesWithId);
 usersWithCities = usersWithId.map(user => {
     let cityInfo = citiesWithId.find(city => city.user_id === user.id);
     return {
      ...user,
         address: cityInfo ? {country: cityInfo.country, city: cityInfo.city} : {}
     };
 });
    console.log(usersWithCities);





//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//– Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
// Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let ArrayNum1 = [5,7,34,78,23,100,77,88,3,65];
for (let i=0; i < ArrayNum1.length; i++) {
    if (ArrayNum1[i] % 2 === 0) {
        console.log(ArrayNum1[i]);
    }
}
console.log ('');
let ArrayNum2 =[];
for (let i= 0; i < ArrayNum1.length; i++) {
    ArrayNum2[i] = ArrayNum1[i] ;
}
console.log(ArrayNum2);
console.log ('');

let ArrayString = [ 'a','b','c'];
let word = '';
for (let i=0; i < ArrayString.length; i++) {
    word += ArrayString[i];
}
console.log(word);
let word1 = '';
let i = 0;
while  (i <= ArrayString.length-1){
    word1 += ArrayString[i];
    i = i + 1;
}
console.log(word1);
console.log ('');
let word2 = '';
for ( const chat of ArrayString) {
    word2 += chat;
}
    console.log(word2);










