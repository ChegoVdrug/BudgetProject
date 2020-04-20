let menu = document.querySelector('.menu');
let liList = document.getElementsByClassName('menu-item');
let title = document.getElementsByClassName('title')[0];
let adv = document.getElementsByClassName('adv')[0];
let textBox = document.querySelector('#prompt');
//create 5th li
let li = document.createElement('li');
li.classList.add('menu-item');
li.innerHTML='Пятый пункт';
menu.appendChild(li);

//insert li3 before li2
menu.insertBefore(liList[2],liList[1]);
liList = document.getElementsByClassName('menu-item');

//change background image
document.body.style.backgroundImage = "url(../img/apple_true.jpg)";

// //create and insert new li2
// let li2 = document.createElement('li');
// li2.classList.add('menu-item');
// li2.innerHTML = ('Второй пункт');
// menu.insertBefore(li2, liList[1]);
//change the text content
title.innerHTML = "Мы продаем только подлинную технику Apple";
//delete an advertisement
adv.remove();
//get info from user and insert it to div
let result = prompt("Do you like Apple?", '');
textBox.innerHTML = result;
