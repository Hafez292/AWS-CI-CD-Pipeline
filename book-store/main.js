// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookTitle = this.closest('.book-card').querySelector('.book-title').textContent;
            alert(`Added "${bookTitle}" to your cart!`);
            
            // Animation for button
            this.innerHTML = '<i class="fas fa-check"></i>';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i>';
                this.style.backgroundColor = '#2c3e50';
            }, 1500);
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}! You'll hear from us soon.`);
        this.reset();
    });
    
    // Cart button functionality
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', function() {
        alert('Your cart is empty. Start adding some books!');
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (this.value.trim() === '') {
                alert('Please enter a search term');
            } else {
                alert(`Searching for: ${this.value}`);
                this.value = '';
            }
        }
    });
});
