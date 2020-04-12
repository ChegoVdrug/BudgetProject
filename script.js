'use strict';

var money = prompt("Ваш бюджет на месяц", "9990");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2020-12-05");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
var state1 = prompt("Введите обязательную статью расходов в этом месяце", "brad");
var sum1 = prompt("Во сколько обойдется?", "5");
var state2 = prompt("Введите обязательную статью расходов в этом месяце", "milk");
var sum2 = prompt("Во сколько обойдется?", "5");
appData.expenses[state1] = sum1; 
appData.expenses[state2] = sum2; 
alert(appData.budget/30);
