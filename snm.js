document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };
    }

    // Hide & Show Navbar on Scroll
    const headerNavbar = document.querySelector(".header");
    if (headerNavbar) {
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                headerNavbar.style.top = "-100px";
            } else {
                headerNavbar.style.top = "0";
            }
            lastScrollTop = scrollTop;
        });
    }

    // Image Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    if (modal && modalImg) {
        document.querySelectorAll(".blog-item img").forEach((img) => {
            img.addEventListener("click", function () {
                modal.style.display = "flex";
                modalImg.src = this.src;
            });
        });

        if (closeModal) {
            closeModal.addEventListener("click", function () {
                modal.style.display = "none";
            });
        }
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

            emailjs.init("DE9PSSf75L8yufwQKhzMJ"); // Replace with your EmailJS Public Key

            let emailParams = {
                from_name: document.getElementById("fullName").value,
                user_email: document.getElementById("email").value,
                user_phone: document.getElementById("phone").value,
                email_subject: document.getElementById("subject").value,
                message: document.getElementById("message").value,
            };

            emailjs.send("service_f2gzi6j", "template_xwhrf2f", emailParams)
                .then(() => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch(() => {
                    alert("Failed to send message. Try again later.");
                });
        });
    }
});
