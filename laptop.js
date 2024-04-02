let btn1 = document.getElementById('btn1');
let price1 = document.getElementById('price1');
let orgPrice1 = document.getElementById('orgprice1');




// Function to handle button click events
function handleButtonClick(btn, priceElement, orgPriceElement) {
    btn.addEventListener('click', () => {
        // Get the values from the DOM elements
        let currentPrice = priceElement.innerText;
        let originalPrice = orgPriceElement.innerText;

        // Store the values in session storage
        sessionStorage.setItem('currentPrice', currentPrice);
        sessionStorage.setItem('originalPrice', originalPrice);

        // You can also console log the values if needed
        console.log('Values stored in session storage:', currentPrice, originalPrice);
    });
}

// Add event listeners for buttons 1 to 10
for (let i = 1; i <= 12; i++) {
    let btn = document.getElementById('btn' + i);
    let priceElement = document.getElementById('price' + i);
    let orgPriceElement = document.getElementById('orgprice' + i);

    // Call the function to handle button click events
    handleButtonClick(btn, priceElement, orgPriceElement);
}
