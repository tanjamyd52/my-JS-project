//#y7crMeFwHcS
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всер10едині

for (let i = 0; i < 10; i++) {
    document.write('<div>hello everybody</div>');
}
     document.write('<div><br></div>');

//#TYj7ncx
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
     document.write(`<div>hello everybody ${i}</div>`);
}