// JavaScript for toggling the navigation menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function displayPhoneNumberAndEmail(event) {
  const phoneNumber = "0833624579";
  const email = "langutani98@gmail.com";
  const parentDiv = event.target.parentNode;
  const phoneNumberElement = parentDiv.querySelector(".phone-number");
  const emailElement = parentDiv.querySelector(".email");
  phoneNumberElement.textContent = "Phone: " + phoneNumber;
  emailElement.textContent = "Email: " + email;
}

// Add event listeners to both "Contact Me" buttons
const contactButtons = document.querySelectorAll(".contact-button");

contactButtons.forEach((button) => {
  button.addEventListener("click", displayPhoneNumberAndEmail);
});
