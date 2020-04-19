let menu = document.querySelector('.menu');
let liList = document.getElementsByClassName('menu-item');
let title = document.getElementsByClassName('title');
let adv = document.getElementsByClassName('adv');
let textBox = document.getElementsByClassName('prompt');
//create 5th li
let li = document.createElement('li');
li.classList.add('menu-item');
li.innerHTML='Пятый пункт';
menu.appendChild(li);

//insert li3 before li2
liList[2].replaceWith(liList[1]);
liList = document.getElementsByClassName('menu-item');

//create and insert new li2
let li2 = document.createElement('li');
li2.classList.add('menu-item');
li2.innerHTML = ('Второй пункт');
menu.insertBefore(li2, liList[1]);
//change the text content
title[0].innerHTML = "Мы продаем только подлинную технику Apple";
//delete an advertisement
adv[0].remove();
//get info from user and insert it to div
let result = prompt("Do you like Apple?", '');
textBox[0].innerHTML = result;
