console.log("freya.js is running…");

// Variabler og typer
let settingsDropdown = document.getElementById("settings-dropdown");
let darkModeStatus = document.getElementById("dark-mode-status");
let darkModeEnabled = false;

// Vis eller skjul indstillingsmenuen ved klik
let settingsLink = document.getElementById("settings");
settingsLink.addEventListener("click", function(event) {
    event.stopPropagation(); // Stop propagation for at undgå at lukke menuen med det samme
    if (settingsDropdown.style.display === "block") {
        settingsDropdown.style.display = "none";
    } else {
        settingsDropdown.style.display = "block";
    }
});

// Luk indstillingsmenuen, når der klikkes uden for menuen
document.addEventListener("click", function() {
    settingsDropdown.style.display = "none";
});

// Undgå at lukke menuen, når der klikkes inde i menuen
settingsDropdown.addEventListener("click", function(event) {
    event.stopPropagation();
});

// array via const - variable
const numbers = ["Søgeindstillinger", "Avanceret søgning", "Dine data i Søgning", "Søgehistorik", "Søg i Hjælp",];

// anden variable - kan ændres
let txt = "";
numbers.forEach(bygmenu); // loop
document.getElementById("minliste").innerHTML = txt; // DOM

// funktion der kaldes hver gang i loopet
function bygmenu(value, index, array) { 
  txt += "<li>" + value + "</li>"; 
}