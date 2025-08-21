'use strict';

/* Menu Mobile */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function() {
    console.log("Toggle clicked");

    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for(let i = 0; i < navbarLinks.length; i++) { navbarLinks[i].addEventListener("click", navToggleFunc); }

/* Active Header on Scroll */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
})

/* Increase or decrease quantity button */

function changeQuantity(delta, btn) {
    const input = btn.parentElement.querySelector('input[type="number"]');
    let value = parseInt(input.value, 10) + delta;
    if (value < 0) value = 0;
    input.value = value;
    console.log(`Updated quantity: ${value}`);
    updateCartTotal();
}

 function updateCartTotal() {
    const cards = document.querySelectorAll('.featured-car-card');
    let total = 0;
    cards.forEach(card => {
        const priceText = card.querySelector('.card-price strong').textContent.replace(/[^\d]/g, '');
        const price = parseInt(priceText, 10) || 0;
        const quantity = parseInt(card.querySelector('.quantity-selector input').value, 10) || 0;
        total += price * quantity;
        console.log(`Card price: ${price}, Quantity: ${quantity}, Total: ${total}`);
    });
    document.getElementById('cart-total').textContent = total.toLocaleString('vi-VN') + '₫';
}

// Initialize total on page load
document.addEventListener('DOMContentLoaded', updateCartTotal);
