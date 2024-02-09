const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});



// menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');
const login = document.querySelector('.login');
hamburger.addEventListener('click', () => {
 navLinks.classList.toggle('active');
 login.classList.toggle('active');
});