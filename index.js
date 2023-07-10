const connectBtnArrow = document.querySelector(".connect .fa-chevron-down");
const overlayOptions = document.querySelector(".overlay-options");
const hr = document.querySelector("hr");
const menuBtn = document.querySelector(".fa-bars");
const menu = document.querySelector(".left");
const nav = document.querySelector("nav");


connectBtnArrow.addEventListener("click", function () {
  overlayOptions.classList.toggle("active");
  connectBtnArrow.classList.toggle("fa-chevron-up");
  hr.classList.toggle("active");
});



menuBtn.addEventListener('click', function(){
  menu.classList.toggle('active')
  menuBtn.classList.toggle('fa-times')
  nav.classList.toggle('active')
})