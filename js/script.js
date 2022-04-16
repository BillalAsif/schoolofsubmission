document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, 'left');   
  });

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let instances = M.Parallax.init(elems, 991);
  });
