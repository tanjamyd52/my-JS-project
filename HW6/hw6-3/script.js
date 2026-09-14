//#bfoJuse4ZzP
// – Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

    let str ="Ревуть воли як ясла повні";
        function stringToArray(str) {
            if(str) {
                const split = str.split(' ');
                return split;
            }
            return [''];
    }
     console.log(stringToArray(str));
//
//#Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити <br>
// всі об’єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map(number => {
    return number + ''
});
console.log(strings);
//
//#5hqyKTfmc
// – створити функцію sortNums(nums,direction), яка приймає масив чисел, <br>
// та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// let arrayOfNums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

let arrayOfNums = [11,21,3];
 function sortNums(arrayOfNums, direction) {
     const result = [11,21,3].sort((a, b) => a - b);
     if (direction === 'ascending') {
         return result;
     }
 }
     console.log(sortNums(arrayOfNums,'ascending'));

 let arrayOfNums1 = [11,21,3];
 function sortNums1(arrayOfNums1, direction) {
 if (direction === 'descending') return arrayOfNums1.sort((a, b) => b - a);}
 console.log(sortNums1(arrayOfNums1,'descending'));


let arrayOfNums2 = [34,7,54];
 function sortNums2(arrayOfNums2, direction) {
 if (direction === 'descending') return arrayOfNums2.sort((a, b) => b - a);}
     console.log(sortNums2(arrayOfNums2, 'descending'));

 let arrayOfNums3 = [34,7,54];
     function sortNums3(arrayOfNums3, direction) {
         if (direction === 'ascending') return arrayOfNums3.sort((a, b) => a - b);
     }
     console.log(sortNums3(arrayOfNums3,'ascending'));
//сучасний варіант
const sortNums4 = (arrayOfNums4, direction) =>
    arrayOfNums4.sort((a, b) => direction === 'ascending' ? a - b: b - a);
console.log(sortNums4([34,7,54],    'ascending'));
console.log(sortNums4([34,7,54],    'descending'));






