'use strict';

var salary = parseInt(prompt("Ваш бюджет на месяц", "10000"));
var date = parseInt(prompt("Введите дату в формате YYYY-MM-DD", "2020-12-05"));
var state1 = prompt("Введите обязательную статью расходов в этом месяце", "brad");
var sum1 = parseInt(prompt("Во сколько обойдется?", "5"));
var state2 = prompt("Введите обязательную статью расходов в этом месяце", "milk");
var sum2 = parseInt(prompt("Во сколько обойдется?", "5"));

var appData = {
    budget: salary,
    timeData: date,
    expenses: {
        state1: sum1,
        state2: sum2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(salary);
console.log(appData.expenses.state1);
console.log(appData.expenses.state2);
alert((appData.budget-(appData.expenses.state1+appData.expenses.state2))/30);
