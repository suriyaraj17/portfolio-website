// ✅ Toggle dropdown on click
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});


// ✅ Contact Form Validation & Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // ✅ Basic Validation
  if (!name || !email || !subject || !message) {
    alert("⚠️ Please fill in all fields before submitting!");
    return;
  }

  // ✅ Email Format Check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address!");
    return;
  }

  // ✅ Success
  alert("✅ Message sent successfully!");

  // ✅ Clear form fields
  contactForm.reset();
});
