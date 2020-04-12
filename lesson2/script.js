'use strict';

var money = prompt("Ваш бюджет на месяц", "9990");
var time = +prompt("Введите дату в формате YYYY-MM-DD", "2020-12-05");
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
for (let i = 1; i <= 2; i++) {
    var state = prompt("Введите обязательную статью расходов в этом месяце", "something"+i);
    var sum = prompt("Во сколько обойдется?", "5");
    if ((typeof (state) === 'string') && (typeof (sum) != null) &&
        (typeof (sum) != null) && (sum != '') && (state != '') && (state.length != 50)) {
        appData.expenses[state] = sum;
    }
    else{
        alert("Input data is invalid");
    }
}
// while ((Object.keys(appData.expenses)).length < 2) {
//     console.log('--------------------');
//     console.log((Object.keys(appData.expenses)).length);
//     console.log('--------------------');
//     var state = prompt("Введите обязательную статью расходов в этом месяце", "something");
//     var sum = prompt("Во сколько обойдется?", "5");
//     if ((typeof (state) === 'string') && (typeof (sum) != null) &&
//         (typeof (sum) != null) && (sum != '') && (state != '') && (state.length != 50)) {
//         appData.expenses[state] = sum;
//     }
//     else{
//         alert("Input data is invalid");
//     }
// }

// do {
//   //  console.log((Object.keys(appData.expenses)).length);
//     var state = prompt("Введите обязательную статью расходов в этом месяце", "something");
//     var sum = prompt("Во сколько обойдется?", "5");
//     if ((typeof (state) === 'string') && (typeof (sum) != null) &&
//         (typeof (sum) != null) && (sum != '') && (state != '') && (state.length != 50)) {
//         appData.expenses[state] = sum;
//     }
//     else{
//         alert("Input data is invalid");
//     }
// }
// while ((Object.keys(appData.expenses)).length < 2);

console.log((Object.keys(appData.expenses)).length);
console.log(Object.keys(appData.expenses));
alert(appData.budget / 30);