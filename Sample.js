var tapButton = document.getElementById('tap-button');
var waterElement = document.querySelector('.tank');
var waterEle = document.querySelector('.water');
var isAnimating = false; // Flag to track animation state
var interval; // Variable to store interval reference

tapButton.addEventListener('click', function() {
    // Toggle animation on button click
    tapButton.classList.toggle('changer');
    if (waterEle.style.display === "block") {
        waterEle.style.display = "none";
    } else {
        waterEle.style.display = "block";
    }
    if (!isAnimating) { // If animation is not currently running, start it
        isAnimating = true;
        var currentHeight = parseFloat(getComputedStyle(waterElement).height);
        interval = setInterval(function() {
            currentHeight -=1; // Adjust the decrement value for the desired speed
            waterElement.style.height = currentHeight + 'px';
            if (currentHeight <= 0) {
                clearInterval(interval);
                waterEle.style.display = "none"; // Optional: Hide water container when empty
                tapButton.style.backgroundColor = "red"; // Change button color when empty
                isAnimating = false; // Reset animation flag when animation ends
                waterElement.style.display="none"
            }
        }, 20);
    } else { // If animation is currently running, pause it
        clearInterval(interval);
        isAnimating = false;
    }


});
