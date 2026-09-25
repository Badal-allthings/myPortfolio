// ================================
// Typing Animation
// ================================

const typingText = document.getElementById("typing-text");

if (typingText) {
    const texts = [
        "Problem Solver",
        "Tech Enthusiast",
        "Software Developer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!deleting) {
            // Type text
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                deleting = true;

                // Pause after completing the word
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            // Delete text
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
}
// ================================
// Hero Typing Animation
// ================================

const heroName = document.getElementById("hero-name");
const heroDescription = document.getElementById("hero-description");

const nameText = "Badal Kumar";
const descriptionText = "A passionate developer creating digital experiences.";

let nameIndex = 0;
let descriptionIndex = 0;

function typeName() {
    if (heroName && nameIndex < nameText.length) {
        heroName.textContent += nameText.charAt(nameIndex);
        nameIndex++;

        setTimeout(typeName, 120);
    } else if (heroDescription) {
        setTimeout(typeDescription, 300);
    }
}

function typeDescription() {
    if (descriptionIndex < descriptionText.length) {
        heroDescription.textContent += descriptionText.charAt(descriptionIndex);
        descriptionIndex++;

        setTimeout(typeDescription, 50);
    }
}

typeName();

// ================================
// Scroll To Top Button
// ================================

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {
    // Show button when user scrolls down 100px
    window.onscroll = function () {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    // Scroll smoothly to top
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================================
// Contact Form
// ================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const dataObject = {};

        formData.forEach((value, key) => {
            dataObject[key] = value;
        });

        // Disable button while sending
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        try {
            const response = await fetch(event.target.action, {
                method: "POST",
                body: JSON.stringify(dataObject),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (result.success) {
                // Hide form
                contactForm.style.display = "none";

                // Show success message
                formStatus.style.display = "block";
            } else {
                alert("Error: " + result.message);

                submitBtn.disabled = false;
                submitBtn.innerText = "Send Message";
            }

        } catch (error) {
            alert(
                "Could not connect to the server. Please check your internet."
            );

            submitBtn.disabled = false;
            submitBtn.innerText = "Send Message";
        }
    });
}

// const textElement = document.getElementById("dynamic-text");
// // const words = ["Web Developer", "IT Specialist", "UI/UX Designer", "Creative Thinker"];
// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeEffect() {
//     const currentWord = words[wordIndex];
    
//     if (isDeleting) {
//         // Remove characters
//         textElement.textContent = currentWord.substring(0, charIndex - 1);
//         charIndex--;
//     } else {
//         // Add characters
//         textElement.textContent = currentWord.substring(0, charIndex + 1);
//         charIndex++;
//     }

//     // Speed logic
//     let typeSpeed = isDeleting ? 100 : 200;

//     if (!isDeleting && charIndex === currentWord.length) {
//         // Word is finished, wait before deleting
//         typeSpeed = 2000;
//         isDeleting = true;
//     } else if (isDeleting && charIndex === 0) {
//         // Word is deleted, move to next word
//         isDeleting = false;
//         wordIndex = (wordIndex + 1) % words.length;
//         typeSpeed = 500;
//     }

//     setTimeout(typeEffect, typeSpeed);
// }

// // Start the animation when the page loads
// document.addEventListener("DOMContentLoaded", typeEffect);