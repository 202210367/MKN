// Gallery: Redirects to Product Details Page with data
function viewProduct(imageUrl, title, description, price) {
    localStorage.setItem('product', JSON.stringify({
        imageUrl: imageUrl,
        title: title,
        description: description,
        price: price
    }));
    window.location.href = 'product-details.html';
}

// Product Details Page: Load product information from localStorage
window.onload = function() {
    const product = JSON.parse(localStorage.getItem('product'));
    if (product) {
        document.getElementById('product-img').src = product.imageUrl;
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;

        // Add to Cart functionality
        document.getElementById('add-to-cart-btn').addEventListener('click', function() {
            addToCart(product);
        });
    }
};

// Cart Functionality: Add the product to the cart in localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been added to your cart!`);
}
