/* for home page*/
function getstarted() {
  window.location.href = "register.html";
}


/* for nav bar */
// Toggle the navbar-canvas on click
function toggleNavbar() {
  var navbar = document.getElementById("navbarCanvas");
  navbar.classList.toggle("active");
}

// Close the navbar when the close button is clicked
function closeNavbar() {
  var navbar = document.getElementById("navbarCanvas");
  navbar.classList.remove("active");
}
/* for form*/
function validateForm() {
  var username = document.getElementById("username").value;
  var phone = document.getElementById("phone").value;

  if (username.trim() === "" || phone.trim() === "" || !isValidPhoneNumber(phone)) {
    alert("Registration failed!");
    return false; // Prevent form submission
  }

  alert("Registered successfully!");
  window.location.replace("service.html"); // Redirect to the next page
  return false; // Prevent form submission (redundant, as the page will be redirected)
}

function isValidPhoneNumber(phone) {
  var phoneNumberRegex = /^\d{10}$/;
  return phoneNumberRegex.test(phone);
}
