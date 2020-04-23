'use strict';

let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
let expensesItems = document.getElementsByClassName("expenses-item");
let expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];
let chooseIncome = document.getElementsByClassName('choose-income')[0];
let checksavings = document.getElementsByClassName('checksavings')[0];
let chooseSum = document.getElementsByClassName('choose-sum')[0];
let choosePercent = document.getElementsByClassName('choose-percent')[0];
let yearValue = document.querySelector('.year-value');
let monthValue = document.getElementsByClassName('month-value')[0];
let dayValue = document.getElementsByClassName('day-value')[0];
let optionalInputs = document.querySelectorAll('.optionalexpenses-item');
let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

startBtn.addEventListener("click", function () {
    expensesBtn.disabled=false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    money = +prompt("Ваш бюджет на месяц?", "8000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2015-12-02");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

checksavings.addEventListener("input", function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener('input', function () {

    if (appData.savings == true && choosePercent) {
        console.log(choosePercent.input);
        console.log(chooseSum.value);
        let sum = chooseSum.value;
        let percent = choosePercent.value;

        appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
        console.log(appData.monthIncome);
        monthsavingsValue.textContent = appData.monthIncome;
        appData.yearIncome = (sum / 100 * percent).toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome;

    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true && chooseSum) {
        console.log(choosePercent.value);
        console.log(chooseSum.value);
        let sum = chooseSum.value;
        let percent = choosePercent.value;

        appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
        console.log(appData.monthIncome);
        monthsavingsValue.textContent = appData.monthIncome;
        appData.yearIncome = (sum / 100 * percent).toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome;

    }
});

expensesBtn.addEventListener("click", function () {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if (typeof (a) === 'string' &&
         typeof (a) != null &&
         typeof (b) != null && 
         a != "" && 
         b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("bad result");
            i--;
        }

    }

    expensesValue.textContent = sum;
    console.log(expensesValue);
});
optionalExpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalInputs.length; i++) {
        let value = optionalInputs[i].value;
        appData.optionalExpenses[i] = value;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
        // optionalexpensesValue.textContent += value + " ";
    }
});
chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});
function arraySum(array){
     var sum = 0; 
     for(var i = 0; i < array.length; i++){
         sum += +array[i]; 
        } 
        return sum; 
    } 
countBtn.addEventListener('click', function () {
    if (appData.budget) {
        let expenses = arraySum(Object.values(appData.expenses));
        console.log(expenses);
        console.log(appData.expenses);
        appData.moneyPerDay = ((appData.budget - expenses) / 30 ).toFixed(2);
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Minimum";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Medium";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High";
        } else {
            levelValue.textContent = "Error";

        }
    } else {
        console.log("else");
        levelValue.textContent = "Error";
        daybudgetValue.textContent = "Error";
    }
});

