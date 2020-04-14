let money,
    time;

start();
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    setExpenses: function () {
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
    },
    detectDayBudget: function (callback) {
        appData.moneyPerDay = appData.budget / 30;
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
        callback();
    },
    detectLevel: function () {
        switch (true) {
            case appData.moneyPerDay < 200:
                console.log("Low level");
                break;
            case appData.moneyPerDay > 200 && appData.moneyPerDay < 1000:
                console.log("Middle level");
                break;
            case appData.moneyPerDay > 1000:
                console.log("High level");
                break;
            default:
                console.log("Unknown level");
                break;
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let safe = +prompt("Какова сумма накоплений", "800000"),
                percent = +prompt("Под какой процент", "2");

            appData.monthIncome = (safe / 100 / 12 * percent).toFixed();

            alert("Доход от депозита в месяц: " + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            var sum = +prompt("Cумма необязательных расходов", "420");
            appData.optionalExpenses[i] = sum;
        }
    },
    chooseIncome: function () {
        let income;
        while (typeof (income) != 'string' || income == null || income == "") {
            income = prompt("Введите через запятую без пробелов дополнительные статьи доходов", "заводы,еще что-то,пароходы");
            appData.income = income.split(",");
        }
        let extraIncome;
        while (typeof (extraIncome) != 'string' || extraIncome == null || extraIncome == "") {
            extraIncome = prompt("Может что-то еще?", "trtr");
            appData.income.push(extraIncome);
        }
        appData.income.sort();

        let allIncomes = Object.values(appData.income);
        let incomesToAlert = "Способы доп. заработка: ";
        allIncomes.forEach((item, index) => {
            incomesToAlert += ("\n" + (index + 1) + "." + item)
        });
        alert(incomesToAlert);
    },
    showAllKeys: function(){
        console.log("Наша программа включает данные:");
        for (let key in appData){
            console.log(key);
        
        }
    }
};

function start() {

    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-12-05");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "9990");
    }
}

appData.setExpenses();
appData.detectDayBudget(appData.detectLevel);
//appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();