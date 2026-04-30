// 1. Scroll Reveal Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

let btn1 = document.querySelector('.btn.primary');

btn1.addEventListener('click', () => {
    alert("GET READY 🧑🏽‍🚀 Now you are redirecting to the Work-Area 🚀");
});

let btn2 = document.querySelector(".btn.secondary");
btn2.addEventListener("click",()=>{
    alert("Now You pressed the resume button so you can know about mukund more..😁😁")
})

// 2. Mouse Move Glow Effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-blur');
    if(glow) {
        glow.style.left = e.clientX - 200 + 'px';
        glow.style.top = e.clientY - 200 + 'px';
    }
});

// 3. Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 4. Toggle Skill Description Function
function toggleSkill(card) {
    const isActive = card.classList.contains('active-skill');
    
    document.querySelectorAll('.skill-card').forEach(c => {
        c.classList.remove('active-skill');
    });

    if (!isActive) {
        card.classList.add('active-skill');
    }
}

// 5. Contact Form Submission (Basic Alert)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
}

const certifications = [
    {
        title: "CodSoft Website Developers",
        provider: "Codsoft",
        year: "20-6-2024",
        image: "WhatsApp Image 2025-07-07 at 11.13.39 PM.jpeg", // Apni image ka path yahan dalein
        desc: "Deep dive into React hooks, context API, and performance optimization."
    },
    {
        title: "ZIDIO Web Solutions",
        provider: "Zidio web solutions",
        year: "10-3-2024",
        image: "WhatsApp Image 2025-07-07 at 11.13.15 PM.jpeg", 
        desc: "Professional certification covering the end-to-end UX design process."
    },
    
];

function displayCertifications() {
    const container = document.getElementById('cert-container');
    
    certifications.forEach(cert => {
        const cardHTML = `
            <div class="cert-card">
                <div class="cert-img-container">
                    <img src="${cert.image}" alt="${cert.title}" class="cert-img">
                </div>
                <div class="cert-content">
                    <span>${cert.provider} • ${cert.year}</span>
                    <h3>${cert.title}</h3>
                    <p>${cert.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

document.addEventListener('DOMContentLoaded', displayCertifications);
