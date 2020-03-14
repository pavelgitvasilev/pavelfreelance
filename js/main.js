document.addEventListener('DOMContentLoaded', function(event){ 

 const modal = document.querySelector('.modal');
 const modalBtn = document.querySelectorAll('[data-toggle=modal]');
 const CloseBtn = document.querySelector('.modal__close');
 const dark = document.querySelector('.wrap')
 const switchModal = () => {
  modal.classList.toggle('modal--visible');

  document.addEventListener('keyup', function(e){
   let key = e.keyCode;
   if(key == 27) {
    modal.classList.toggle('modal');
    switchModal();
   }
  })

  document.addEventListener('mouseup', function(e) {
   var container = $(".modal");
   if (container.has(e.target).length === 0){
       container.hide();
   }
  })
 }

 modalBtn.forEach(element => {
  element.addEventListener('click', switchModal);
 });
 
 CloseBtn.addEventListener('click', switchModal);
});


 
// Ниже с помощью библиотеки jQuery

// $(document).ready(function () {
//  var modal = $('.modal'),
//      modalBtn = $('[data-toggle=modal]'),
//      CloseBtn = $('.modal__close')


//  modalBtn.on('click', function() {
//   modal.toggleClass('modal--visible');

//  });

//   CloseBtn.on('click', function() {
//   modal.toggleClass('modal--visible');

//  });

// });


//   $(document).mouseup(function (e) {
//    var container = $(".modal");
//    if (container.has(e.target).length === 0){
//        container.hide();
//    }
// });




// $(document).ready(function() { 
//  var scrollBtn = $('.scroll');	
//  $(window).scroll (function () {
//    if ($(this).scrollTop () > 400) {
//      scrollBtn.fadeIn();
//    } else {
//      scrollBtn.fadeOut();
//    }
// });	 
// scrollBtn.on('click', function(){
// $('body, html').animate({
// scrollTop: 0
// }, 800);
// return false;
// });		 
// });

