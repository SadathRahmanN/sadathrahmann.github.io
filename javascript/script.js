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
    let swiper;
    try {
        swiper = new Swiper(".slide-container", {
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

    // Lazy loading for project images
    const images = document.querySelectorAll('.swiper-slide img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src || image.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        images.forEach(image => imageObserver.observe(image));
    }

    // Project modal handling
    const projectButtons = document.querySelectorAll('.project-btn');
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img class="modal-image" src="" alt="Project Image">
            <h3 class="modal-title"></h3>
            <p class="modal-description"></p>
            <p class="modal-tech"></p>
            <a class="modal-link" href="#" target="_blank">Visit Project</a>
        </div>
    `;
    document.body.appendChild(modal);

    const modalClose = modal.querySelector('.modal-close');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalTech = modal.querySelector('.modal-tech');
    const modalLink = modal.querySelector('.modal-link');

    // Project details (customize these with actual project details)
    const projectDetails = {
        'bookhub': {
            title: 'BookHub',
            description: 'An online book library app allowing users to browse, search, and read books digitally. Features a responsive UI with advanced search and user authentication.',
            tech: 'React, Node.js, MongoDB, REST API',
            link: 'https://bookhub-frontend.onrender.com',
            image: 'img/bookhub.jpg'
        },
        'travelhub': {
            title: 'TravelHub',
            description: 'A travel destination platform showcasing detailed information about global locations, with interactive maps and booking integration.',
            tech: 'HTML, CSS, JavaScript, Google Maps API',
            link: 'https://task63.onrender.com',
            image: 'img/travelhub.jpg'
        },
        'tomato-food-delivery': {
            title: 'Tomato Food Delivery App',
            description: 'A food delivery app with a React-based UI, featuring cart management, checkout, and real-time order tracking.',
            tech: 'React, Redux, Node.js, Express',
            link: 'https://food-del-frontend-sl8w.onrender.com',
            image: 'img/tomato-food-delivery.jpg'
        },
        'portfolio': {
            title: 'Personal Portfolio',
            description: 'A personal portfolio website showcasing my projects, skills, and services, built with a focus on modern design and responsiveness.',
            tech: 'HTML, CSS, JavaScript, Swiper',
            link: 'https://task62.onrender.com',
            image: 'img/portfolio.jpg'
        }
    };

    // Preload images on hover
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const projectId = this.closest('.swiper-slide').dataset.projectId;
            if (projectId && projectDetails[projectId]) {
                const img = new Image();
                img.src = projectDetails[projectId].image;
            }
        });
    });

    // Open modal on project button click
    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.closest('.swiper-slide').dataset.projectId;
            if (projectId && projectDetails[projectId]) {
                const details = projectDetails[projectId];
                modalImage.src = details.image;
                modalImage.alt = details.title;
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modalTech.textContent = `Technologies: ${details.tech}`;
                modalLink.href = details.link;
                modal.classList.add('active');
                if (swiper) swiper.autoplay.stop(); // Pause Swiper autoplay
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        if (swiper) swiper.autoplay.start(); // Resume Swiper autoplay
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (swiper) swiper.autoplay.start();
            document.body.style.overflow = '';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            if (swiper) swiper.autoplay.start();
            document.body.style.overflow = '';
        }
    });

    // Accessibility: Focus management for modal
    modalClose.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            modal.classList.remove('active');
            if (swiper) swiper.autoplay.start();
            document.body.style.overflow = '';
        }
    });
});