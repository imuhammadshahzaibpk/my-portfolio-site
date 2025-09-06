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
