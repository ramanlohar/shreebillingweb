document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const lightImages = document.querySelectorAll('.light-img');
    const darkImages = document.querySelectorAll('.dark-img');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
      const newTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    function setTheme(theme) {
      htmlElement.setAttribute('data-bs-theme', theme);
      
      // Update button icon
      const icon = themeToggle.querySelector('i');
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      
      // Toggle images based on theme
      if (theme === 'dark') {
        lightImages.forEach(img => img.classList.add('d-none'));
        darkImages.forEach(img => img.classList.remove('d-none'));
      } else {
        lightImages.forEach(img => img.classList.remove('d-none'));
        darkImages.forEach(img => img.classList.add('d-none'));
      }
    }
  });