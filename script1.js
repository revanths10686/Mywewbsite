// Run code only after page loads
document.addEventListener("DOMContentLoaded", function () {

  // 1. Simple greeting in console (for debugging)
  console.log("Website loaded successfully 🚀");

  // 2. Highlight section on click
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.addEventListener("click", () => {
      sections.forEach(sec => sec.style.background = "white");
      section.style.background = "#e8f0fe";
    });
  });

  // 3. Dynamic year in footer (if you add footer later)
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 4. Simple alert on email click
  const email = document.querySelector("p");

  if (email && email.textContent.includes("@")) {
    email.addEventListener("click", () => {
      alert("Thanks for reaching out!");
    });
  }

});
