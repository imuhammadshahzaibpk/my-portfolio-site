  // Select all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove 'active' from all links
      navLinks.forEach(nav => nav.classList.remove('active'));
      // Add 'active' to clicked link
      this.classList.add('active');
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const hireBtn = document.querySelector('.custom-btn');
  const modal = document.getElementById('hireFormModal');
  const closeBtn = document.querySelector('.modal .close');
  const form = document.getElementById('hireForm');

  // Open modal
  hireBtn.addEventListener('click', () => modal.style.display = 'block');

  // Close modal
  closeBtn.addEventListener('click', () => modal.style.display = 'none');

  // Close if clicked outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Form submission via EmailJS
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_uzz2b3x', 'template_x7b1ygr', this)
      .then(() => {
        alert('Your request has been sent successfully!');
        modal.style.display = 'none';
        this.reset();
      }, (error) => {
        alert('Failed to send request. Please try again.');
        console.log(error);
      });
  });
});

// Project Tabs Filtering
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const projects = document.querySelectorAll(".project-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-category");

      projects.forEach(project => {
        project.style.display = project.getAttribute("data-category") === category ? "block" : "none";
      });
    });
  });

  // Show NGO projects by default
  document.querySelector('.tab-btn[data-category="NGO"]').click();
});


