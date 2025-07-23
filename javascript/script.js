document.addEventListener("DOMContentLoaded", function() {
    // Initialize Typed.js for animated name
    try {
        const typed = new Typed(".auto", {
            strings: ["SADATH RAHMAN NARANGAVIL", "FREELANCER", "DEVELOPER & DESIGNER"],
            typeSpeed: 60,
            backSpeed: 70,
            loop: true,
            backDelay: 1000,
            startDelay: 500
        });
    } catch (error) {
        console.error('Typed.js initialization failed:', error);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Subscribe form handling
    const subscribeButton = document.getElementById('subscribe-button');
    const emailInput = document.getElementById('email-input');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function handleSubscribe(event) {
        event.preventDefault();

        try {
            const email = emailInput.value.trim();

            if (!email) {
                alert('Please enter an email address.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Here you would typically send the email to your backend
            console.log('Subscribed email:', email);
            emailInput.value = '';
            alert('Thank you for subscribing!');

        } catch (error) {
            console.error('Subscription error:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    if (subscribeButton) {
        subscribeButton.addEventListener('click', handleSubscribe);
    }

    // Initialize Swiper
    try {
        const swiper = new Swiper(".slide-container", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
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
                    spaceBetween: 10,
                },
                520: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });
    } catch (error) {
        console.error('Swiper initialization failed:', error);
    }
});