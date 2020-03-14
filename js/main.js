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
    modal.classList.toggle('modal--visible');
    switchModal();
   }
  })
  dark.classList.toggle('wrap--dark');

 }

 modalBtn.forEach(element => {
  element.addEventListener('click', switchModal);
 });
 
 CloseBtn.addEventListener('click', switchModal);
 dark.addEventListener('click',switchModal);
});

// window.addEventListener('click', function (e) {
//  if(e.target == modal) {
//   modal.style.display = 'none';
//  }
// })
 