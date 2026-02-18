// Get the button
const scrollBtn = document.getElementById("scrollTop");

// Show button when user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Stop page refresh
        
        const formData = new FormData(event.target);
        const dataObject = {};
        formData.forEach((value, key) => dataObject[key] = value);
        
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        try {
            const response = await fetch(event.target.action, {
                method: 'POST',
                body: JSON.stringify(dataObject),
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await response.json();

            if (result.success) {
                // Hide form and show green success text
                contactForm.style.display = "none";
                formStatus.style.display = "block";
            } else {
                alert("Error: " + result.message);
                submitBtn.disabled = false;
                submitBtn.innerText = "Send Message";
            }
        } catch (error) {
            alert("Could not connect to the server. Please check your internet.");
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