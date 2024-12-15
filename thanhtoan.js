// script.js
document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');

    // Sample data for snacks
    const snacks = [
        { name: 'Potato Chips', price: 2.5 },
        { name: 'Chocolate Bar', price: 1.5 },
        { name: 'Soda', price: 1.2 }
    ];

    // Render snacks in the order list
    let total = 0;
    snacks.forEach(snack => {
        const listItem = document.createElement('li');
        listItem.textContent = `${snack.name} - $${snack.price.toFixed(2)}`;
        orderList.appendChild(listItem);
        total += snack.price;
    });

    // Update total price
    totalPriceElement.textContent = `$${total.toFixed(2)}`;

    // Handle payment form submission
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Payment successful! Thank you for your purchase.');
    });
});
