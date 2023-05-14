// Get the form element
const form = document.getElementById("myForm");

// Listen for the form submission event
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the email input field
  const email = document.getElementById("mail").value;

  // Send the email address to your server-side script
  // using AJAX or fetch

  // Optionally, display a success message to the user
  alert("Thank you for subscribing!");
});

// For name moving
var typed = new Typed(".auto", {
  strings: ["SADATH RAHMAN NARANGAVIL", "DEVELOPER"],
  typeSpeed: 60,
  backSpeed: 70,
  loop: true,
});

