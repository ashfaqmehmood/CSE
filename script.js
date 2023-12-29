// Toggle mobile menu
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".main-navigation ul");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

function updateTextContent(text, color, isHeading) {
  const contentDiv = document.getElementById("content");
  text = text.replace(/\n/g, "\\n"); // Replace actual line breaks with \\n for the applet parameter

  const appletHTML = `
    <applet code="Aa.class" width="100%" height="900">
    <param name="text" value="${text}">
    <param name="color" value="${color}">
    <param name="isHeading" value="${isHeading}">
</applet>
    `;
  contentDiv.innerHTML = appletHTML;
}

// Example function to load specific content
function loadHomeContent() {
  const welcomeText =
    "Welcome to Baba Ghulam Shah Badshah University's Computer Science & Engineering Department.\n\n"

    const bodyText =
    "This is the body text. It is not a heading.\n\n"
  updateTextContent(welcomeText, "#0056b3", true); // Set color to a nice shade of blue
  updateTextContent(bodyText, "#000000", false); // Set color to black
}

// Example function to load other specific content
function loadAdministrationContent() {
  loadAppletWithText("This is the Administration page content.");
}

window.onload = loadHomeContent; // Load home content by default
