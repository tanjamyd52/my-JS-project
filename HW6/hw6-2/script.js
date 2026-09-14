//#ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL
//
let s = 'HELLO WORLD';
s.toLowerCase();
console.log(s);
const s1 = s.toLowerCase();
console.log(s1);
//s = s1;
//console.log(s);
let ss = 'LOREM IPSUM';
const ss1 = ss.toLowerCase();
console.log(ss1);
let ss2 = 'JAVASCRIPT IS COOL';
const ss3 = ss2.toLowerCase();
console.log(ss3);
console.log(ss2);
//
//#0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її<br>
// від зайвих пробілів.
//
let str = ' dirty string  ';
const r = str.trim();
console.log(r);
console.log(str.length);
console.log(r.length);