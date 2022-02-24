/*==================== DARK LIGHT THEME ====================*/

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');

})

/*==================== CHANGE NAVBAR COLOR ON SCROLL ====================*/

var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 50) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};




// /*==================== DARK LIGHT THEME ====================*/
// $(document).ready(function(){
//   var scroll_start = 0;
//   var startchange = $('#startchange');
//   var offset = startchange.offset();
//    if (startchange.length){
//   $(document).scroll(function() {
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top) {
//          $(".navbar-default").css('background-color', '#f0f0f0');
//       } else {
//          $('.navbar-default').css('background-color', 'transparent');
//       }
//   });
//    }
// });

