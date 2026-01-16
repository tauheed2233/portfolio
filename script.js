var titles = ['Software Developer', 'Computer Scientist', 'Problem Solver', 'Tech Enthusiast', 'Freelance Developer'];
var titleIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typedText = document.getElementById('typed-text');

function typeEffect() {
    var currentTitle = titles[titleIndex];
    if (isDeleting) {
        typedText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    var typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeEffect, 1000);
});

var navbar = document.getElementById('navbar');
var navToggle = document.getElementById('nav-toggle');
var navMenu = document.getElementById('nav-menu');
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

var sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    var scrollY = window.pageYOffset;
    sections.forEach(function(section) {
        var sectionHeight = section.offsetHeight;
        var sectionTop = section.offsetTop - 100;
        var sectionId = section.getAttribute('id');
        var navLink = document.querySelector('.nav-link[href=\"#' + sectionId + '\"]');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(function(link) { link.classList.remove('active'); });
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

var backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

var skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(function(bar) {
        var progress = bar.getAttribute('data-progress');
        var rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            bar.style.width = progress + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailtoLink = 'mailto:towhidh@mun.ca?subject=Portfolio Contact from ' + encodeURIComponent(name) + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    window.location.href = mailtoLink;
    contactForm.reset();
});

document.querySelectorAll('a[href^=\"#\"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('Welcome to my portfolio! - Towhid Towhid');
