// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// Matrix Canvas Setup
let matrixInterval;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 16;
let columns;
let drops;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawMatrix() {
    // Translucent black background to create fading trail
    ctx.fillStyle = 'rgba(3, 4, 11, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#4A56E2'; // Matrix character color
    ctx.font = fontSize + 'px "JetBrains Mono"';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

function startMatrixEffect() {
    // Clear canvas and reset drops
    ctx.fillStyle = '#03040b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -100; // Start slightly above screen randomly
    }

    canvas.classList.add('active');

    if (matrixInterval) clearInterval(matrixInterval);
    matrixInterval = setInterval(drawMatrix, 33); // ~30fps
}

function stopMatrixEffect() {
    canvas.classList.remove('active');
    setTimeout(() => {
        if (matrixInterval) clearInterval(matrixInterval);
    }, 500); // Wait for CSS opacity transition to finish
}

// Navigation Logic
let isAnimating = false;

function goToSection(index) {
    if (index < 0 || index >= navLinks.length) return;
    if (isAnimating) return;

    const targetLink = navLinks[index];
    if (targetLink.classList.contains('active')) return;

    isAnimating = true;

    // Close mobile menu if open
    navLinksContainer.classList.remove('active');

    // Update active nav link
    navLinks.forEach(l => l.classList.remove('active'));
    targetLink.classList.add('active');

    const targetId = targetLink.getAttribute('data-target');

    // Trigger Matrix Transition
    startMatrixEffect();

    // Wait for matrix to cover screen, then switch sections
    setTimeout(() => {
        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active'));

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Fade out matrix effect
        setTimeout(() => {
            stopMatrixEffect();
            setTimeout(() => {
                isAnimating = false;
            }, 500); // Wait for CSS fade out
        }, 600);

    }, 400);
}

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        goToSection(index);
    });
});

// Mouse wheel navigation
window.addEventListener('wheel', (e) => {
    if (isAnimating) {
        e.preventDefault();
        return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    let currentIndex = 0;
    navLinks.forEach((link, index) => {
        if (link.classList.contains('active')) currentIndex = index;
    });

    if (e.deltaY > 0 && scrollY >= maxScroll - 5) {
        // Scroll down at bottom -> next section
        if (currentIndex < navLinks.length - 1) {
            e.preventDefault();
            goToSection(currentIndex + 1);
        }
    } else if (e.deltaY < 0 && scrollY <= 5) {
        // Scroll up at top -> prev section
        if (currentIndex > 0) {
            e.preventDefault();
            goToSection(currentIndex - 1);
        }
    }
}, { passive: false });
