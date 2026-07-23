//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function square(aNum, bNum) {
    const result = aNum * bNum;
    console.log("Площа прямокутника :" + result);
    return result;
}
let aNum = Number(prompt("введіть довжину:" ));
let bNum = Number(prompt("Введіть ширину:"));


square( aNum,bNum);
//#ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function roundSquare(radiusNum) {
    const result = Math.PI * radiusNum * radiusNum;
    console.log("Площа кола : " + result);
    return result;
    }
    let radiusNum = Number(prompt(" Введіть розмір радіуса"));

roundSquare(radiusNum);