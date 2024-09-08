// Get the cart container element
var cartContainer = document.getElementById("cart");

// Get the accept close button element
var acceptClose = document.getElementById("accept-close");

// Get the cart icon element
var cartIcon = document.querySelector('.cart-icon');

// Get the cart close button element
var cartClose = document.querySelector('#cart-close');

// Get the cart buy button element
var cartBuy = document.getElementById("cart-buy");

// Get the accept buy button element
var acceptBuy = document.getElementById("accept-buy");

// Get the accept container element
var acceptContainer = document.getElementsByClassName("accept-container")[0];

// Get the cart element
var cart = document.getElementsByClassName('cart')[0];

// Get the body element
var none = document.querySelector('.body');

// Show the cart when the cart icon is clicked
cartIcon.onclick = () => {
    cartContainer.style.display = 'block';
    none.style.display = 'none';
};

// Close the cart when the cart close button is clicked
cartClose.onclick = () => {
    cartContainer.style.display = 'none';
    none.style.display = 'block';
};

// Show the accept container when the cart buy button is clicked
cartBuy.onclick = () => {
    acceptContainer.style.display = 'block';
    cart.style.display = 'none';
};

// Close the accept container when the accept buy button is clicked
acceptBuy.onclick = () => {
    acceptContainer.style.display = 'none';
    cart.style.display = 'block';
};

// Close the accept container when the accept close button is clicked
acceptClose.onclick = () => {
    acceptContainer.style.display = 'none';
    cart.style.display = 'block';
};

// Initialize the cart when the DOM is fully loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Function to initialize the cart
function ready() {
    // Remove cart items when the trash icon is clicked
    var removeCartButtons = document.getElementsByClassName('fa-trash');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

// Get the cart quantity input elements
var quantityInput = document.getElementsByClassName('cart-quantity');

// Update the cart total when the cart quantity input value changes
for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i];
    input.addEventListener('change', quantityChanged);
}

// Get the add to cart buttons
var addCart = document.getElementsByClassName('add-to-cart');

// Add cart items when the add to cart button is clicked
for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
}

// Function to remove cart items
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Function to update the cart total when the cart quantity input value changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Function to add cart items
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

// Function to add product to cart
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');

    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerHTML === title) {
            alert('You have already added this item to the cart');
            return;
        }
    }

    var cartBoxContent = `
        <div class="img">
            <img src="${productImg}" width="50px">
        </div>
        <div class="cart-info">
            <h4 class="cart-product-title">${title}</h4>
            <p class="cart-price">${price}</p>
            <input type="number" class="input cart-quantity" min="0" value="1">
        </div>
        <i class="fa-solid fa-trash cart-delete" style="color: #999"></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-delete')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// Function to update the cart total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var price = parseFloat(priceElement.innerHTML.replace('$', ''));
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var quantity = quantityElement.value;
        total += (price * quantity);
    }

    document.getElementById('cart-amount').innerHTML = '$' + total;
}