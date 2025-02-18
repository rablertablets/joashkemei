document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        });
    }

    // Hide & Show Navbar on Scroll
    const headerNavbar = document.querySelector(".header");
    if (headerNavbar) {
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            headerNavbar.style.top = scrollTop > lastScrollTop ? "-100px" : "0";
            lastScrollTop = scrollTop;
        });
    }

    // Image Modal Fix
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".image-modal .close");

    if (modal && modalImg) {
        document.querySelectorAll(".blog-item img").forEach((img) => {
            img.addEventListener("click", function () {
                modal.style.display = "flex";
                modalImg.src = this.src;
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            });
        }

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }

    // Progress Bars Animation
    let progressBars = document.querySelectorAll(".progress-fill");
    if (progressBars.length > 0) {
        progressBars.forEach(bar => {
            let width = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    // Contact Form Submission
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.init("IeRvkLsFsXxViz6YK"); // Your EmailJS Public Key

            let emailParams = {
                from_name: document.getElementById("fullName").value,
                user_email: document.getElementById("email").value,
                user_phone: document.getElementById("phone").value,
                email_subject: document.getElementById("subject").value,
                message: document.getElementById("message").value,
            };

            emailjs.send("service_116r6bo", "template_p3wth1w", emailParams)
                .then(() => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch(() => {
                    alert("Failed to send message. Try again later.");
                });
        });
    }

    // Subscription Form Submission
    const subscribeForm = document.getElementById("subscribeForm");

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            const email = document.getElementById("emailInput").value.trim();

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            emailjs.init("IeRvkLsFsXxViz6YK"); // Your EmailJS Public Key

            let emailParams = {
                to_email: "Joshkipkirui.k@gmail.com", // Admin's email
                subscriber_email: email, // User's email
                message: "A new subscriber has joined the newsletter!",
            };

            emailjs.send("service_116r6bo", "template_p3wth1w", emailParams)
                .then(() => {
                    alert("Subscription successful! Check your email for updates.");
                    subscribeForm.reset();
                })
                .catch(() => {
                    alert("Subscription failed. Try again later.");
                });
        });
    }

    // Email validation function
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
