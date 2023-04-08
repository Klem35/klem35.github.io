import { readTextFile } from './utilities.js';



// Scroll progress bar

window.onscroll = function () { scrollProgressBar() };

function scrollProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Language pies

readTextFile("data.json", function (text) {
  var data = JSON.parse(text);
  var languages = data.languages;
  var languagesContainer = $('#languages_container');
  languages.forEach(function (language) {
    var block = `<div class="col pie" align="center" data-pie='{ 
        "fill": "#EFEBE9",
        "percent": ${language.score},
        "stroke": 6,
        "strokeBottom": 10,
        "colorSlice": "#4E342E",
        "colorCircle": "#EFEBE9",
        "fontSize": "1.3em",
        "round": true
      }'>
      </div>`;
    languagesContainer.append(block);
  })
  if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    animateCircleProgressBar();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      console.log('document was not ready, place code here');
      animateCircleProgressBar();
    });
  }
});

function animateCircleProgressBar() {
  // get all progress bar
  const elements = [].slice.call(document.querySelectorAll('.pie'));
  // call to function
  const circle = new CircularProgressBar('pie');
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // if IntersectionObserver is supported by the browser
  if ('IntersectionObserver' in window) {
    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };
    const ovserver = new IntersectionObserver((entries, observer) => {
      entries.map((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          circle.initial(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, config);
    elements.map((item) => {
      ovserver.observe(item);
    });
  } else {
    // if the browser does not support IntersectionObserver
    // we run all progress bars at once
    elements.map((element) => {
      circle.initial(element);
    });
  }

}

// Technologies cards

readTextFile("data.json", function (text) {
  var data = JSON.parse(text);
  var technologies = data.technologies;
  var technologiesContainer = $('#technologies_container');
  technologies.forEach(function (technology) {
    var block = `<div class="col">
    <div class="card card-logo" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-html="true"
    data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
      <div class="card-body d-flex justify-content-center">
        ${technology.icon}
      </div>
      </div>
    </div>`;
    technologiesContainer.append(block);
  })
  // Initializing tooltips

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

});

// Technologies cards

readTextFile("data.json", function (text) {
  var data = JSON.parse(text);
  var trainings = data.trainings;
  var trainingsContainer = $('#trainings');
  var trainingButtons = $('.training_button');
  var modalContent = $('#exampleModal .modal-content');

  trainingButtons.each(function (trainingButton) {
    $(this).on('click', function (trainingButton) {
      modalContent.empty();
          var block = `
          <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${$(this).text()}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>`;
      modalContent.append(block);
      $('#exampleModal').modal('show');
    });
  });

});




