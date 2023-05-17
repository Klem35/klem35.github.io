// import { readTextFile } from './utilities.js'; // when 
// import { data } from '../..data-en.js';



// $(window).scroll(function () {
//   $("body").css("background-position", "50% " + ($(this).scrollTop() / 2) + "px");
// });
// var dataFile = "data-en.json"

// readTextFile(dataFile, function (text) {


// data

const data = {
  languages: [
    {
      title: "French",
      code: "fr",
      level: "native",
      score: "100"
    },
    {
      title: "English",
      code: "en",
      level: "fluent, professional",
      score: "90"
    },
    {
      title: "Hungarian",
      code: "hu",
      level: "intermediate",
      score: "60"
    },
    {
      title: "Spanish",
      code: "es",
      level: "beginner",
      score: "50"
    }
  ],
  trainings: [
    {
      title: "Full-stack web developer"
    },
    {
      title: "Engineering degree"
    }
  ],
  technologies: [
    {
      title: "Git",
      subtitle: "",
      category: "version control",
      icon: "<i class='fa-brands fa-git-alt fa-2xl'></i>",
      description: "",
      link: "https://git-scm.com/"
    },
    {
      title: "Angular",
      subtitle: "",
      category: "front-end framework",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' height='20' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z'/></svg>",
      description: "",
      link: "https://angularjs.org/"
    },
    {
      title: "Bootstrap",
      subtitle: "",
      category: "front-end library",
      icon: "<i class='fa-brands fa-bootstrap fa-2xl'></i>",
      description: "",
      link: "https://angularjs.org/"
    },
    {
      title: "Bootstrap",
      subtitle: "",
      category: "front-end library",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='nodemon'><path d='M22.53 23.92h-.001l-.002.002z'></path><path fill='#4D4B3C' d='M22.981 23.431 23 8.84a1.127 1.127 0 0 0-.587-.985l-.006-.003v-.001l-.721-.398c1.109-1.569 1.77-3.927.94-7.453 0 0-1.871 5.029-5.632 4.863l-4.402-2.431a1.18 1.18 0 0 0-.538-.15h-.104a1.208 1.208 0 0 0-.546.152l-4.4 2.429C3.245 5.03 1.374 0 1.374 0c-.831 3.526-.167 5.884.941 7.453l-.722.398A1.133 1.133 0 0 0 1 8.839l.022 14.591c0 .203.11.392.296.491a.58.58 0 0 0 .589 0l5.832-3.204a1.14 1.14 0 0 0 .593-.987v-6.817c0-.406.225-.783.592-.984l2.483-1.372c.169-.097.373-.154.59-.154h.005c.202 0 .41.05.589.154l2.483 1.372c.368.201.592.578.592.984v6.817c0 .405.228.779.594.987l5.831 3.204a.606.606 0 0 0 .597-.001.563.563 0 0 0 .293-.489z'></path><path d='m11.326 2.435.002-.001.004-.002zM1.903 23.92l-.002.001H1.9z'></path></svg>",
      description: "",
      link: "https://angularjs.org/"
    }
  ],
  experiences: [
    {
      title: "Micro-business manager",
      company: "the3dopaminelab",
      date: "Nov. 2020 - Dec. 2022",
      location: "Vitré, FRANCE - Budapest, HUNGARY",
      description: "",
      activities: [
        "Project management",
        "Online store",
        "Dropshipping",
        "Brand design",
        "Accounting",
        "3D printing",
        "CAD"
      ],
      field: ""
    },
    {
      title: "Consulting engineer",
      company: "Altran",
      date: "Sep. 2019 - Nov. 2020",
      location: "Issac, FRANCE",
      description: "Technical leader and main customer contact fortool development of BAL (Building Assembly Line) of Ariane 6 Launcher.",
      activities: [
        "Project management",
        "Supplier management",
        "Customer relationship",
        "Bill of specifications",
        "CAD"
      ],
      field: ""
    }
  ],
  projects: [
    {
      title: "MyGreenStudio",
      background_image: "mygreenstudio-1.png",
      project_type: "professional",
      project_logo: "",
      company: "Yourosoft kft.",
      company_logo: "",
      date: "Nov. 2020 - Dec. 2022",
      description: "",
      front_website_link: "https://mygreenstudio.com/en/",
      platform_website_link: "https://workspace.mygreenstudio.com/en/anonymous/sign-in",
      activities: [
        "Project management",
        "Online store",
        "Dropshipping",
        "Brand design",
        "Accounting",
        "3D printing",
        "CAD"
      ],
      technologies: {
        frontend: [
          "Code Igniter 4",
          "PHP",
          "Handelbars",
          "jquery",
          "javascript"
        ],
        backend: [
          "Code Igniter 4",
          "PHP"
        ]
      }
    },
    {
      title: "MyExpatMobility",
      class: "myexpatmobility",
      project_type: "professional",
      project_logo: "",
      company: "Yourosoft kft.",
      company_logo: "",
      date: "Nov. 2020 - Dec. 2022",
      description: "",
      front_website_link: "https://www.myexpatdata.com/",
      platform_website_link: "",
      activities: [
        "Project management",
        "Online store",
        "Dropshipping",
        "Brand design",
        "Accounting",
        "3D printing",
        "CAD"
      ],
      technologies: {
        frontend: [
          "Code Igniter 4",
          "PHP",
          "Handelbars",
          "jquery",
          "javascript"
        ],
        backend: [
          "SpringBoot",
          "Java"
        ]
      }
    }
  ]
}

// Experiences
$(document).ready(function () {
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

  experienceButtons.each(function () {
    $(this).on('click', function () {
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
          <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>${listOfActivities}</ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
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
    <div class="card card-logo box" data-mdb-placement="top" data-mdb-toggle="tooltip" data-mdb-html="true"
    data-mdb-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
      <div class="card-body d-flex justify-content-center">
        ${technology.icon}
      </div>
      </div>
    </div>`;
    technologiesContainer.append(block);
  })

  // Initializing tooltips

  const tooltipTriggerList = document.querySelectorAll('[data-mdb-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

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
          <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${$(this).text()}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        </div>`;
      modalContent.append(block);
      $('#exampleModal').modal('show');
    });
  });

  // Projects cards

  var projects = data.projects;
  var projectsContainer = $('#projects_container');
  projects.forEach(function (project) {
    var project_index = projects.indexOf(project);

    var block = `<div class="col-4">
    <div class="card project_card" data-project-index="${project_index}">
    <img class="project_background" src="assets/images/${project.background_image}">
    <span class="hover_project_card">
    <i class="fa fa-plus"></i>  
    </span>
      
    </div>`;
    projectsContainer.append(block);


  })

  $(".project_card").mouseenter(function hoverProjectCard() {
    $("span", this).css("opacity", 1)
  })
  $(".project_card").mouseleave(function hoverProjectCard() {
    $("span", this).css("opacity", 0)
  })


  $(".project_card").each(function () {
    $(this).on('click', function () {
      modalContent.empty();
      var project = Object.values(data.projects)[$(this).data("project-index")];

      var block = `
          <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${project.title}</h1>
          <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        
        
        </div>
        <div class="modal-footer">
        <a href="${project.front_website_link}" target="_blank"><button type="button" class="btn btn-primary"><i class="fa fa-arrow-right"></i> Visit front website</button></a>
        <a href="${project.platform_website_link}" target="_blank"><button type="button" class="btn btn-primary"><i class="fa fa-arrow-right"></i> Visit platform</button></a>
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        </div>`;
      modalContent.append(block);
      $('#exampleModal').modal('show');
    });
  });

  // Map
  var map = L.map('map').setView([47.497913,  19.040236], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([47.497913, 19.040236]).addTo(map);

});



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




$(document).ready(function(){
// PARALLAX
  // Populate images from data attributes.
  var scrolled = $(window).scrollTop()
  $('.parallax').each(function(index) {
      var imageSrc = $(this).data('image-src')
      var imageHeight = $(this).data('height')
      $(this).css('background-image','url(' + imageSrc + ')')
      $(this).css('height', imageHeight)

      // Adjust the background position.
      var initY = $(this).offset().top
      var height = $(this).height()
      var diff = scrolled - initY
      var ratio = Math.round((diff / height) * 100)
      $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
  })

  // Attach scroll event to window. Calculate the scroll ratio of each element
  // and change the image position with that ratio.
  // https://codepen.io/lemagus/pen/RWxEYz
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function(index, element) {
      var initY = $(this).offset().top
      var height = $(this).height()
      var endY  = initY + $(this).height()

      // Check if the element is in the viewport.
      var visible = isInViewport(this)
      if(visible) {
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
      }
    })
  })
})

// Check if the element is in the viewport.
// http://www.hnldesign.nl/work/code/check-if-element-is-visible/
function isInViewport(node) {
  // Am I visible? Height and Width are not explicitly necessary in visibility
  // detection, the bottom, right, top and left are the essential checks. If an
  // image is 0x0, it is technically not visible, so it should not be marked as
  // such. That is why either width or height have to be > 0.
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}


