$(document).ready(function () {

  // Map

  // var map = L.map('map').setView([47.497913, 19.040236], 13);
  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   className: 'map-tiles'
  // }).addTo(map);
  // var marker = L.marker([47.497913, 19.040236]).addTo(map);


  let map = L.map('map').setView([47.497913, 19.040236], 13);

  let defaultToDarkFilter = [

    'hue:180deg',
    'invert:100%',
  ]

  L.tileLayer.colorFilter('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: defaultToDarkFilter,
  }).addTo(map);

  L.TileLayer.ColorFilter = L.TileLayer.extend({
    intialize: function (url, options) {
      L.TileLayer.prototype.initialize.call(this, url, options);
    },
    colorFilter: function () {
      let VALIDFILTERS = [
        'blur:px',
        'brightness:%', 'bright:brightness:%', 'bri:brightness:%',
        'contrast:%', 'con:contrast:%',
        'grayscale:%', 'gray:grayscale:%',
        'hue-rotate:deg', 'hue:hue-rotate:deg', 'hue-rotation:hue-rotate:deg',
        'invert:%', 'inv:invert:%',
        'opacity:%', 'op:opacity:%',
        'saturate:%', 'saturation:saturate:%', 'sat:saturate:%',
        'sepia:%', 'sep:sepia:%',
      ]

      let colorFilterOptions = this.options.filter ? this.options.filter : [];
      let filterSettings = colorFilterOptions.map((opt) => {
        let filter = opt.toLowerCase().split(':');
        if (filter.length === 2) {
          let match = VALIDFILTERS.find(vf => {
            return (vf.split(':')[0] === filter[0]);
          });
          if (match) {
            match = match.split(':');
            filter[1] += /^\d+$/.test(filter[1]) ? match[match.length - 1] : ''
            return (`${match[match.length - 2]}(${filter[1]})`);
          }
        }
        return ('');
      }).join(' ');
      return (filterSettings);
    },
    _initContainer: function () {
      let tile = L.TileLayer.prototype._initContainer.call(this);
      this._container.style.filter = this.colorFilter();
    },
    updateFilter: function (newFilter) {
      this.options.filter = newFilter;
      if (this._container) {
        this._container.style.filter = this.colorFilter();
      }
    },
  })

  L.tileLayer.colorFilter = function (url, options) {
    return new L.TileLayer.ColorFilter(url, options);
  }















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
        uuid: "71c014ab-a02f-4476-8907-7c12eab8f58f",
        type: "training",
        title: "Micro-business manager",
        company: "the3dopaminelab",
        date: "2020",
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
        uuid: "62ba6812-1258-4e17-811b-71b049ea4385",
        type: "training",
        title: "Micro-business manager",
        company: "the3dopaminelab",
        date: "1965",
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
        uuid: "f6a68b06-2868-41fa-aa5a-bd0c9f616bb5",
        type: "job",
        title: "Micro-business manager",
        company: "the3dopaminelab",
        date: "1990",
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
        uuid: "fbbb60d4-87fe-4cd3-a268-b61dd7ae671b",
        type: "training",
        title: "Micro-business manager",
        company: "the3dopaminelab",
        date: "1992",
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
        uuid: "05b4f173-df61-41e4-a916-2b926e249d42",
        type: "job",
        title: "Consulting engineer",
        company: "Altran",
        date: "2018",
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
      },
      {
        uuid: "de6ff341-ae35-4499-ae9b-8ba62cb8c018",
        type: "job",
        title: "Consulting engineer",
        company: "Altran",
        date: "2001",
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


  Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('moduloIf', function (num, mod, block) {

    if (parseInt(num) % parseInt(mod) === 0) {
      return block.fn(this);
    } else {
      return block.inverse(this);
    }

  });

  Handlebars.registerHelper('sortReverse',
    function (array, options) {
      if (!Array.isArray(array)) {
        ordered = []; i = 0
        Object.keys(array).sort().reverse().forEach(function (key) {
          ordered[i++] = array[key];
        });

        return ordered;
      }
      return array.sort().reverse();
    })

  Handlebars.registerHelper('filterByType',
    function (array, value, options) {
      var newArray = array.filter(obj => obj.type == value);
      return newArray;
    })

  Handlebars.registerHelper('sortByDateDesc',
    function (array, options) {
      var newArray = array.sort((a, b) => (b.date) - (a.date));
      return newArray;
    }
  )


  // grab the source
  const source = document.querySelector("#experiences_template").innerHTML;

  // compile it using Handlebars
  const template = Handlebars.compile(source);

  // get the HTML after passing the template the context
  const html = template(data);


  // get the element to set the new HTML into
  const destination = document.querySelector("#experiences_container");

  // set the new HTML
  destination.innerHTML = html;


  var experienceButtons = $('.experience_button');

  experienceButtons.each(function () {
    $(this).on('click', function () {

      var experience = Object.values(data.experiences).find(obj => obj.uuid == $(this).data("uuid"));

      function displayList(list) {
        var renderedList = "";
        list.forEach(function (el) {
          renderedList += `<li>${el}</li>`
        });
        return renderedList;
      };
      var listOfActivities = displayList(experience.activities);

      $("#experience_modal #experienceModalLabel").html(experience.title)
      $("#experience_modal #experience_activities").html(listOfActivities)
      $('#exampleModal').modal('show');
    });
  });

  AOS.init({
    duration: 650,
    once: true
  });



});
