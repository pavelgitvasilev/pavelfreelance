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

