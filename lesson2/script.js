'use strict';

var money = +prompt("Ваш бюджет на месяц", "9990");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2020-12-05");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++){
    var state = prompt("Введите обязательную статью расходов в этом месяце", "something");
    var sum = prompt("Во сколько обойдется?", "5");
    if((typeof(state)==='string') && (typeof(sum)!=null) && 
    (typeof(sum)!=null) && (sum!='') && (state!='') && (state.length != 50)){
        appData.expenses[state] = sum;
} 
}


alert(appData.budget/30);
