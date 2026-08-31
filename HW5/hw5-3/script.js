//#gEFoxMMO
 // – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),<br>
 // та будує для них список (ul li) та виводить його через document.write

 let foobar=(arrayOfPrimitives)=> {
     document.write(`<ul>`);
     for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
     }
     document.write(`</ul>`);
 }
 foobar([345, 78, 90, 'allo', true]);
//
//#bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями<br>
// id,name,age , та виводить їх в документ.<br>
// Для кожного об’єкту окремий блок.

let foobar1=(Users)=> {
    for (const user of Users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
foobar1([
    {id:1,name:'kokos',age:123},
    {id:2,name:'kokos',age:123},
    {id:3,name:'kokos',age:123},
    {id:4,name:'kokos',age:123},
    {id:5,name:'kokos',age:123}
]);
//
//#pghbnSB
// – створити функцію яка повертає найменьше число з масиву

let arrayMinValue=(numbers)=> {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
        }
console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));