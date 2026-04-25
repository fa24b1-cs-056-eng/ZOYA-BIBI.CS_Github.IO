// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for sticky nav height
                behavior: 'smooth'
            });
        }
    });
});

// Console message to confirm script is working
console.log("Zoya's Portfolio script loaded successfully!");
