//#u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.<br>
// За допомогою if та typeof вивести тільки булеві елементи
// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. <br>
// За допомогою if та typeof вивести тільки числові елементи
// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.<br>
// За допомогою if та typeof вивести тільки рядкові елементи

let usersList = [6,8,34,'yuh','hju','lki',true,false,true,false];
 constbooleanElements = usersList.filter(user =>typeof user ==='boolean');

            console.log(constbooleanElements );
    console.log ('');

for (let user of usersList ){
if (typeof user === 'number' ){
    console.log(user);}
}
console.log('');
for (let user of usersList) {
    if (typeof user === 'string') {
        console.log(user);
    }
}
