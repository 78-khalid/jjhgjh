document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
  // About text animation
  const aboutParas = document.querySelectorAll('.about-animate');
  aboutParas.forEach((p, i) => {
    setTimeout(() => {
      p.classList.add('visible');
    }, 300 + i * 350);
  });

  // Navigation animation
  const navItems = document.querySelectorAll('#nav-animated-list li');
  navItems.forEach((li, i) => {
    setTimeout(() => {
      li.classList.add('visible');
    }, 100 + i * 120);
  });
});
