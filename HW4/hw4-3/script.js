//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через <br>
// document.write. Текст li задати через аргумент всім однаковий

function foobar(text) {
    document.write(`
                    <ul>
                         <li> ${text}</li>
                         <li> ${text}</li>
                         <li> ${text}</li>
                     </ul>    
                         `)
}
foobar('Hello world');

//#0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li<br>
// задати через аргумент всім однаковий. Кількість li визначається другим аргументом, <br>
// який є числовим (тут використовувати цикл) та виводить його через document.write

function foobar(text,counter) {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li> ${text}</li>`);
    }
    document.write('</ul>');
}
let text = prompt("Введіть Ваш текст :");
let counter = Number(prompt("Введіть кількість li :"));
foobar ( text,counter );

//#gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),<br>
// та будує для них список (ul li) та виводить його через document.write

function foobar(arrayOfPrimitives) {
    document.write(`<ul>)`);

    for (const item of arrayOfPrimitives) {
       document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar([345, 78, 90, 'allo', true]);

//