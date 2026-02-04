// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (target === '#') return;
        
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            closeDropdown();
        }
    });
});

// Mobile menu toggle
function hamburg() {
    const dropdown = document.querySelector('.dropdowns');
    if (dropdown) {
        dropdown.style.transform = 'translateY(0)';
    }
}

function cancel() {
    const dropdown = document.querySelector('.dropdowns');
    if (dropdown) {
        dropdown.style.transform = 'translateY(-500px)';
    }
}

function closeDropdown() {
    const dropdown = document.querySelector('.dropdowns');
    if (dropdown) {
        dropdown.style.transform = 'translateY(-500px)';
    }
}

// Active nav link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-container .link a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
