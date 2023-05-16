document.addEventListener("DOMContentLoaded", function() {
  // For Moving Name
  var typed = new Typed(".auto", {
    strings: ["SADATH RAHMAN NARANGAVIL", "FREELANCER" ,"DEVELOPER & DESIGNER"],
    typeSpeed: 60,
    backSpeed: 70,
    loop: true,
  });

  // Get all the "Read More" buttons
  var readMoreButtons = document.querySelectorAll('.button');

  // Add event listeners to each button
  readMoreButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var para = this.parentElement.parentElement.querySelector('.full-para');
      para.classList.toggle('show');

      if (para.classList.contains('show')) {
        this.textContent = 'Read Less';
      } else {
        this.textContent = 'Read More';
      }
    });
  });

  // Subscribe button functionality
  var subscribeButton = document.getElementById('subscribe-button');

  function handleSubscribe(event) {
    event.preventDefault();

    // Get the email input value
    var emailInput = document.getElementById('email-input');
    var email = emailInput.value;

    // Perform validation or any other necessary checks here
    if (email) {
      // Print the email value to the console (replace with your desired functionality)
      console.log('Subscribed email:', email);

      // Reset the input value
      emailInput.value = '';

      // Show a success message or perform any other desired actions
      alert('Thank you for subscribing!');
    }
  }

  // Add event listener to the subscribe button
  subscribeButton.addEventListener('click', handleSubscribe);

  // Get the slider element
  var slider = document.querySelector('.projects .slider');

  // Get the width of a single project
  var projectWidth = document.querySelector('.project').offsetWidth;

  // Set the width of the slider based on the number of projects
  slider.style.width = projectWidth * slider.childElementCount + 'px';

  // Slider variables
  var slideIndex = 0;
  var slideInterval;

  // Function to show the next slide
  function nextSlide() {
    var projects = document.querySelectorAll('.project');
    var totalSlides = projects.length;

    projects[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + 1) % totalSlides;
    projects[slideIndex].style.display = 'block';
  }

  // Start the auto slide
  function startSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
  }

  // Stop the auto slide
  function stopSlide() {
    clearInterval(slideInterval);
  }

  // Initialize the slider
  startSlide();
});
