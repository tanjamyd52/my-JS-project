//#UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це <br>
// число (у першу, другу чи третю).

let day = 23;
if (day >= 1 && day <= 10) {
    console.log('1');
} else if (day > 10 && day <= 20){
    console.log('2');
} else if (day > 20 && day <= 31){
    console.log('3');
}