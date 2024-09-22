$(document).ready(function () {
  // LOADER
  setTimeout(function () {
    $("html, body").css({
      overflow: "auto",
    });
    $("#loader-wrapper").removeClass("d-flex");
    $("#loader-wrapper").hide();
  }, 1000);

  // DYNAMIC TEXT
  var typed = new Typed("#animated_text", {
    strings: ["a web developer", "an engineer", "a project manager"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
  });

  var typed2 = new Typed("#animated_text_2", {
    strings: ["a web developer", "an engineer", "a project manager"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
  });

  // PARALLAX

  // Populate images from data attributes.
  var scrolled = $(window).scrollTop();
  $(".parallax").each(function (index) {
    var imageSrc = $(this).data("image-src");
    var imageHeight = $(this).data("height");
    $(this).css("background-image", "url(" + imageSrc + ")");
    $(this).css("height", imageHeight);

    // Adjust the background position.
    var initY = $(this).offset().top;
    var height = $(this).height();
    var diff = scrolled - initY;
    var ratio = Math.round((diff / height) * 100);
    $(this).css(
      "background-position",
      "center " + parseInt(-(ratio * 1.5)) + "px"
    );
  });

  // Attach scroll event to window. Calculate the scroll ratio of each element
  // and change the image position with that ratio.
  // https://codepen.io/lemagus/pen/RWxEYz
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    $(".parallax").each(function (index, element) {
      var initY = $(this).offset().top;
      var height = $(this).height();
      var endY = initY + $(this).height();

      // Check if the element is in the viewport.
      var visible = isInViewport(this);
      if (visible) {
        var diff = scrolled - initY;
        var ratio = Math.round((diff / height) * 100);
        $(this).css(
          "background-position",
          "center " + parseInt(-(ratio * 1.5)) + "px"
        );
      }
    });
  });

  // Check if the element is in the viewport.
  // http://www.hnldesign.nl/work/code/check-if-element-is-visible/
  function isInViewport(node) {
    // Am I visible? Height and Width are not explicitly necessary in visibility
    // detection, the bottom, right, top and left are the essential checks. If an
    // image is 0x0, it is technically not visible, so it should not be marked as
    // such. That is why either width or height have to be > 0.
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // FORM

  let submitted = false;

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
    // $("#gform").on("submit", function (e) {
    //   $("#gform *").fadeOut(2000);
    //   $("#gform").prepend("Your submission has been processed...");
    // });
  })();

  // RATING
  // let stars = document.getElementsByClassName("fa-star");
  let stars = $(".fa-star");
  let rating = $("#rating");

  var currentRating = 0;

  if ($("#feedback").is(":checked")) {
    $(".rating_container").removeClass("d-none");
    $(".rating_container").addClass("d-block");
  }

  // $("input[type=radio]").change(function () {
  //   if ($(this).val() == "Leave a feedback") {
  //     $(".rating_container").removeClass("d-none");
  //     $(".rating_container").addClass("d-block");
  //     $("#rating").removeAttr("disabled");
  //   } else {
  //     $(".rating_container").removeClass("d-block");
  //     $(".rating_container").addClass("d-none");
  //     $("#rating").attr("disabled", "disabled");
  //   }
  // });

  $("#select_object").change(function () {
    if ($(this).val() == "Leave a feedback") {
      $(".rating_container").removeClass("d-none");
      $(".rating_container").addClass("d-flex");
      $("#rating").removeAttr("disabled");
    } else {
      $(".rating_container").removeClass("d-flex");
      $(".rating_container").addClass("d-none");
      $("#rating").attr("disabled", "disabled");
      currentRating = 0;
      $("#rating").val(0);
      $("#mark").text(0);
      $(document).ready(function () {
        $(".fa-star").css(
          "color",
          getComputedStyle(document.documentElement).getPropertyValue(
            "--mdb-body-color"
          )
        );
      });
    }
  });

  // HTMLCollection to Array
  stars = Array.prototype.slice.call(stars);
  stars.forEach((star, index) => {
    star.addEventListener(
      "click",
      (e) => {
        for (let i = 0; i < stars.length; i++) {
          stars[i].style.color = "";
        }
        colorStar(index);
        currentRating = index + 1;
        $("#rating").val(currentRating);
        $("#mark").text(currentRating);
      },
      false
    );
  });

  const colorStar = (n) => {
    if (n < 0) return;
    stars[n].style.color = "#cf7d8e";
    colorStar(n - 1);
  };

  // TOAST

  const toastTrigger = document.getElementById("submit_form");
  const successToast = document.getElementById("successToast");
  const dangerToast = document.getElementById("dangerToast");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {
      if ($("#gform").find(".invalid-feedback").length == 0) {
        const toast = new bootstrap.Toast(successToast);
        toast.show();
      } else {
        const toast = new bootstrap.Toast(dangerToast);
        toast.show();
      }
    });
  }

  // Map

  // var map = L.map('map').setView([47.497913, 19.040236], 13);
  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   className: 'map-tiles'
  // }).addTo(map);
  // var marker = L.marker([47.497913, 19.040236]).addTo(map);

  // Light filter
  let defaultFilter = ["hue:0deg", "invert:0%"];
  // Dark filter
  let darkFilter = ["hue:180deg", "invert:100%"];

  let map = L.map("map", { scrollWheelZoom: false }).setView(
    [47.497913, 19.040236],
    13
  );

  function initMap(filterApplied) {
    L.tileLayer
      .colorFilter("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
        filter: filterApplied,
      })
      .addTo(map);

    L.TileLayer.ColorFilter = L.TileLayer.extend({
      intialize: function (url, options) {
        L.TileLayer.prototype.initialize.call(this, url, options);
      },
      colorFilter: function () {
        let VALIDFILTERS = [
          "blur:px",
          "brightness:%",
          "bright:brightness:%",
          "bri:brightness:%",
          "contrast:%",
          "con:contrast:%",
          "grayscale:%",
          "gray:grayscale:%",
          "hue-rotate:deg",
          "hue:hue-rotate:deg",
          "hue-rotation:hue-rotate:deg",
          "invert:%",
          "inv:invert:%",
          "opacity:%",
          "op:opacity:%",
          "saturate:%",
          "saturation:saturate:%",
          "sat:saturate:%",
          "sepia:%",
          "sep:sepia:%",
        ];

        let colorFilterOptions = this.options.filter ? this.options.filter : [];
        let filterSettings = colorFilterOptions
          .map((opt) => {
            let filter = opt.toLowerCase().split(":");
            if (filter.length === 2) {
              let match = VALIDFILTERS.find((vf) => {
                return vf.split(":")[0] === filter[0];
              });
              if (match) {
                match = match.split(":");
                filter[1] += /^\d+$/.test(filter[1])
                  ? match[match.length - 1]
                  : "";
                return `${match[match.length - 2]}(${filter[1]})`;
              }
            }
            return "";
          })
          .join(" ");
        return filterSettings;
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
    });

    L.tileLayer.colorFilter = function (url, options) {
      return new L.TileLayer.ColorFilter(url, options);
    };

    var myIcon = L.icon({
      iconUrl: "./assets/images/logo.png",
      iconSize: [49, 59],
      // iconAnchor: [22, 94],
      // popupAnchor: [-3, -76],
      // shadowUrl: 'my-icon-shadow.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });
    L.marker([47.497913, 19.040236], { icon: myIcon }).addTo(map);
  }

  // Init with light filter
  // initMap(defaultFilter);
  // Init with dark filter

  initMap(darkFilter);

  // data

  const data = {
    about: {
      content:
        "I’m a dedicated Fullstack Developer with a background in engineering and project management. My journey into software development was sparked during the Covid pandemic and personal life events, when I realized I was increasingly drawn to automating repetitive tasks in my daily work. This passion for problem-solving and efficiency led me to dive deeper into programming. I’m hardworking, tolerant, and thrive in social environments. I’m particularly excited about new technologies, AI, and prompt engineering, constantly looking to expand my skill set in these areas.",
    },
    skills: [
      {
        title: "Frontend",
        confidenceLevel: "80",
        technologies: [
          "Angular",
          "Typescript",
          "Javascript",
          "Jquery",
          "CodeIgniter",
          "PHP",
        ],
      },
      {
        title: "Backend",
        confidenceLevel: "65",
        technologies: [
          "Java",
          "Spring",
          "NodeJS",
          "CodeIgniter",
          "PHP",
          "MySQL",
        ],
      },
      {
        title: "Devops",
        confidenceLevel: "65",
        technologies: ["Jenkins", "sonarqube"],
      },
      {
        title: "Project management tools",
        confidenceLevel: "65",
        technologies: ["Trello"],
      },
      {
        title: "Design",
        confidenceLevel: "65",
        technologies: ["Java", "Spring", "Javascript", "Jquery"],
      },
    ],
    languages: [
      {
        title: "French",
        code: "fr",
        level: "native",
        score: "100",
      },
      {
        title: "English",
        code: "en",
        level: "fluent, professional",
        score: "90",
      },
      {
        title: "Hungarian",
        code: "hu",
        level: "intermediate",
        score: "60",
      },
      {
        title: "Spanish",
        code: "es",
        level: "beginner",
        score: "35",
      },
    ],
    trainings: [
      {
        title: "Full-stack web developer",
      },
      {
        title: "Engineering degree",
      },
    ],
    technologies: [
      {
        title: "Git",
        subtitle: "",
        category: "version control",
        icon: "<i class='fa-brands fa-git-alt fa-2xl'></i>",
        description: "",
        link: "https://git-scm.com/",
      },
      {
        title: "Angular",
        subtitle: "",
        category: "front-end framework",
        icon: "<svg xmlns='http://www.w3.org/2000/svg' height='20' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z'/></svg>",
        description: "",
        link: "https://angularjs.org/",
      },
      {
        title: "Bootstrap",
        subtitle: "",
        category: "front-end library",
        icon: "<i class='fa-brands fa-bootstrap fa-2xl'></i>",
        description: "",
        link: "https://angularjs.org/",
      },
      {
        title: "Bootstrap",
        subtitle: "",
        category: "front-end library",
        icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='nodemon'><path d='M22.53 23.92h-.001l-.002.002z'></path><path fill='#4D4B3C' d='M22.981 23.431 23 8.84a1.127 1.127 0 0 0-.587-.985l-.006-.003v-.001l-.721-.398c1.109-1.569 1.77-3.927.94-7.453 0 0-1.871 5.029-5.632 4.863l-4.402-2.431a1.18 1.18 0 0 0-.538-.15h-.104a1.208 1.208 0 0 0-.546.152l-4.4 2.429C3.245 5.03 1.374 0 1.374 0c-.831 3.526-.167 5.884.941 7.453l-.722.398A1.133 1.133 0 0 0 1 8.839l.022 14.591c0 .203.11.392.296.491a.58.58 0 0 0 .589 0l5.832-3.204a1.14 1.14 0 0 0 .593-.987v-6.817c0-.406.225-.783.592-.984l2.483-1.372c.169-.097.373-.154.59-.154h.005c.202 0 .41.05.589.154l2.483 1.372c.368.201.592.578.592.984v6.817c0 .405.228.779.594.987l5.831 3.204a.606.606 0 0 0 .597-.001.563.563 0 0 0 .293-.489z'></path><path d='m11.326 2.435.002-.001.004-.002zM1.903 23.92l-.002.001H1.9z'></path></svg>",
        description: "",
        link: "https://angularjs.org/",
      },
    ],
    experiences: [
      {
        uuid: "773dfc1d-5af7-4269-bc67-cae74f4b4469",
        type: "work",
        title: "Web developer (fullstack)",
        company: "E-apps",
        date: "2024",
        dates: "Apr 2024 - Now",
        location: "Szentendre, HUNGARY",
        description:
          "International mobility applications development for major French listed companies (CAC 40).",
        activities: [
          "Web development",
          "Project management",
          "Customer relationship",
        ],
        field: "IT",
      },
      {
        uuid: "5fe57290-179a-4beb-9f6c-08c19b8a2096",
        type: "work",
        title: "CDO (Chief Design Officer) - Web developer (fullstack)",
        company: "Raise Your Concern Kft.",
        date: "2023",
        dates: "Sep 2023 - Now",
        location: "Budapest, HUNGARY",
        description: "B2B multi-language whistleblower platform.",
        activities: [
          "Web development",
          "Project management",
          "Company leadership",
          "Customer relationship",
        ],
        field: "IT",
      },
      {
        uuid: "bbb7cb88-48c6-44e5-8b80-ab5b4b27c472",
        type: "work",
        title: "Web developer (frontend)",
        company: "Yourosoft Kft.",
        date: "2022",
        dates: "Jun 2022 - Apr 2024",
        location: "Budapest, HUNGARY",
        description:
          "B2B multi-language web applications development mainly for major French listed companies (CAC 40).",
        activities: ["Web development", "Project management"],
        field: "IT",
      },
      {
        uuid: "71c014ab-a02f-4476-8907-7c12eab8f58f",
        type: "work",
        title: "Micro-business manager",
        company: "the3dopaminelab",
        date: "2020",
        dates: "June 2020 - Dec 2022",
        location: "Vitré, FRANCE - Budapest, HUNGARY",
        description: "3D Printing services & products.",
        activities: [
          "Project management",
          "Online store",
          "Dropshipping",
          "Brand design",
          "Accounting",
          "3D printing",
          "CAD",
        ],
        field: null,
      },
      {
        uuid: "f6a68b06-2868-41fa-aa5a-bd0c9f616bb5",
        type: "work",
        title: "Technical project leader",
        company: "Altran & ArianeGroup",
        date: "2019",
        dates: "Sep 2019 - Nov 2020",
        location: "Issac, FRANCE",
        description:
          "Technical leader and main customer contact fortool development of BAL (Building Assembly Line) of Ariane 6 Launcher.",
        activities: [
          "Project management",
          "Bill of specifications",
          "Supplier management",
          "Customer relationship",
          "CAD",
        ],
        field: null,
      },
      {
        uuid: "05b4f173-df61-41e4-a916-2b926e249d42",
        type: "work",
        title: "MRSS project leader (Magnet Resonance Siting & Shielding)",
        company: "GE Healthcare",
        date: "2017",
        dates: "Mar 2017 - Sep 2019",
        location: "Budapest, HUNGARY",
        description:
          "MRI rooms environment study for Europe, EGM & Africa regions.",
        activities: [
          "Magnetic shield design",
          "RF cages examination",
          "Steel mass analysis",
          "Helium pressure drops calculations",
          "Vibration examination",
          "EMI analysis",
          "Tools & processes improvement",
        ],
        field: null,
      },
      {
        uuid: "de6ff341-ae35-4499-ae9b-8ba62cb8c018",
        type: "work",
        title: "CAD Designer",
        company: "GE Healthcare",
        date: "2015",
        dates: "Oct 2014 - Mar 2017",
        location: "Budapest, HUNGARY",
        description:
          "Technical support to PMIs (Project Manager of Installations) for the implementation of GE medical equipment.",
        activities: [
          "Installation plans design",
          "GE medical equipment installation template creation from PIMs (Pre-Installation Manuals)",
          "Main contact with Western Europe PMIs (Project Manager of Installations) to fulfill local requirements",
        ],
        field: null,
      },
    ],
    projects: [
      {
        uuid: "00a11055-9978-4cd5-8033-abdb8d8880a8",
        title: "Raise Your Concern",
        background_image: "ryc-1.png",
        project_type: "professional",
        project_logo: "",
        company: "Raise Your Concern kft.",
        company_logo: "",
        date: "Sep. 2023 - Now",
        description:
          "A whistleblower platform to help people sending alerts safely in a confidential or anonymous way",
        front_website_link: "https://raiseyourconcern.com/",
        platform_website_link: "",
        link: "https://raiseyourconcern.com/",
        status: "Bêta",
        progress: "90",
        technologies: [
          "Code Igniter 4",
          "PHP",
          "Handlebars",
          "jquery",
          "javascript",
        ],
      },
      {
        uuid: "2e9b07a8-3a9b-4499-b76c-cf4e11ad3556",
        title: "MyGreenStudio",
        background_image: "mygreenstudio-1.png",
        project_type: "professional",
        project_logo: "",
        company: "Yourosoft kft.",
        company_logo: "",
        date: "Jun. 2022 - Dec. 2023",
        description: "Digital platform to design sustainable interior",
        front_website_link: "https://mygreenstudio.com/en/",
        platform_website_link:
          "https://workspace.mygreenstudio.com/en/anonymous/sign-in",
        link: "https://mygreenstudio.com/en/",
        status: "Bêta",
        progress: "90",
        technologies: [
          "Code Igniter 4",
          "PHP",
          "Handlebars",
          "jquery",
          "javascript",
        ],
      },
      {
        uuid: "151dd40a-2d7c-4167-9f76-4afa1b1b84e2",
        title: "MyExpatMobility",
        background_image: "myexpatmobility.png",
        project_type: "professional",
        project_logo: "",
        company: "Yourosoft kft. & E-apps",
        company_logo: "",
        date: "Sep. 2022 - Now",
        description:
          "Platform to ease international mobility processes between major French listed companies and service suppliers",
        front_website_link: "https://www.myexpatdata.com/",
        platform_website_link: "",
        link: "https://www.myexpatdata.com/",
        status: "Alpha",
        progress: "80",
        technologies: [
          "Code Igniter 4",
          "PHP",
          "Handlebars",
          "jquery",
          "javascript",
          "SpringBoot",
          "Java",
        ],
      },
      {
        uuid: "719763cc-2cb0-43da-a740-c473b5c9b107",
        title: "MyExpatData",
        background_image: "myexpatdata.png",
        project_type: "professional",
        project_logo: "",
        company: "Yourosoft kft. & E-apps",
        company_logo: "",
        date: "Sep. 2023 - Now",
        description:
          "Platform to ease international mobility processes for major French listed companies",
        front_website_link: "https://www.myexpatdata.com/",
        link: "https://www.myexpatdata.com/",
        platform_website_link: "",
        status: "Stable",
        progress: "80",
        technologies: [
          "Code Igniter 3",
          "PHP",
          "Handlebars",
          "jquery",
          "javascript",
        ],
      },
      {
        uuid: "6be80973-50c3-45f5-bf0a-386994d16f86",
        title: "Kin.run",
        background_image: "kinrun.png",
        project_type: "professional",
        project_logo: "",
        company: "Yourosoft kft.",
        company_logo: "",
        date: "Jan. 2023 - Aug. 2023",
        description:
          "Platform to connect runners with races. (Similar to Strava)",
        front_website_link: "https://kin.run/",
        platform_website_link: "",
        link: "https://kin.run/",
        status: "Devlopment",
        progress: "10",
        technologies: ["Angular", "SpringBoot", "Java"],
      },
      {
        uuid: "2b94358f-5b4a-4d1f-9dcf-e25a292cf6ce",
        title: "MyPortfolio",
        background_image: "myportfolio.png",
        project_type: "perso",
        project_logo: "",
        company: "",
        company_logo: "",
        date: "Nov. 2020 - Dec. 2022",
        description:
          "A simple static website to present my projects and who I am.",
        front_website_link: "https://klem35.github.io/",
        platform_website_link: "",
        link: "https://klem35.github.io/",
        status: "stable",
        progress: "100",
        technologies: ["Handlebars", "jquery", "javascript"],
      },
      {
        uuid: "eb0b6a3b-c0a3-41b6-b6c1-0c707809b38c",
        title: "RedditClone",
        background_image: "theredditclone.png",
        project_type: "school",
        project_logo: "",
        company: "GreenFox Academy",
        company_logo: "",
        date: "Apr. 2022 - June. 2022",
        description:
          "A school project where a clone of the Reddit platform (as its name shows) was created.",
        front_website_link: "",
        platform_website_link: "",
        link: "",
        status: "inactive",
        progress: "100",
        technologies: ["Angular", "NodeJS", "MySQL"],
      },
      {
        uuid: "eb0b6a3b-c0a3-41b6-b6c1-0c707809b38c",
        title: "Ecommerce",
        background_image: "the3dopaminelab.png",
        project_type: "professional",
        project_logo: "",
        company: "The3DopamineLab",
        company_logo: "",
        date: "Jan. 2021 - Dec. 2022",
        description: "A platform to offer 3D printing services and products",
        front_website_link: "",
        platform_website_link: "",
        link: "",
        status: "inactive",
        progress: "100",
        technologies: ["Wordpress"],
      },
    ],
    feedbacks: [
      {
        uuid: "16b080a8-4024-494e-9f4b-021ee62ab1d4",
        type: "award",
        first_name: "Ergin",
        last_name: "Aydinalp",
        gender: "male",
        position: "Installation Support Leader, Europe, EGM & Africa",
        company: "GE Healthcare",
        date: "2017 Q1",
        text: "Customers determine our success.",
        rate: 5,
        image: null,
      },
      {
        uuid: "70f04f6f-f3aa-4ff7-9c23-f3357b63edfb",
        type: "award",
        first_name: "Design",
        last_name: "Center",
        gender: "male",
        position: "",
        company: "GE Healthcare",
        date: "2016 Q4",
        text: "Most devoted designer.",
        rate: 5,
        image: null,
      },
      {
        uuid: "ab5a5484-02e2-47d4-a891-532b0aa5788b",
        type: "award",
        first_name: "Róbert",
        last_name: "Pároczai,",
        gender: "male",
        position: "Design Center Manager, Europe, EGM & Africa. GE Healthcare",
        company: "GE Healthcare",
        date: "2015 Q4",
        text: "Customers determine our success.",
        rate: 5,
        image: null,
      },
      {
        uuid: "363aef31-5956-415f-9c0e-027608a82b92",
        type: "award",
        first_name: "Design",
        last_name: "Center",
        gender: "male",
        position: "",
        company: "GE Healthcare",
        date: "2015 Q4",
        text: "Most devoted designer.",
        rate: 5,
        image: null,
      },
    ],
  };

  Handlebars.registerHelper("ifCond", function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper("moduloIf", function (num, mod, block) {
    if (parseInt(num) % parseInt(mod) === 0) {
      return block.fn(this);
    } else {
      return block.inverse(this);
    }
  });

  Handlebars.registerHelper("sortReverse", function (array, options) {
    if (!Array.isArray(array)) {
      ordered = [];
      i = 0;
      Object.keys(array)
        .sort()
        .reverse()
        .forEach(function (key) {
          ordered[i++] = array[key];
        });

      return ordered;
    }
    return array.sort().reverse();
  });

  Handlebars.registerHelper("filterByType", function (array, value, options) {
    var newArray = array.filter((obj) => obj.type == value);
    return newArray;
  });

  Handlebars.registerHelper("filterByField", function (array, value, options) {
    var newArray = array.filter((obj) => obj.field == value);
    return newArray;
  });

  Handlebars.registerHelper("sortByDateDesc", function (array, options) {
    var newArray = array.sort((a, b) => b.date - a.date);
    return newArray;
  });

  Handlebars.registerHelper("times", function (n, m, block) {
    var accum = "";
    for (var i = 0; i < n - m; ++i) accum += block.fn(i);
    return accum;
  });

  // ABOUT

  // grab the source
  const about_source = document.querySelector("#about_template").innerHTML;

  // compile it using Handlebars
  const about_template = Handlebars.compile(about_source);

  // get the HTML after passing the template the context
  const about_html = about_template(data);

  // get the element to set the new HTML into
  const about_destination = document.querySelector("#about_container");

  // set the new HTML
  about_destination.innerHTML = about_html;

  // EXPERIENCES

  // grab the source
  const experiences_source = document.querySelector(
    "#experiences_template"
  ).innerHTML;

  // compile it using Handlebars
  const experiences_template = Handlebars.compile(experiences_source);

  // get the HTML after passing the template the context
  const experiences_html = experiences_template(data);

  // get the element to set the new HTML into
  const experiences_destination = document.querySelector(
    "#experiences_container"
  );

  // set the new HTML
  experiences_destination.innerHTML = experiences_html;

  var experienceButtons = $(".experience_button");

  experienceButtons.each(function () {
    $(this).on("click", function () {
      var experience = Object.values(data.experiences).find(
        (obj) => obj.uuid == $(this).data("uuid")
      );

      function displayList(list) {
        var renderedList = "";
        list.forEach(function (el) {
          renderedList += `<li>${el}</li>`;
        });
        return renderedList;
      }
      var listOfActivities = displayList(experience.activities);
      var badge = "";
      if (experience.field) {
        badge = ` <span class="float-end badge text-bg-warning">${experience.field}</span>`;
      }

      $("#experience_modal #experienceModalLabel").html(experience.title);
      $("#experience_modal #experienceModalLabel").prepend(badge);
      $("#experience_modal #experience_activities").html(listOfActivities);
      $("#experience_modal").modal("show");
    });
  });

  // // SKILLS

  // // grab the source
  // const skills_source = document.querySelector("#skills_template").innerHTML;

  // // compile it using Handlebars
  // const skills_template = Handlebars.compile(skills_source);

  // // get the HTML after passing the template the context
  // const skills_html = skills_template(data);

  // // get the element to set the new HTML into
  // const skills_destination = document.querySelector("#skills_container");

  // // set the new HTML
  // skills_destination.innerHTML = skills_html;

  // var skills = data.skills;
  // var skillsContainer = $("#skills_container");

  // $(window).on("scroll resize", checkIfInView);
  // $(window).trigger("scroll");

  // PROJECTS

  // grab the source
  const projects_source =
    document.querySelector("#projects_template").innerHTML;

  // compile it using Handlebars
  const projects_template = Handlebars.compile(projects_source);

  // get the HTML after passing the template the context
  const projects_html = projects_template(data);

  // get the element to set the new HTML into
  const projects_destination = document.querySelector("#projects_container");

  // set the new HTML
  projects_destination.innerHTML = projects_html;

  var projects = data.projects;
  var projectsContainer = $("#projects_container");
  var numberOfProjects = data.projects.length;
  $("#projects_notification").text(numberOfProjects);

  // projects.forEach(function (project) {
  //   var project_index = projects.indexOf(project);

  //   // var block = `<div class="col-4">
  //   // <div class="card project_card" data-project-index="${project_index}">
  //   // <img class="project_background" src="assets/images/${project.background_image}">
  //   // <span class="hover_project_card">
  //   // <i class="fa fa-plus"></i>
  //   // </span>

  //   // </div>`;
  //   // projectsContainer.append(block);

  // })

  $(".project_card").each(function (e) {
    $(this).on("mouseenter", function hoverProjectCard(e) {
      // $("span", this).css("opacity", 1);
      $(".card-body", this).css("opacity", 1);
      $(".card-body", this).removeClass("d-none");
      $(".card-body", this).addClass("d-block");
    });
    $(this).on("mouseleave", function hoverProjectCard(e) {
      // $("span", this).css("opacity", 0);
      $(".card-body", this).css("opacity", 0);
      $(".card-body", this).removeClass("d-block");
      $(".card-body", this).addClass("d-none");
    });
  });

  $(".project_card").each(function (el) {
    $(this).on("mouseenter", el, function (event) {
      animateSkillsProgressBar($(".project_progress_bar", this));
      $(this).off(event);
    });
  });

  // $(".project_card").each(function () {
  //   $(this).on("click", function () {
  //     var project = Object.values(data.projects).find(
  //       (obj) => obj.uuid == $(this).data("uuid")
  //     );
  //     var project_progress = `
  //     <div class="progress" style="align-self: center; height:20px; background-color: transparent">
  //         <div class="progress-bar project_progress_bar" role="progressbar" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100" style="height: 4px; align-self: center;"></div><span class="progress-bar-value"></span>
  //       </div>
  //     `;
  //     $("#project_modal #projectModalLabel").html(project.title);
  //     $("#project_modal .modal-body").html(project_progress);

  //     // $bar = $("#project_modal").find(".progress-bar");

  //     $("#project_modal").modal("show");

  //     animateSkillsProgressBar($(".project_progress_bar"))

  //   });
  // });

  // LANGUAGES

  // grab the source
  const languages_source = document.querySelector(
    "#languages_template"
  ).innerHTML;

  // compile it using Handlebars
  const languages_template = Handlebars.compile(languages_source);

  // get the HTML after passing the template the context
  const languages_html = languages_template(data);

  // get the element to set the new HTML into
  const languages_destination = document.querySelector("#languages_container");

  // set the new HTML
  languages_destination.innerHTML = languages_html;

  // Language pies
  if (document.readyState !== "loading") {
    animateCircleProgressBar();
  } else {
    window.addEventListener("DOMContentLoaded", () => {
      animateCircleProgressBar();
    });
  }

  // FEEDBACKS & REWARDS

  // grab the source
  const feedbacks_source = document.querySelector(
    "#feedbacks_template"
  ).innerHTML;

  // compile it using Handlebars
  const feedbacks_template = Handlebars.compile(feedbacks_source);

  // get the HTML after passing the template the context
  const feedbacks_html = feedbacks_template(data);

  // get the element to set the new HTML into
  const feedbacks_destination = document.querySelector("#feedbacks_container");

  // set the new HTML
  feedbacks_destination.innerHTML = feedbacks_html;

  AOS.init({
    duration: 650,
    once: true,
  });

  $("#toggle_theme").on("click", function () {
    if ($("#mdb_css_file").attr("href") == "./assets/css/mdb.dark.css") {
      $("#mdb_css_file").attr("href", "./assets/css/mdb.css");
      $("#custom_css_file").attr("href", "./assets/css/custom.css");
      $(this).html('<i class="fas fa-moon"></i>');
      var brightFilter = ["hue:0deg", "invert:0%"];
      initMap(brightFilter);
    } else {
      $("#mdb_css_file").attr("href", "./assets/css/mdb.dark.css");
      $("#custom_css_file").attr("href", "./assets/css/custom.dark.css");
      $(this).html('<i class="fas fa-sun"></i>');

      var darkFilter = ["hue:180deg", "invert:100%"];
      initMap(darkFilter);
    }
  });

  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");
  var $backToTopButton = $("#btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  // Scroll progress bar
  window.onscroll = function () {
    scrollProgressBar();
    scrollFunction();
  };

  function scrollFunction() {
    if (screen.width >= 992) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        if ($("#btn-back-to-top").hasClass("d-none")) {
          $("#btn-back-to-top").addClass("d-flex");
          $("#btn-back-to-top").removeClass("d-none");
        }
        $("nav").css("visibility", "hidden");
        $(".progress_header").css("top", 0);
      } else {
        $("#btn-back-to-top").removeClass("d-flex");
        $("#btn-back-to-top").addClass("d-none");
        $("nav").css("visibility", "visible");
        $(".progress_header").css("top", "58.59px");
      }
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollProgressBar() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
});

function animateCircleProgressBar() {
  // get all progress bar
  const elements = [].slice.call(document.querySelectorAll(".pie"));
  // call to function
  const circle = new CircularProgressBar("pie");
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // if IntersectionObserver is supported by the browser
  if ("IntersectionObserver" in window) {
    const config = {
      root: null,
      rootMargin: "0px",
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

function animateSkillsProgressBar(el) {
  var delay = 1000;
  el.each(function (i) {
    $(this)
      .delay(delay * i)
      .animate({ width: $(this).attr("aria-valuenow") + "%" }, delay);

    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).attr("aria-valuenow"),
        },
        {
          duration: delay,
          easing: "swing",
          step: function (now) {
            $(this)
              .next()
              .text(Math.ceil(now) + "%");
          },
        }
      );
  });
}

var count = 0;
function checkIfInView() {
  var windowHeight = $(window).height();
  var windowTopPosition = $(window).scrollTop();
  var windowBottomPosition = windowTopPosition + windowHeight;

  var $element = $("#skills");
  var elementHeight = $element.outerHeight();
  var elementTopPosition = $element.offset().top;
  var elementBottomPosition = elementTopPosition + elementHeight;
  if (
    elementBottomPosition >= windowTopPosition &&
    elementTopPosition <= windowBottomPosition
  ) {
    // $element.addClass("in-view");

    count++;
  }

  if (count == 1) {
    animateSkillsProgressBar($(".skill-progress-bar"));
  }
}
