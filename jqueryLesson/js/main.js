//Выборка элементов чекбокса и других
/* $(function() {
   $(':submit').click(function() {
      let value = $(':checkbox:checked').each(function() {
         let value = $(this).val();
         alert(value);
      });
   });
}); */

//Проверка заполнения полей
/* $(function() {
   $('.form1').submit(function(e) {
      if ($('.text1').val() == '') {
         e.preventDefault();
         alert('U didnt fill in the field');
      }
   });
}); */


//События выделения и снятие выделения
$(function() {
   $('.text1, .text2, .password').focus(function() {
      $(this).css({
         'border':'2px double red',
         'background': 'green'
      });
   });
});

$(function() {
   $('.text1, .text2, .password').blur(function() {
      $(this).css({
         'border':'1px solid black',
         'background': 'white'
      });
   });
});

//Выбор и внесение значений в соседние ячейки if else
/* $(function() {
   $('#select1').change(function() {
      let v = $('#select1 :selected').val();
      if(v==1) {
         $('#select2').html('<option value="1">Серые</option><option value="2">Большие</option>');
      } else if(v==2) {
         $('#select2').html('<option value="1">Быстрые</option><option value="2">Гибкие</option><option value="3">Пятнистые</option>');
      } else if(v==3) {
         $('#select2').html('<option value="1">Маленькие</option><option value="2">Большие</option><option value="3">Громкие</option><option value="4">Зеленые</option>');
      } else {
         $('#select2').html('<option value="1">Идеальные</option>');
      }
   });
}); */

//Выбор и внесение значений в соседние ячейки switch case
/* $(function() {
   $('#select1').change(function() {
      let v = $('#select1 :selected').val();
      switch(v) {
         case '1':
         $('#select2').html('<option value="1">Серые</option><option value="2">Большие</option>');
         break;
         case '2':
         $('#select2').html('<option value="1">Быстрые</option><option value="2">Гибкие</option><option value="3">Пятнистые</option>');
         break;
         case '3':
         $('#select2').html('<option value="1">Маленькие</option><option value="2">Большие</option><option value="3">Громкие</option><option value="4">Зеленые</option>');
         break;
         case '4':
         $('#select2').html('<option value="1">Идеальные</option>');
         break;
      }
   });
}); */


//Блокировка элементов форм
/* $(function() {
   $(':submit').click(function(e) {
      $('.text2').attr('disabled','disabled');
      e.preventDefault();
   });
   $(':reset').click(function(e) {
      $('.text2').removeAttr('disabled');
      e.preventDefault();
   });
}); */