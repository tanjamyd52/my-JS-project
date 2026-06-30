//#iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно)
//  Напишить код,який
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення<br>
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// 0
// ''
// false
// null
// undefined
// NaN

let x = 0;
if (x === 0 || x === null || x === undefined || x === NaN || x === '') {
      x = 'default';
}
let y = 0;
if (!y) {
    y = 'default';
}
