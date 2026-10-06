//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.
//  Додати перевірки на undefined, null, NaN.
//  Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,<br>
//  які в нього були до цього моменту.варіант зі збереження функцій об'єкта
//
//  введем в середину одного з об'єтів масиву функцію getInfo()
 const mixedArray1 = [{id : 1, name: "kokos",getInfo() {return `${this.name}`;}},
     undefined,
     {id: 2, name : "grape"},null, NaN,
     {id : 3, name : "potato", price : 15}];
//  глибокий клон
 function deepCopy(item) {
     if (item === null) return null;
     // окремо обробляємо null, (бо  typeof null ==='object'
     //рекурсивно копіюємо кожен елемент масиву
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
       console.log(mixedArray1);
       console.log(arrCopy);

 console.log("орігинал:",mixedArray1[0].getInfo());//орігинал
 arrCopy[0].name = "банана";
console.log("клон:",arrCopy[0].getInfo());//працює у клоні
