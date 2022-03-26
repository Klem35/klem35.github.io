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

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')
    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio_container', {
  cssMode: true,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})




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

