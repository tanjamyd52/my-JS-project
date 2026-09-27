//#XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//побудова конструктора.this - це об'єкт конструктора.
function User(id, name, surname, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}
//const user = new User();
const user = new User(1,'kokos','asdqwr','+964657983');
console.log(user);
let users = [
   new User(8,'kokos','asdqwe','+964657983'),
   new User(2,'kokos','asdqwe','+964657983'),
   new User(4,'kokos','asdqwe','+964657983'),
   new User(10,'kokos','asdqwe','+964657983'),
   new User(5,'kokos','asdqwe','+964657983'),
   new User(6,'kokos','asdqwe','+964657983'),
   new User(1,'kokos','asdqwe','+964657983'),
   new User(9,'kokos','asdqwe','+964657983'),
   new User(3,'kokos','asdqwe','+964657983'),
   new User(7,'kokos','asdqwe','+964657983')
];
console.log(users);

//#2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати,<br>
// залишивши тільки об’єкти з парними id (filter)
//let users = [];
//function filterFunction(user){
// if (user.id % 2 === 0){
//  return true;
//} else {
//  return false;
//}
//}
function filterFunction(user) {
      return user.id % 2 === 0;
}
const filterUsers = users.filter(filterFunction);
console.log(filterUsers);

//const filterFunction = (user) => user.id % 2 === 0;
// const filterUsers = users.filter((user) => user.id % 2 === 0);
//console.log(filterUsers);
//
//#pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та <br>
// відсортувати його по id. по зростанню (sort)
//
function  sorter(user1, user2){
     return user1.id - user2.id;
}
 console.log(users.sort(sorter));
console.log(users.sort( (user1, user2) => user1.id - user2.id)) ;
