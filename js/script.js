let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.fixed-action-btn');
  let instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, 'left');
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems, '991');
});

let date = new Date();
document.getElementById('date').textContent = "@ " + date.getFullYear() + " School Of Submission"



//hyperlink scroll events
let homeButton = document.getElementById("homeButton");
let homeSection = document.getElementById("homeSection");
let classesButton = document.getElementById("classesButton");
let classesSection = document.getElementById("classesSection");
let aboutButton = document.getElementById("aboutButton");
let aboutSection = document.getElementById("aboutSection");
let contactButton = document.getElementById("contactButton");
let contactSection = document.getElementById("contactSection");

homeButton.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: 'smooth' });
})
classesButton.addEventListener("click", () => {
  classesSection.scrollIntoView({ behavior: 'smooth' });
})
aboutButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
})
contactButton.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
})

//Mobile Links
let homeButtonMobile = document.getElementById("homeButtonMobile");
let classesButtonMobile = document.getElementById("classesButtonMobile");
let aboutButtonMobile = document.getElementById("aboutButtonMobile");
let contactButtonMobile = document.getElementById("contactButtonMobile");
let closeButtonMobile = document.getElementById("closeButtonMobile");

homeButtonMobile.addEventListener("click", () => {
  closeButtonMobile.click();
  homeSection.scrollIntoView({ behavior: 'smooth' });
})
classesButtonMobile.addEventListener("click", () => {
  closeButtonMobile.click();
  classesSection.scrollIntoView({ behavior: 'smooth' });
})
aboutButtonMobile.addEventListener("click", () => {
  closeButtonMobile.click();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
})
contactButtonMobile.addEventListener("click", () => {
  closeButtonMobile.click();
  contactSection.scrollIntoView({ behavior: 'smooth' });
})


//Scroll up button
let scrollButton = document.getElementById("scrollButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

scrollButton.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: 'smooth' });
})

//carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3,
      }
    }
  });
});