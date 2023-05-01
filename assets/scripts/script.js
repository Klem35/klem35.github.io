import { readTextFile } from './utilities.js';


$(window).scroll(function () {
  $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});
var dataFile = "data-en.json"

readTextFile(dataFile, function (text) {
  var data = JSON.parse(text);

  // Experiences

  var experiences = data.experiences;
  var experiencesContainer = $('#experiences_container .main-timeline-2');
  experiences.forEach(function (experience) {
    var index = experiences.indexOf(experience);
    if (index % 2 == 0) {
      var cardPosition = "left-2";
      var fadeInEffect = "u-fade-type-left js-scroll-trigger";
    } else {
      var cardPosition = "right-2";
      var fadeInEffect = "u-fade-type-right js-scroll-trigger";

    }
    var block = `
      <div class="timeline-2 ${cardPosition}">
        <div class="card ${fadeInEffect}">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-2">${experience.title} <span class="float-end badge text-bg-info">${experience.field}</span></h4>
            <p class="text-muted mb-2"><i class="fa-solid fa-clock" aria-hidden="true"></i> ${experience.date}</p>
            <p class="fw-bold mb-2"><i class="fa-solid fa-location-dot"></i> ${experience.location}</p>
            <p class="mb-2">${experience.description}</p>
              <button type="button" class="btn btn-primary experience_button" data-toggle="modal" data-index="${index}" data-target="#exampleModal">
        Details
      </button>  
          </div>
        </div>
      </div>`;
    experiencesContainer.append(block);
  });

  var experienceButtons = $('.experience_button');
  var modalContent = $('#exampleModal .modal-content');

  experienceButtons.each(function (experienceButton) {
    $(this).on('click', function (experienceButton) {
      modalContent.empty();
      var experience = Object.values(data.experiences)[$(this).data("index")];
      function displayList(list) {
        var renderedList = "";
        list.forEach(function (el) {
          renderedList += `<li>${el}</li>`
        });
        return renderedList;
      };
      var listOfActivities = displayList(experience.activities);

      var block = `
          <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${experience.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>${listOfActivities}</ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>`;
      modalContent.append(block);
      $('#exampleModal').modal('show');
    });
  });


  

  // Language pies

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
    animateCircleProgressBar();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      animateCircleProgressBar();
    });
  }

  // Technologies cards

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

  // Technologies cards

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

})


// Scroll progress bar

window.onscroll = function () { scrollProgressBar() };

function scrollProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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

