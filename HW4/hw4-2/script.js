//#Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function squareCilinder (radiusNum, heightNum){
    const result = Math.PI * radiusNum * heightNum;
    console.log("Площа циліндра :" + result);
    return result;
}
let radiusNum = Number (prompt("Введіть радіус циліндра :"));
let heightNum = Number (prompt("Ведіть висоту циліндра:"));

squareCilinder(radiusNum, heightNum);

//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

function  printArray (array) {
    for (const item of array) {
        console.log(item);
    }
}

//#59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить <br>
// його через document.write. Текст задати через аргумент

function foobar (text){
    document.write (`<p>${text}</p>`);
}
foobar();
foobar('hello!');