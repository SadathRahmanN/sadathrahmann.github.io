document.addEventListener("DOMContentLoaded", function() {
  // For Moving Name
  var typed = new Typed(".auto", {
    strings: ["SADATH RAHMAN NARANGAVIL", "FREELANCER", "DEVELOPER & DESIGNER"],
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



  // Initialize Swiper
  var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    centeredSlides: true, // Updated property name from "centerSlide" to "centeredSlides"
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
});
