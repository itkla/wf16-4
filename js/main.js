// navbar slider
function toggleNavbar() {
    var navbarSlider = document.getElementById('offnav');
    var offnavButton = document.getElementById('offnavButton');
    if (navbarSlider.style.display === 'none' || navbarSlider.style.display === '') {
        navbarSlider.style.display = 'block';
        navbarSlider.style.animation = 'slideLeft 0.4s ease-in-out forwards';
        offnavButton.style.color = 'black';
    } else {
        navbarSlider.style.animation = 'slideRight 0.4s ease-in-out forwards';
        offnavButton.style.color = 'white';
        navbarSlider.addEventListener('animationend', function handler() {
            navbarSlider.style.display = 'none';
            navbarSlider.removeEventListener('animationend', handler);
            
        }, { once: true });
    }
}

// menu slider
function toggleMenuSlider() {
    var menuSlider = document.getElementById('menu');
    if (menuSlider.style.display === 'none' || menuSlider.style.display === '') {
        menuSlider.style.display = 'block';
        menuSlider.style.animation = 'slideUp 0.4s ease-in-out forwards';
    } else {
        menuSlider.style.animation = 'slideDown 0.4s ease-in-out forwards';
        menuSlider.addEventListener('animationend', function handler() {
            menuSlider.style.display = 'none';
            menuSlider.removeEventListener('animationend', handler);
        }, { once: true });
    }
}

// access slider
function toggleAccessSlider() {
    var accessSlider = document.getElementById('access');
    if (accessSlider.style.display === 'none' || accessSlider.style.display === '') {
        accessSlider.style.display = 'block';
        accessSlider.style.animation = 'slideUp 0.4s ease-in-out forwards';
    } else {
        accessSlider.style.animation = 'slideDown 0.4s ease-in-out forwards';
        accessSlider.addEventListener('animationend', function handler() {
            accessSlider.style.display = 'none';
            accessSlider.removeEventListener('animationend', handler);
        }, { once: true });
    }
}

// contact slider
function toggleContactSlider() {
    var contactSlider = document.getElementById('contact');
    if (contactSlider.style.display === 'none' || contactSlider.style.display === '') {
        contactSlider.style.display = 'block';
        contactSlider.style.animation = 'slideUp 0.4s ease-in-out forwards';
    } else {
        contactSlider.style.animation = 'slideDown 0.4s ease-in-out forwards';
        contactSlider.addEventListener('animationend', function handler() {
            contactSlider.style.display = 'none';
            contactSlider.removeEventListener('animationend', handler);
        }, { once: true });
    }
}

// staff slider
function toggleStaffSlider() {
    var staffSlider = document.getElementById('staff');
    if (staffSlider.style.display === 'none' || staffSlider.style.display === '') {
        staffSlider.style.display = 'block';
        staffSlider.style.animation = 'slideUp 0.4s ease-in-out forwards';
    } else {
        staffSlider.style.animation = 'slideDown 0.4s ease-in-out forwards';
        staffSlider.addEventListener('animationend', function handler() {
            staffSlider.style.display = 'none';
            staffSlider.removeEventListener('animationend', handler);
        }, { once: true });
    }
}

// order slider
function toggleOrderSlider() {
    var orderSlider = document.getElementById('order');
    if (orderSlider.style.display === 'none' || orderSlider.style.display === '') {
        orderSlider.style.display = 'block';
        orderSlider.style.animation = 'slideUp 0.4s ease-out forwards';
    } else {
        orderSlider.style.animation = 'slideDown 0.4s ease-in forwards';
        orderSlider.addEventListener('animationend', function handler() {
            orderSlider.style.display = 'none';
            orderSlider.removeEventListener('animationend', handler);
        }, { once: true });
    }
}

// cart
var cart = [];
async function addToCart(item) {
    cart.push(item);
    alert(`[DEBUG] Added ${item} to cart. Current cart: ${cart}`);
}

window.onload = function() {
    console.log('loaded');
}