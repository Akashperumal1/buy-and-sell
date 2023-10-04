document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.cart-button');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });

    // Function to add an item to the cart
    function addToCart(event) {
        const name = event.target.getAttribute('data-name');
        const model = event.target.getAttribute('data-model');
        const price = event.target.getAttribute('data-price');
        const imageUrl = event.target.getAttribute('data-image-url');

        // Create an item object
        const item = {
            name: name,
            model: model,
            price: price,
            imageUrl: imageUrl,
        };

        // Store the item in localStorage (you can use any other storage method as well)
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
});
