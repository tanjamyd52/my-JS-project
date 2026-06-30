//#awLXL6TBzg
//// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити<br.
// кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль<br>
// “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let course = (coursesAndDurationArray[0].monthDuration);
let aaa = (coursesAndDurationArray[1].monthDuration);
let bbb = (coursesAndDurationArray[2].monthDuration);
let ccc = (coursesAndDurationArray[3].monthDuration);
let rrr = (coursesAndDurationArray[4].monthDuration);
let kkk = (coursesAndDurationArray[5].monthDuration);

if (course > 5) {
    console.log('"Супер"');
}
else {
    console.log('OK');
}
if (aaa  > 5) {
    console.log('"Супер"');
}
else {
    console.log('OK');
}
if (bbb  > 5) {
    console.log('"Супер"');
  }
else {
    console.log('OK');
}
if (ccc  > 5) {
  console.log('"Супер"');
}
else {
    console.log('OK');
}
if (rrr > 5) {
    console.log('"Супер"');
}
else {
    console.log('OK');
}
if (kkk > 5) {
    console.log('"Супер"');
    }
else {
    console.log('OK');
}


