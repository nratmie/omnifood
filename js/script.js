// ! Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ! Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

// ! Smooth scrolling animation

const allLinks = document.querySelectorAll("a[href^='#']"); 
// selects only links with href property starts with #, other links will be excluded

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href"); 
        // gets content of href="", ex: #cta

        // Scroll back to top - if content of href is just # - exactly 0px from top
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

        // Close mobile navigation if it was opened and User clicked on any nav link and scrolls to a needed section
        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});

// ! Sticky navigation - shows it if hero section was scrolled up 

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
    root: null, // we observe hero section inside of viewport (entire browser window) - as it moves through viewport
    threshold: 0, // creates an event as soon as hero section entirely moves out of viewport - if User scrolls the page, up - bottom edge of hero section isn"t seen in the browser or down - starts to be seen
    rootMargin: "-80px", // sticky nav will be shown at -80px (which equals exactly the height of sticky nav, 80px) - earlier for esthetical effect
});
observer.observe(sectionHeroEl);


