//#reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор
let ArrayBooks = [
    {
        title: "Ришелье.Мантія і кров",
        pages: 560,
        authors: ["Анрі Ельман","Альфред де Віньї"],
    genres: ["Історія","Пригоди"]
},
{
    title: "Роксолана",
        pages: 2560,
    authors: ["Дурул Тайлан","Ягмур тайлан","Мерт Байкал"],
    genres: ["Історія","Роман","Пригоди","Проза"]
        },
{
    title: "Гобсек",
        pages: 60,
    authors: ["Оноре де БальЗак"],
    genres: ["Соціально-психологічна проза"]
}
];
let maxPages = ArrayBooks[0].pages;
for (let i=0;  i< ArrayBooks.length;i++) {
    if (ArrayBooks[i].pages > maxPages){
        maxPages = ArrayBooks[i].pages;
            }
}
console.log(maxPages);

let innerArrayBooks = ArrayBooks[0].genres;
let calkGenres = ArrayBooks[0].genres;
for (let i=0;  i< ArrayBooks.length;i++) {
    for (let j = 0; j < ArrayBooks[j].genres.length; j++) {
        calkGenres = ArrayBooks[j].genres.length
        innerArrayBooks = ArrayBooks[j].genres
    }
}
console.log(innerArrayBooks);
console.log(calkGenres);

let maxTitle = ArrayBooks[0].title;
for (let i=0;  i< ArrayBooks.length;i++) {
    if (ArrayBooks[i].title.length > maxTitle) {
        maxTitle = ArrayBooks[i].title;
    }
}
console.log(maxTitle);


for (let i = 0; i < ArrayBooks.length; i++) {
    for (let j = 0; j < ArrayBooks[i].authors.length; j++) {
        if ( ArrayBooks[i].authors.length === 2 || ArrayBooks[i].authors.length === 1) {

            console.log(ArrayBooks[i].authors.length);
            console.log(ArrayBooks[i].authors);
            break;
        }

    }}










