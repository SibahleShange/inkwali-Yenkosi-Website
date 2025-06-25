
document.getElementById("shipOffButton").addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Validate the form
    var customerName = document.getElementById("customerName").value;
    var customerEmail = document.getElementById("customerEmail").value;
    var customerPhone = document.getElementById("customerPhone").value;
    var streetAddress = document.getElementById("streetAddress").value;
    var city = document.getElementById("city").value;
    var suburb = document.getElementById("suburb").value;
    var province = document.getElementById("province").value;
    var zipCode = document.getElementById("zipCode").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cardExpiration = document.getElementById("cardExpiration").value;
    var cardCVV = document.getElementById("cardCVV").value;
    var agreeTerms = document.getElementById("agreeTerms").checked; // Check the terms and conditions checkbox

    // Add your validation logic here
    if (customerName === "" || customerEmail === "" || customerPhone === "" || streetAddress === "" || city === "" || suburb === "" || province === "" || zipCode === "" || cardNumber === "" || cardExpiration === "" || cardCVV === "") {
        alert("Please fill in all fields.");
        return; // Exit the function to prevent redirection
    } else if (!agreeTerms) {
        alert("Please agree to the Terms and Conditions.");
        return; // Exit the function to prevent redirection
    }

    // Redirect to the Thank You page
    window.location.href = "thankyou.html";
});
 // JavaScript to toggle the mobile menu
 function toggleMobileMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// JavaScript to handle mobile menu item clicks
var mobileMenuItems = document.querySelectorAll('.mobile-menu a');
mobileMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        toggleMobileMenu(); // Close the mobile menu
    });
});






