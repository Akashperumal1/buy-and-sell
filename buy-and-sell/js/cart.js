document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    const buyButton = document.getElementById('buy-button');

    // Function to display cart items and calculate total price
    function displayCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        cartList.innerHTML = ''; // Clear the cart list before re-rendering

        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            const imageUrl = item.imageUrl;
            listItem.innerHTML = `
                <img src="${imageUrl}" alt="${item.name}">
                <div>
                    <p>Name: ${item.name}</p>
                    <p>Model: ${item.model}</p>
                    <p>Price: ${item.price}</p>
                </div>
                <span class="remove-icon" data-index="${index}">&times;</span>
            `;
            cartList.appendChild(listItem);

            // Calculate total price
            total += parseFloat(item.price.replace('$', ''));
        });

        // Display total price
        totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
    }

    // Function to remove a cart item by index
    function removeCartItem(index) {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Remove the item at the specified index
        if (index >= 0 && index < cartItems.length) {
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Refresh the cart display
            displayCartItems();
        }
    }

    // Add a click event listener to the cartList for handling remove icon clicks
    cartList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-icon')) {
            const index = event.target.getAttribute('data-index');
            if (index !== null) {
                removeCartItem(index);
            }
        }
    });

    // Display cart items and total price when the page loads
    displayCartItems();

    // Add click event listener to Buy button
    buyButton.addEventListener('click', function () {
        // Prompt the user for name, location, address, and delivery choice
        const name = prompt('Enter your name:');
        const location = prompt('Enter your location:');
        const address = prompt('Enter your address:');
        const delivery = prompt('Choose delivery method (cash/online):');

        // Create an order confirmation page
        const confirmationPage = document.createElement('div');
        confirmationPage.innerHTML = `
            <h2>Order Confirmation</h2>
            <p>Name: ${name}</p>
            <p>Location: ${location}</p>
            <p>Address: ${address}</p>
            <p>Delivery Method: ${delivery}</p>
            <p>Your order will be placed and delivered soon.</p>
            <p>Estimated Delivery Time: 3 days, 5 hours, 30 minutes</p> <!-- Adjust the time accordingly -->
        `;

        // Replace the content of cartList with the order confirmation page
        cartList.innerHTML = '';
        cartList.appendChild(confirmationPage);
    });
});
