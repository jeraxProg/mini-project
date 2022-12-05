let modalBtn = document.querySelector('.modal-button');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function() {
  modalBg.classList.add('active');
});

modalClose.addEventListener('click', function() {
  modalBg.classList.remove('active');
});


// document.querySelectorAll('.products .product').forEach(product =>{
//   product.onclick = () =>{
//     preveiwMenue.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       let target = preview.getAttribute('data-target');
//       if(name == target){
//         preview.classList.add('active');
//       }
//     });
//   };
// });

// previewBox.forEach(close =>{
//   close.querySelector('.modal-close').onclick = () =>{
//     close.classList.remove('active');
//     preveiwMenue.style.display = 'none';
//   };
// });
