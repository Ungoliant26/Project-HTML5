/* $('img[height=150]');   //свойство
$('img[src^=img/]');    //начало строки
$('img[src$=.png]');    //конец строки
$('a[href*=#]');        //в любом месте
$('img:not(.logo img)');//исключение элементов из выборки
$('li:has(a)');         //элемент списка имеет ссылку
$('p:contains(client)');
$('.logo li:first');
$('div:hidden');        //Выбрать скрытые блоки */

/* $(function(){
    //весь код будет выполняться после загрузки всего HTML
    var tagP = $('.mainText p');
    tagP.hide().text('New beginning').show(1000); // показать/скрыть надпись плавно

}); */

/* $(function() {
    $('.icons > div').hide(3000);
}); */


//Задать/показать значение длины и ширины
/* $(function() {
    let w = $('.btn').width();
    console.log(w);
    let h = $('.btn').height();
    console.log(h);
}); */

//Заменить текст с выводом нужных свойств
/* $(function() {
    function widthAndHeight(element) {
        let className = "."+element;
        let w = $(className).width();
        let h = $(className).height();
        $('.mainText p').text('Ширина: ' + w + '--Высота: ' + h);
    }
    widthAndHeight('btn');
}); */

//Плавное скрытие/появление элемента
/* $(function() {
    $('.mainText').fadeOut(2000).fadeIn(3000);
}); */

/*  $(function() {
    function elementOut (element, time) {
        if(time>5000||time<1000||isNaN(time)) {
            return false;
        } else {
            let className = "." + element;
            $(className).fadeOut(time);
        };
    }
    elementOut('mainText', 2000);
}); */ 

//Изменение прозрачности элемента(функция вызывет саму себя(Работает, но вызывает ошибку памяти со временем))
/*  $(function stels () {
    $('.mainText').fadeTo(3000, 0.2).fadeTo(3000,1);
    let timeID = setInterval(stels, 3000); 
}); */ 

/* $(function () {
    function changeAttr(element, newAttr, newValue) {
        let className = "." + element;
        $(className).attr(newAttr, newValue);
    }
    changeAttr('logo','title','New text ever');
}); */

//Передача свойств объектам
/* $(function() {
    $('nav menu li a').css({
        'color':'rgb(0,255,0)',
        'font-size':'5px',
        'padding':'10px'        
    });
}); */

//Плавное изменение свойств размера и отступов
/* $(function() {
    $('nav menu li a').animate({
        'font-size':'20px',
        'padding':'10px'        
    },3000, function(){
        console.log('Успешная анимация');
    });
}); */

//Добавить html в конкретное место через jq
/* $ (function() {
    $('.mainText').before('<span>New block</span>');
    $('.mainText').after('<span>New block</span>');
    $('.mainText').append('<span>New block</span>');
    $('.mainText').prepend('<span>New block</span>');
}); */

//Ручные циклы. Выбор элемента и присвоение свойств
/* $ (function() {
    $('.icons img').each(function(){
        if($(this).attr('src') == 'img/icon1.png') {
            $(this).fadeOut(1000);
        }
        if($(this).attr('src') == 'img/icon3.png') {
            $(this).fadeOut(1000);
        }
    });
}); */

//Клонирование элементов, запись в переменную для дальнейшего использования
/* $(function() {
   let mainText = $('.mainText').remove();
   $('nav').after(mainText); 
}); */

//Выборка по html атрибуту
/* $(function() {
    $('img[alt]').css('background','#222');
}); */

//События и реакции на события mouse -over,-out,-up, -move, click ...etc

/* $(function() {
    $('.logo').mouseup(function() {
    console.log('Naveli');
   });
}); */

/* $(function(){
    $('.arrowDown').click(function(){
        let clone = $(this).clone();
        $(this).after(clone);
    })
}); */

/* $(function(){
    let link = $('menu li a'); 
    link.hover(
        function() {
        $(this).addClass('border');
    },  function() {
        $(this).removeClass('border');
    });
}); */

/* $(function(){
    $(window).click(function(e) {
        console.log(e.target);
    })
}); */

/* $(function(){
    $('.arrowDown').click(function(e) {
        let answer = confirm('Are your shure?');
        if(!answer) {
            e.preventDefault();
        }
    })
}); */

$(function(){
    $(window).click(function(e) {
        console.log(e.target);
    })
});