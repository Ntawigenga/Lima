const buyButtons = document.querySelectorAll('.shop-item-button');
const cartItems = [];
let total = 0;

// Add items to cart and update total
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        cartItems.push(item);
        total += parseFloat(item.split('$')[1]);
        updateCart();
    });
});

// Update cart display
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = cartItems.map(item => `<div>${item}</div>`).join('');
    document.querySelector('.cart-total-price').innerText = `$${total.toFixed(2)}`;
}

// Open email popup
function openEmailPopup() {
    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById('emailPopup').style.display = 'block';
    document.getElementById('orderDetails').value = cartItems.join(', ');
}

// Close email popup
function closeEmailPopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('emailPopup').style.display = 'none';
}
