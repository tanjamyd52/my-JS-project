//#uzkt71dp
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while(i < 20) {
    document.write('<div>' + 'good evening' + '</div>');
    i++;
}
document.write('<div><br></div>');

//#OeT7t3uUMFi
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while(j < 20) {
    document.write(`<h2> cool thing ${j}</h2>`);
    j++;
}