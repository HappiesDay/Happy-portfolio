window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.getElementById('content');

    // Time durations
    const firstVisitDuration = 1300; // 1.3 seconds
    const subsequentVisitDuration = 0; // 0.4 seconds

    // Check localStorage to see if the preloader has been shown
    const preloaderShown = localStorage.getItem('preloaderShown');

    if (!preloaderShown) {
        // Show the preloader for the first time
        setTimeout(() => {
            preloader.style.opacity = '0'; // Start fading out
            setTimeout(() => {
                preloader.style.display = 'none'; // Set to none after fade-out
                content.style.display = 'block'; // Show content
            }, 500); // Match this duration with the CSS transition duration
        }, firstVisitDuration);

        // Set the flag in localStorage
        localStorage.setItem('preloaderShown', 'true');
    } else {
        // If preloader has been shown, show it for 0.4 seconds
        setTimeout(() => {
            preloader.style.opacity = '0'; // Start fading out
            setTimeout(() => {
                preloader.style.display = 'none'; // Set to none after fade-out
                content.style.display = 'block'; // Show content
            }, 500); // Match this duration with the CSS transition duration
        }, subsequentVisitDuration);
    }
});

    

// Call showPreloader on page load
window.addEventListener('load', function() {
    // Show the preloader for a minimum of 1.3 seconds
    showPreloader();
    setTimeout(hidePreloader, 1300);
});


// JavaScript to convert vertical scroll to horizontal scroll DO NOT FUCKING TOUCH
const container = document.querySelector('.container');
let scrollLine = document.querySelector('.scroll');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft / 2 + 'px';
})



// Scroll to 
const navbar = document.getElementById("navbar");

let scrollCount = 0; // Track the number of scroll right actions

// Function to handle horizontal scrolling
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    // Update the scroll count based on the scroll direction
    if (e.deltaY > 0) { // Scroll right
        scrollCount++;
        if (scrollCount >= 5) {
            navbar.classList.remove("visible"); // Hide the navbar
        }
    } else if (e.deltaY < 0) { // Scroll left
        navbar.classList.add("visible"); // Show the navbar
        scrollCount = 0; // Reset the count when scrolling left
    }

    container.scrollLeft += e.deltaY; // Perform the scroll
});



    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });

    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Titles and subtitles corresponding to each image
    const titles = [
        "Exotic Festive", 
        "Distance VJ", 
        "Kiteman", 
        "Worm War", 
        "Shared House"
    ];
    const subtitles = [
        "Web design mockup for a single-page interactive event homepage.", 
        "Visual jockey representation of the song Distance.", 
        "3D character rigged; Vietnamese antihero theme.", 
        "A homemade chicken puppet in a weight struggle stop motion.", 
        "A 2D fanart of the novel Shared House with him."
    ];
    
    // Links corresponding to each image
    const links = [
        "https://www.figma.com/proto/hpgZf7xzDvUQmjT032KGhk/A3_Web-design?node-id=1-2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2",
        "https://youtu.be/JFTwxstoYNA",
        "https://youtu.be/sodjUZDG30o",
        "https://youtu.be/PROuUqznbpk",
        "https://pbs.twimg.com/media/F98YswWbgAA71Wb?format=jpg&name=4096x4096"
    ];
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        // Update the title and subtitle
        document.getElementById('Starttitle').textContent = titles[index];
        document.getElementById('Startsubtitle').textContent = subtitles[index];
    
        // Update the overlay link
        document.getElementById('overlayLink').href = links[index];
    }
    
    // Event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });
    
    document.querySelector('.previous').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });
    
    // Initialize first slide
    showSlide(currentIndex);
    





