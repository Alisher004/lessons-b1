// циклдар
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// for - цикл
// while - цикл

// for (i = 0; i < 10; i++){
//     console.log('hello world' + i);
// }

// let i = true;
// while (i ){
//     console.log('hello world' + i);
//     i++;
// }

// == - проверка на равенство
// === - проверка на равенство и тип данных
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false

// for(i = 0; i < 10; i++){
//     if (i == 5){
//         // break;
//         continue;
//     }
//     console.log(i)
// }


// for (i = 0; i < 100; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// for (i = 0; i < 10; i++){
//     for (j = 0; j < 5; j++){
//         console.log(i+'*'+j+'='+i*j);
//     }
// }

// пароль
// let password = '1234';
// let userPassword = prompt('Введите пароль');
// while (userPassword !== password){
//     userPassword = prompt('попробуйте еще раз');
// }
// alert('Вы вошли в систему');


let tableCount = Number(prompt("Канча таблица чыгарабыз?"));
let maxNumber = Number(prompt("Ар бир таблица канчага чейин эсептелсин?"));
for (let i = 1; i <= tableCount; i++) {
    console.log(`--- ${ i } таблица-- -`);
    for (let j = 1; j <= maxNumber; j++) {
        console.log(`${ i } × ${ j } = ${ i * j}`);
    }
}