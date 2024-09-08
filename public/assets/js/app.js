$(document).ready(function () {
    $('#confirmPurchaseButton').click(function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Confirm button clicked");
        AbaPayway.checkout();
    });
});
function purchaseProduct(productId) {
    $.ajax({
        url: '/pricing/purchase/' + productId,
        type: 'GET',
        success: function(data) {
            // Populate the pop-up with product details
            $('#popupProductName').text(data.title);
            $('#popupProductPrice').text(data.amount);
            // Fill hidden form fields
            $('#hash').val(data.hash);
            $('#tran_id').val(data.transactionId);
            $('#amount').val(data.amount);
            $('#firstname').val(data.firstName);
            $('#lastname').val(data.lastName);
            $('#phone').val(data.phone);
            $('#email').val(data.email);
            $('#items').val(data.items);
            $('#return_params').val(data.return_params);
            $('#shipping').val(data.shipping);
            $('#currency').val(data.currency);
            $('#type').val(data.type);
            $('#payment_option').val(data.payment_option);
            $('#merchant_id').val(data.merchant_id);
            $('#req_time').val(data.req_time);
            // Show the pop-up
            console.log("Showing popup");
            $('#overlay').show();
            $('#purchasePopup').show();
        },
        error: function(xhr, status, error) {
            console.log('Error:', error);
        }
    });
}
function closePopup() {
    $('#overlay').hide();
    $('#purchasePopup').hide();
}

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
