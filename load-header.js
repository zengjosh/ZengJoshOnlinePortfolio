document.addEventListener("DOMContentLoaded", function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('open');
      });

      // Close sidebar when clicking outside
      document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
          navMenu.classList.remove('open');
          const activeDropdowns = navMenu.querySelectorAll('.active');
          activeDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
      });

      // Function to handle dropdown toggling for multiple levels
      function handleDropdownToggle(selector) {
        const toggles = navMenu.querySelectorAll(selector);
        toggles.forEach(toggle => {
          toggle.addEventListener('click', function(e) {
            const parent = this.parentElement;
            const hasDropdownContent = parent.querySelector('.dropdown-content');

            // Only prevent default if the current element has dropdown content
            if (hasDropdownContent) {
              e.preventDefault();
              e.stopPropagation();
              parent.classList.toggle('active');
            }
          });
        });
      }

      handleDropdownToggle('.dropdown > .nav-link');
      handleDropdownToggle('.dropdown-submenu > .nav-link');
    })
    .catch(error => console.error('Error loading header:', error));
});
