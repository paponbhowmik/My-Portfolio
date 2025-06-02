AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-in-out',
});

// Typed text animation for hero heading
const typedText = document.getElementById('typed-text');
const text = "Hey, I am Papon Bhowmik";
let idx = 0;

function typeWriter() {
    if (idx < text.length) {
        typedText.textContent += text.charAt(idx);
        idx++;
        setTimeout(typeWriter, 100);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    typedText.textContent = '';
    typeWriter();
});


$(document).ready(function () {
    $('#btn-projects').click(function () {
      $(this).addClass('active');
      $('#btn-designs').removeClass('active');
      $('#projects-section').show();
      $('#designs-section').hide();
    });

    $('#btn-designs').click(function () {
      $(this).addClass('active');
      $('#btn-projects').removeClass('active');
      $('#projects-section').hide();
      $('#designs-section').show();
    });
  });



// Smooth scroll and active link switching for sidebar navigation
document.querySelectorAll("#sidebar nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetID = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetID);
        if(targetSection) {
            targetSection.scrollIntoView({behavior: "smooth"});
            // Update active state
            document.querySelectorAll("#sidebar nav a").forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
        if(window.innerWidth < 992) {
            document.getElementById('sidebar').classList.remove('show');
        }
    });
});

// Highlight menu items on scroll
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 150;
    const sections = document.querySelectorAll("main section");
    let current = null;
    sections.forEach(section => {
        if(section.offsetTop <= fromTop) {
            current = section.getAttribute('id');
        }
    });
    if(current) {
        document.querySelectorAll("#sidebar nav a").forEach(a => {
            a.classList.remove('active');
            if(a.getAttribute('href') === "#" + current) {
                a.classList.add('active');
            }
        });
    }
});

// Sidebar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Bootstrap form validation and submission simulation
// 
