/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}

 

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
  el.addEventListener('click', animateElements);

})


// $(document).ready(function ($) {
  function animateElements() {
    $('.progressbar').each(function () {
      var elementPos = $(this).offset().top;
      // var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      // if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
      //   $(this).data('animate', true);
      //   $(this).find('.circle').circleProgress({
      //     startAngle: -Math.PI / 2,
      //     value: percent / 100,
      //     thickness: 3,
      //     fill: {
      //       color: '#ff04f7'
      //     }
      //   }).on('circle-animation-progress', function (event, progress, stepValue) {
      //     $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
      //   }).stop();
      // }

      $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 3,
          fill: {
            color: '#ff04f7'
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();
      
    });
  }

  // Show animated elements
  animateElements();
  // $(window).scroll(animateElements);


skillsHeader.forEach((el) => {
  el.addEventListener('click', animateElements);

})







function animateSkillBar() {
( function( $ ) {
  "use strict";
  
  var $bars = $( ".bar" ),
    methods = {
      init: function() {
        
        // Bind events
        methods.bindEvents();
        
      },
      bindEvents: function() {

        // Loop through each of the bars...
        $bars.each( function() {

          var $bar = $( this ),
            $pct = $bar.find( ".pct" ),
            data = $bar.data( "bar" );

          setTimeout( function() {

            $bar
              .css( "background-color", data.color )
              .animate({
                "width": $pct.html()
              }, data.speed || 3000, function() {

                $pct.css({
                  "color": data.color,
                  "opacity": 1
                });

              });

          }, data.delay || 0 );     

        });

      }
    };
  
  // // Initialize on page load
  // methods.init(); 
    
})( jQuery );
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', animateSkillBar);

})