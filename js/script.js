// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a[href^='#']"); 

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href"); 

        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href); // Element that we want to scroll to
            sectionEl.scrollIntoView({ behavior: "smooth"} );

            console.log(sectionEl);
        }

        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});

// Sticky navigation - shown if hero section was scrolled up 
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
    }
}, 
{
    root: null, 
    threshold: 0, 
    rootMargin: "-80px", // sticky nav will be shown at -80px (80px - height of sticky nav)
});
observer.observe(sectionHeroEl);


