let money,
    time;

start();
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function start() {

    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-12-05");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "9990");
    }
}

function setExpenses() {
    for (let i = 1; i <= 2; i++) {
        var state = prompt("Введите обязательную статью расходов в этом месяце", "something" + i);
        var sum = prompt("Во сколько обойдется?", "5");
        if ((typeof (state) === 'string') && (typeof (sum) != null) &&
            (typeof (sum) != null) && (sum != '') && (state != '') && (state.length != 50)) {
            appData.expenses[state] = sum;
        } else {
            alert("Input data is invalid");
        }
    }
}

function detectLevel(budgetPerDay){
    switch (true) {
        case budgetPerDay < 200 :
            console.log("Low level");
            break;
        case budgetPerDay > 200 && budgetPerDay < 1000:
            console.log("Middle level");
            break;
        case budgetPerDay > 1000 :
            console.log("High level");
            break;
        default:
            console.log("Unknown level");
            break;
    }
}

//console.log((Object.keys(appData.expenses)).length);
//console.log(Object.keys(appData.expenses));
function detectDayBudget(){
    appData.moneyPerDay = appData.budget/30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    return appData.moneyPerDay;
}

function checkSavings() {
    if (appData.savings == true) {
        let safe = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = (safe / 100 / 12 * percent).toFixed();

        alert("Доход от депозита в месяц: " + appData.monthIncome);

    }
}

function chooseOptExpenses(){
    for(let i = 1; i <=3; i++){
        var sum= +prompt("Cтатью необязательных расходов", "0");
        appData.optionalExpenses[i] = sum;
    }
}

setExpenses();

detectLevel(detectDayBudget());

checkSavings();

chooseOptExpenses();