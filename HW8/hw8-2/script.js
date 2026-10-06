//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,<br>
// які в нього були до цього моменту.
//приклад фільтрації масиву,а не клонування
const mixedArray = [{id : 1, name: "kokos"}, undefined,
    {id: 2, name : "grape"},null, NaN,
    {id : 3, name : "potato", price : 15}];
console.log(mixedArray);
//значення undefined, null, NaN тоже об'єкти масиву mixedArray
// довжина масиву равна 6
const CleanArray = [];
mixedArray.forEach(item => {
    if (item === null || item === undefined) return ;
    if (Number.isNaN(item)) return ;
    //Перевіряємо, чи це  об'кт, і якщо так - додаємо у масив.
    if (typeof item === 'object') {
        CleanArray.push(item);
    }
});
     let CleanArrayJSONClone = JSON.stringify(CleanArray);
    console.log(CleanArrayJSONClone);
     let parse = JSON.parse(CleanArrayJSONClone);
     console.log(parse) ;
     //варіант зі збереження функцій об'єкта
// введем в середину одного з об'єтів функцію getInfo()
const mixedArray1 = [{id : 1, name: "kokos",getInfo() {return `${this.name}`;}},
     undefined,
    {id: 2, name : "grape"},null, NaN,
    {id : 3, name : "potato", price : 15}];
// глибокий клон
function deepCopy(item) {
    if (item === null) return null;
    // окремо обробляємо null, (бо  typeof null ==='object'
    //рекурсивно копіюємо кожен елемент
    if (Array.isArray(item)) {
    return item.map(element => deepCopy(element));
}
    // 3. Якщо це об'єкт — рекурсивно копіюємо всі його властивості та методи
    if (typeof item === 'object') {
        const copy = {};
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                copy[key] = deepCopy(item[key]);
            }
        }
        return copy;
    }
    // 4. Якщо це примітив (число, рядок, функція, undefined, NaN) — повертаємо як є
    return item;
}
    const arrCopy = deepCopy(mixedArray1);
        console.log(arrCopy);

console.log("орігинал:",mixedArray1[0].getInfo());
arrCopy[0].name = "банана";
console.log("клон:",arrCopy[0].getInfo());




