// Header scroll effect - UPDATED FOR TRANSPARENCY
    const header = document.getElementById('header');
    
    // Check scroll position on page load
    document.addEventListener('DOMContentLoaded', () => {
        checkScroll();
    });
    
    // Check scroll position on scroll
    window.addEventListener('scroll', () => {
        checkScroll();
    });
    
    function checkScroll() {
        // Add scrolled class when scrolled down past the hero section height (minus header height)
        const heroHeight = document.querySelector('.hero').offsetHeight - header.offsetHeight;
        
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Menu Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Show all menu items initially and add show class for animation
    menuItems.forEach(item => {
        item.classList.add('show');
    });
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-tab');
            
            // Filter menu items
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    // Add a slight delay before showing for animation effect
                    setTimeout(() => {
                        item.classList.add('show');
                    }, 50);
                } else {
                    item.classList.remove('show');
                    // Hide after animation completes
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

   
    // Newsletter Form Submission

  document.getElementById("subscribeBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    if (email.trim() !== "") {
      alert("Thank you for subscribing, " + email + "!");
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // NEWS LETTER 


const subscribeBtn = document.getElementById('subscribeBtn');
const subCont = document.querySelector('subscribeBtn');



function subscribe() {
    subCont.innerHTML = " Please Wait ...."
    setTimeout(() => {
        subCont.innerHTML = " <p class='thank'>You Have Been Signed To Our NewsLetter</p>"
    }, 3000)
}

subscribeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    subscribe();
});

    // Testimonial Slider
    const testimonialSlider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentTestimonial = parseInt(dot.getAttribute('data-index'));
            updateTestimonial();
        });
    });

    function updateTestimonial() {
        testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentTestimonial) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Auto-change testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % dots.length;
        updateTestimonial();
    }, 6000);
    
    // Initialize width calculation
    window.addEventListener('load', calculateTestimonialWidth);
    window.addEventListener('resize', calculateTestimonialWidth);
    
    // Slide to a specific index
    function slideTo(index) {
        if (index < 0) {
            index = 0;
        } else if (index > testimonials.length - 1) {
            index = testimonials.length - 1;
        }
        
        currentIndex = index;
        testimonialSlider.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
    }
    
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        slideTo(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        slideTo(currentIndex + 1);
    });

    // Scroll Animations
    function checkScrollAnimations() {
        const elements = document.querySelectorAll('.menu-item, .testimonial, .gallery-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    }
    
    // Initial check
    window.addEventListener('load', checkScrollAnimations);
    
    // Check on scroll
    window.addEventListener('scroll', checkScrollAnimations);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });