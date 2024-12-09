document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.dn');
    const products = document.querySelectorAll('.dn div');
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    let currentIndex = 0;
    const productsToShow = 3; // Number of products to display at a time
    const totalProducts = products.length;
    function updateSlider() {
        // Calculate the offset based on the current index
        const offset = -(currentIndex * (98 / productsToShow)); // Calculate offset in percentage
        productList.style.transform = `translateX(${offset}%)`; // Apply the transform for sliding
    }

    function showNextProducts() {
        // Increment the current index, ensuring it doesn't exceed the number of products
        if (currentIndex < Math.ceil(totalProducts / productsToShow) - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Wrap around to the first product
        }
        updateSlider();
    }

    function showPreviousProducts() {
        // Decrement the current index, ensuring it doesn't go below zero
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.ceil(totalProducts / productsToShow) - 1; // Wrap around to the last product
        }
        updateSlider();
    }

    leftArrow.addEventListener('click', function() {
        showPreviousProducts();
    });

    rightArrow.addEventListener('click', function() {
        showNextProducts();
    });

    // Initial display
    updateSlider();
});
