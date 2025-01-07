AOS.init({
    duration: 1200
   });

const element1 = document.querySelectorAll('.project-anime'); 

const scrollObserver2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible1');
        } else {
            entry.target.classList.remove('visible1'); 
        }
    });
});

element1.forEach(element => {
    scrollObserver2.observe(element);
});

const elements = document.querySelectorAll('.animate-on-scroll'); 

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible2');
        } else {
            entry.target.classList.remove('visible2'); 
        }
    });
});

elements.forEach(element => {
    scrollObserver.observe(element);
});


