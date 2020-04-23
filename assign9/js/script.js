window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let infoheader = document.querySelector(".info-header"),
        tabs = document.getElementsByClassName('info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContant(visibleTabNum) {
        for (let i = visibleTabNum; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContant(1);

    function showTabContant(visibleTabNum) {
        if (tabContent[visibleTabNum].classList.contains('hide')) {
            tabContent[visibleTabNum].classList.remove('hide');
            tabContent[visibleTabNum].classList.add('show');
        }

    }
    infoheader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContant(0);
                    showTabContant(i);
                    break;
                }
            }
        }
    });
});
/*имеем вначале 4 табы, 4 видимых блока с контентом. Задача: по нажатию на каждую табу скрывать
все блоки с контентом кроме соответствующего номеру табы.

1.Нужно задать стартовое положение страницы, при котором скрыты все контентные блоки
кроме первого. Для этого пишем метод hide с параметром "номер блока,позже которого все скрыты"
Вызываем метод с параметром 1 для стартового состояния страниицы

2.Нужно при нажатии на другой таб скрывать текущий контент и отображать контент, соответствующий
ему по номеру. Для этого пишем метод show, который принимает параметром номер видимого блока.
Для того, чтобы не навешивать обработку события на каждую табу, обработку навешиваем на родителя.
В обработчике определяем target, на кторый был клик и затем сравниваем его со списком табов.
При совпадении, номер совпавшего таба передается аргументом при вызове метода show.
Но перед show вызывается метод hide с параметром 0, чтобы скрыть все блоки перед показом нужного.

*/
