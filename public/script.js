const intakeForm = document.querySelector('#intakeForm');

if (intakeForm) {
  intakeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name')?.value.trim() || '';
    const email = document.querySelector('#email')?.value.trim() || '';
    const phone = document.querySelector('#phone')?.value.trim() || '';
    const projectType = document.querySelector('#projectType')?.value || '';
    const message = document.querySelector('#message')?.value.trim() || '';

    const subject = encodeURIComponent(`Project Review Request - ${projectType}`);
    const body = encodeURIComponent(
      `Hi Bilal,\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject type: ${projectType}\n\nWhat I need help with:\n${message}\n\nThanks,\n${name}`
    );

    window.location.href = `mailto:bmirza@bamdevelopment.co.uk?subject=${subject}&body=${body}`;
  });
}
