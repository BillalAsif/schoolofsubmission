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

