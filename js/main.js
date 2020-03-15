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

