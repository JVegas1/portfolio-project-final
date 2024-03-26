// Define job titles to cycle through
const jobTitles = ["Agile Product & Project Managment", "Data Analytics", "UI/UX Designer", "Front End Developer", "AI/ ML Engineer"];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;

// Function to update the job title periodically
function updateJobTitle() {
  const titleElement = document.getElementById("job-title");
  
  // Check if typing or deleting
  if (isDeleting) {
    // Deleting animation
    currentText = jobTitles[currentIndex].substring(0, currentText.length - 1);
  } else {
    // Typing animation
    currentText = jobTitles[currentIndex].substring(0, currentText.length + 1);
  }
  
  // Update the title element
  titleElement.textContent = currentText;
  
  // Determine typing speed
  let typingSpeed = 200; // Adjust typing speed as needed
  
  // If deleting, typing speed should be faster
  if (isDeleting) {
    typingSpeed /= 2; // Adjust deleting speed as needed
  }
  
  // Check if job title is fully typed or fully deleted
  if (!isDeleting && currentText === jobTitles[currentIndex]) {
    // Pause at the end
    typingSpeed = 2000; // Adjust pause time at the end as needed
    isDeleting = true;
  } else if (isDeleting && currentText === '') {
    // Move to the next job title
    isDeleting = false;
    currentIndex = (currentIndex + 1) % jobTitles.length;
  }
  
  // Call the function recursively with setTimeout
  setTimeout(updateJobTitle, typingSpeed);
}

// Call the function to start the animation
updateJobTitle();


  function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
    } else {
      sidenav.style.width = "250px";
    }
  }
