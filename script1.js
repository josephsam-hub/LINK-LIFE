// JavaScript for the "About Us" page

// Show selected content section and hide others
function showSection(sectionId) {
    // Get all content sections and hide them
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Display the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Search for blood by blood type or location
function searchBlood() {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        alert(`Searching for blood type or location: ${query}`);
        // Implement search functionality here
    } else {
        alert("Please enter a blood type or location to search.");
    }
}

// Search for doctor by location or specialty
function searchDoctor() {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        alert(`Searching for doctors in location: ${query}`);
        // Implement search functionality here
    } else {
        alert("Please enter a location or specialty to search.");
    }
}

// Show donation success message
function donate() {
    alert("Thank you for your contribution to LINK LIFE!");
}

// Smooth scroll to top of page when navigating between sections
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Optional: Highlight the active link in the sidebar
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
