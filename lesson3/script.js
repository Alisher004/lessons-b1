// условия оператора if/else    swich/case
// let email = prompt('Введите ваш email');
// let password = prompt('Введите ваш пароль');
// let userEmail = 'admin'
// let userPassword = 'admin123'

// if(email === userEmail && password === userPassword) {
//     alert("вы успешно вошли в систему")
// }else {
//     alert("неверный логин или пароль")
// }

// let number = prompt('Введите число');
// if(number > 0) {
//     alert('Число положительное');
// }else if(number < 0) {
//     alert('Число отрицательное');
// }else {
//     alert('Число равно нулю');
// }


let month = prompt('Введите любой месяц');
switch(month){
    case 'январь':
    case 'февраль':
    case 'декабрь':
        alert('Зима');
        break;
    case 'апрель':
    case 'май':
    case 'март':
        alert('Весна');
        break;
    case 'июнь':
    case 'июль':
    case 'август':
        alert('Лето');
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        alert('Осень');
        break;
    default:
        alert('Такого месяца не существует');
}