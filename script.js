// Active link switching on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // Adjust based on the fixed sidebar/padding
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current) && current !== '') {
      link.classList.add('active');
    }
  });
});