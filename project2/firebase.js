
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjLSFC6drSgGOSXH9nm_sYtF7QxA8pazI",
    authDomain: "hari4you-28f1f.firebaseapp.com",
    databaseURL: "https://hari4you-28f1f-default-rtdb.firebaseio.com",
    projectId: "hari4you-28f1f",
    storageBucket: "hari4you-28f1f.appspot.com",
    messagingSenderId: "852852816055",
    appId: "1:852852816055:web:530695b7ddcfc5d59bb532",
    measurementId: "G-1HVPQSFTL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const phonenumber = document.getElementById("phonenumber").value;

  // Get a reference to the database
  const db = getDatabase();

  // Check if the entered username exists in the database
  set(ref(db, 'users/' + username), {
    username: username,
    phonenumber: phonenumber
  })
    .then(() => {
      alert("User registered successfully!");
      loginForm.reset();
    })
    .catch(error => {
      console.error("Error registering user:", error);
    });
    document.getElementById("username").value = "";
  document.getElementById("phonenumber").value = "";
});

// Clear cache when leaving the page
window.onunload = function () {
  if (performance.navigation.type === 2) {
    // Clear cache if the user is navigating away from the page
    if (window.location.href.indexOf('login.html') === -1) {
      // Exclude login.html from cache clearing
      window.location.reload(true);
    }
  }
};
