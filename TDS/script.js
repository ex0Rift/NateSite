TDS/script.js

function toggleDropdown() {
    const menu = document.getElementById("settingsMenu");
    menu.classList.toggle("show");
}
window.addEventListener("click", function(event) {
    const settingsButton = document.querySelector(".Settings");
    const dropdown = document.getElementById("settingsMenu");
    
    if (!settingsButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});
