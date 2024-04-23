// JavaScript code to adjust scroll position after clicking a navigation link
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links that need to scroll to specific content
    const navLinks = document.querySelectorAll('.nav-option ul li a');

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute('href'); // Get the target element ID
            const targetElement = document.querySelector(targetId); // Find the target element

            if (targetElement) {
                // Get the height of the fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                // Calculate the target scroll position, considering the header height
                const targetScrollPosition = targetElement.offsetTop - headerHeight;
                
                // Scroll to the target position smoothly
                window.scrollTo({
                    top: targetScrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function handleChapterClick(element) {
    const allChapters = document.querySelectorAll('.html-sidebar .middle ul li');

    // Remove active class from all chapters
    allChapters.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the clicked chapter
    element.closest('li').classList.add('active');
}


// Profile DropDown Menu
let profileSubMenu = document.getElementById("subMenu");
function toggleProfileMenu() {
    profileSubMenu.classList.toggle("open-menu");
}

// Catalog Sidebar Dropdown menu
function toggleSidebarMenu(menuId, iconId) { // Accept menu ID and icon ID as arguments
    let menu = document.getElementById(menuId);
    let icon = document.getElementById(iconId);
    menu.classList.toggle("open-menu");
    icon.classList.toggle("open-icon");
}

function animateProgressBar(progressId) {
    let progress = document.getElementById(progressId);
    let progressWidth = progress.getAttribute('data-done') + '%';
    progress.style.setProperty('--progress-width', progressWidth);
    progress.classList.add('animation');
}

// Call animateProgressBar for each progress bar
animateProgressBar('progress-percentage-1');
animateProgressBar('progress-percentage-2');
animateProgressBar('progress-percentage-3');
animateProgressBar('progress-percentage-4');


// // Profile DropDown Menu
// let profileSubMenu = document.getElementById("subMenu");
// function toggleProfileMenu(){
//     profileSubMenu.classList.toggle("open-menu");
// }

// // Catalog Sidebar Dropdown menu
// let langMenu = document.getElementById("langMenu");
// let langMenuIcon = document.getElementById("langMenuIcon");

// function toggleLangMenu(){
//     langMenu.classList.toggle("open-lang-menu");
//     langMenuIcon.classList.toggle("rotate-icon");
// }




// // Search Bar

// document.getElementById("searchInput").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         // Trigger search function here
//         searchFunction();
//     }
// });

// function searchFunction() {
//     // Implement your search logic here
//     console.log("Search triggered");
// }
