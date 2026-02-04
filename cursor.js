
const cursor = document.createElement('div');
cursor.className = 'cursor-dot';
document.body.appendChild(cursor);

const cursorRing = document.createElement('div');
cursorRing.className = 'cursor-ring';
document.body.appendChild(cursorRing);

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update dot position (immediate)
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    // Ring follows with slight delay
    setTimeout(() => {
        ringX = mouseX;
        ringY = mouseY;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
    }, 50);
});

// Hide cursor on mouse leave
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorRing.style.opacity = '0';
});

// Show cursor on mouse enter
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorRing.style.opacity = '1';
});

// Add click animation
document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-active');
    cursorRing.classList.add('ring-active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-active');
    cursorRing.classList.remove('ring-active');
});

