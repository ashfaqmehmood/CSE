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
    "Welcome to Baba Ghulam Shah Badshah University's Computer Science & Engineering Department.\n\n\n\n" + 
    "The Department of Computer Science and Engineering at the College of Engineering and Technology started in 2007.\n\n" +
    "Its aim is to make students responsible citizens, competent professionals, and leading innovators.\n\n" +
    "With a growing faculty, the department contributes to societal needs and global sustainable development.\n\n" +
    "The B. Tech program, a four-year course, focuses on imparting a solid foundation and tackling industry and academia challenges.\n\n" +
    "Students engage in summer internships and year-long projects with the latest technologies, guided by faculty.\n\n" +
    "The department is young, rapidly growing, and proud of its alumni's success in various fields.\n\n";



  updateTextContent(welcomeText, "#0056b3", true); // Set color to a nice shade of blue
}

// Example function to load specific content
function loadVisionContent() {
  const visionText = 
  "Vision\n" + 
  "Aim for excellence in education, making students competent professionals and innovators.\n\n\n" + 
  "Mission\n" + 
  "1. Provide quality education for societal needs.\n" + 
  "2. Lead in Computer Science and Engineering in the state.\n" + 
  "3. Connect Peer Panjal to urban India with technology skills.\n" + 
  "4. Encourage self-motivation and innovation among students.\n" + 
  "5. Foster a supportive environment for faculty excellence.\n";



  updateTextContent(visionText, "#0056b3", true); // Set color to a nice shade of blue
}

// Example function to load other specific content
function loadProgrammesOfferedContent() {
  const text = 
  "Programmes Offered\n\n" + 
  "B. Tech. Computer Science & Engineering (Year of introduction: 2012-13)\n" + 
  "" + 
  "General : 42 seats\n" + 
  "Self Supporting : 18 seats\n\n\n" + 
  "Eligibility for Admission\n\n" + 
  "Passed 10+2 from a recognized Board with at least 50% marks (45% for Scheduled caste / Scheduled tribe\n" +
  "categories) with Physics and Mathematics as compulsory subjects.\n"
  updateTextContent(text, "#0056b3", true); // Set color to a nice shade of blue

}

// Example function to load specific content
function loadFacultyContent() {
  const facultyText = 
  "Mr. Khalil Ahmed\n" +
  "Head of the Department\n" +
  "Specialization: Image Processing, Design & Analysis of Algorithms, Computer Programming, Cloud Computing.\n" +
  "Contact: (7889378152), khalil447@gmail.com\n\n" +

  "Mr. Mohd Aslam\n" +
  "Assistant Professor\n" +
  "Specialization: Computer Networking and security, Machine Learning, Data Science.\n" +
  "Contact: (7298083834), mohammadaslam104@gmail.com\n\n" +
  
  "Mr. Amit Dogra\n" +
  "Assistant Professor\n" +
  "Specialization: Computer Network, Management Information System.\n" +
  "Contact: (9419163644), amitdogra004@gmail.com\n\n" +

  "Ms. Rukhsana Thaker\n" +
  "Lecturer\n" +
  "Specialization: Visual Programming, Data Structures, Operating Systems.\n" +
  "Contact: (09419171218), rukhs153@gmail.com\n\n" +
  
  "Mr. Aabid Ud Din Wani\n" +
  "Assistant Professor\n" +
  "Specialization: Cloud Computing, Algorithm Analysis, HTML, Computer networks.\n" +
  "Contact: (9469023135), waniaabid369@gmail.com\n\n" +

  "Ms. Palvi Sharma\n" +
  "Assistant Professor\n" +
  "Specialization: Remote Sensing Images, Artificial Intelligence, Machine Learning.\n" +
  "Contact: (9858949102), spalvi625@gmail.com\n\n";


  updateTextContent(facultyText, "#0056b3", true); // Set color to a nice shade of blue
}

function loadSyllabusContent() {
  const contentDiv = document.getElementById("content");

  const syllabusHTML = `
<a href = "https://www.bgsbu.ac.in/btechdcs/doc/sylbs/Syllabus%20for%20B.Tech%20Computer%20Science%20and%20Engineering.pdf">Click here to download Syllabus</a>
    `;
  contentDiv.innerHTML = syllabusHTML;
}

window.onload = loadHomeContent; // Load home content by default
