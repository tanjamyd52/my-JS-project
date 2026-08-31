//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let aNum = Number(prompt("введіть довжину:" ));
let bNum = Number(prompt("Введіть ширину:"));

let square = (aNum, bNum) => aNum + bNum;
    console.log("Площа прямокутника :" + square(aNum,bNum));
//
let radiusNum = Number(prompt(" Введіть розмір радіуса"));
let roundSquare = radiusNum => Math.PI * radiusNum * radiusNum;
    console.log("Площа кола : " + roundSquare(radiusNum));
    //
let radiusNum1 = Number (prompt("Введіть радіус циліндра :"));
let heightNum = Number (prompt("Ведіть висоту циліндра:"));
let squareCilinder =(radiusNum1, heightNum) => Math.PI * radiusNum1 * heightNum;
console.log("Площа циліндра :" + squareCilinder(radiusNum1, heightNum));
//
let foobar = (array) => {for (const item of array){console.log(item);}};


















