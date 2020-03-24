//Нативный js

// document.addEventListener('DOMContentLoaded', function(event){ 

//  const modal = document.querySelector('.modal');
//  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//  const CloseBtn = document.querySelector('.modal__close');
//  const switchModal = () => {
//   modal.classList.toggle('modal--visible');

//   document.addEventListener('keyup', function(e){
//    let key = e.keyCode;
//    if(key == 27) {
//     modal.classList.toggle('modal');
//     switchModal();
//    }
//   })

  
//   $(document).mouseup(function (e) {
//    var container = $(".modal");
//    if (container.has(e.target).length === 0){
//        container.hide();
//    }
// });
  
//  }

//  modalBtn.forEach(element => {
//   element.addEventListener('click', switchModal);
//  });
 
//  CloseBtn.addEventListener('click', switchModal);
// });


 
// jQuery библиотека

$(document).ready(function () {
 var modal = $('.modal'),
     modalBtn = $('[data-toggle=modal]'),
     CloseBtn = $('.modal__close')
     switchModal = () => {
      modal.classList.toggle('modal--visible')};
     

  modalBtn.on('click', function() {
  modal.toggleClass('modal--visible'); 

 });//ок все работает

  CloseBtn.on('click', function() {
  modal.toggleClass('modal--visible'); 

 });//ок все работает
 
 $(document).keyup(function (e) { 
  let key = e.keyCode;
     if(key == 27) {
      modal.toggleClass('modal--visible');
 }

 }); // нажатие на клавищу esc
 

  $(modal).mouseup(function (e) {
   var container = $('.modal');
   if (container.has(e.target).length === 0){
       container.toggleClass('modal--visible');

   }
}); //нажатие вне окна

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
  }) // слайдер
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);



    //Валидация формы

    $('.modal__form').validate({
      errorClass: "invalid",
      rules: {
        // строчное правило
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: {
          required: true,
          tel: true
        },
        // правило обьекта (целого блока)
        userEmail: {
          required: true,
          email: true
        }
      }, 
      // правила сообщения
      messages: {
        userName: {
          required:"Введите имя",
          minlength: "Имя должно быть не менее 2 символов"
        },
        userEmail: {
          required: "Введите имэйл",
          email: "Введите в формате name@domain.com"
        },
        userPhone: {
          required: "Введите телефон",
          tel: "Введите в формате +3752911111111"
        }
      }

    });

    

    //Маска для номера телефона

    $('[type=tel]').mask('+375(00) 000-00-00', {placeholder: "+375(__) ___-__-__"});

    // Маска для плэйсхолдера
    // $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});


    // Карта

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.751574, 37.573856],
              zoom: 13
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Работа',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/location.png',
              // Размеры метки.
              iconImageSize: [30, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
  
      myMap.geoObjects.add(myPlacemark);
  });

}); //закрывается документ реди


// Скрол ниже рабочий

$(document).ready(function() { 
 var scrollBtn = $('.scroll');	
 $(window).scroll (function () {
   if ($(this).scrollTop () > 400) {
     scrollBtn.fadeIn();
   } else {
     scrollBtn.fadeOut();
   }
});	 
scrollBtn.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});

