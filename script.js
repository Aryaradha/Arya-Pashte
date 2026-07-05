// Correct Password
const correctPassword = "Arya Sir";

// Elements
const button = document.getElementById("unlockBtn");
const input = document.getElementById("password");
const status = document.getElementById("status");
const heart = document.querySelector(".heart");

// Unlock Button
button.addEventListener("click", checkPassword);

// Enter Key Support
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkPassword();
    }
});

function checkPassword(){

    const entered = input.value.trim();

    if(entered.toLowerCase() === correctPassword.toLowerCase()){

        status.innerHTML = "❤️ Mujhe Pata Tha... Sirf Tumhe Hi Yaad Hoga.";

        // Heart Glow
        heart.style.transform = "scale(1.4)";
        heart.style.textShadow =
        "0 0 20px #FF4F87, 0 0 60px #FF4F87, 0 0 120px #FFD700";

        // Button Change
        button.innerHTML = "Unlocked