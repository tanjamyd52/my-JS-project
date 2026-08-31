//#59g0IsA
//  – створити функцію, яка створює параграф з текстом та виводить <br>
//  його через document.write. Текст задати через аргумент

 let foobar  = (text) =>{
     document.write (`<p>${text}</p>`);
 }
 foobar();
 foobar('hello!');
 //
//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через <br>
// document.write. Текст li задати через аргумент всім однаковий

let foobar1 = (text) => {
    document.write(`
                    <ul>
                         <li> ${text}</li>
                         <li> ${text}</li>
                         <li> ${text}</li>
                     </ul>    
                         `)
}
foobar1('Hello world');
//
//#0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li<br>
// задати через аргумент всім однаковий. Кількість li визначається другим аргументом, <br>
// який є числовим (тут використовувати цикл) та виводить його через document.write

let text = prompt("Введіть Ваш текст :");
let counter = Number(prompt("Введіть кількість li :"));
let foobar2 = (text,counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li> ${text}</li>`)
    }
    document.write(`</ul>`);
}
foobar2(text,counter);



