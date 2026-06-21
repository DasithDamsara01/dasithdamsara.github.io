gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const hoverImage = document.getElementById('hover-image');
const nameTarget = document.querySelector('.name-hover-target');
const imageOverlay = document.getElementById('image-overlay');

// Custom Cursor (Only on Desktop)
if(window.innerWidth > 768) {
    const links = document.querySelectorAll('a, .theme-btn');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
        // ෆොටෝ එක Cursor එක පිටිපස්සෙන් එන්න සැලැස්වීම
        gsap.to(hoverImage, { x: e.clientX, y: e.clientY, duration: 0.4 });
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('active'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    // නම උඩට යද්දී විතරක් පොඩි photo එක පෙන්වීම
    nameTarget.addEventListener('mouseenter', () => {
        hoverImage.classList.add('visible');
    });
    nameTarget.addEventListener('mouseleave', () => {
        hoverImage.classList.remove('visible');
    });
}

// Double Click කරාම Full Image එක පෙන්වීම
nameTarget.addEventListener('dblclick', () => {
    imageOverlay.classList.add('open');
});

// ඕනෑම තැනක click කරාම Full Image එක වැසීම
imageOverlay.addEventListener('click', () => {
    imageOverlay.classList.remove('open');
});

// Hero Animations
gsap.from('.reveal-text', {
    y: 150,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    delay: 0.2
});

gsap.from('.fade-in', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    stagger: 0.2
});

// Reveal Titles on Scroll
const revealTitles = document.querySelectorAll('.reveal-title');
revealTitles.forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Light / Dark Mode Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});
