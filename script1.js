window.addEventListener('load', () => {
    // Select multiple elements
    const elements = document.querySelectorAll('.profile-image, .hire-me');
    
    // Apply the 'visible' class to all selected elements
    elements.forEach(element => {
        element.classList.add('visible');
    });
});
// Function to toggle the visibility of the navigation menu
// Toggle the navigation menu for mobile view
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});


