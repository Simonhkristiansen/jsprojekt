console.log("sofie.js kører...");

// ---------- Åben og lukkefunktion på Google konto

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}
document.querySelector(".user-pic").addEventListener("click", toggleMenu);



// ----------- Ændring af bruger-navn

document.addEventListener("DOMContentLoaded", function () {
    // UserInfoContents-array --> forskellige navne og mails
    const userInfoContents = [
      {
        pText: "sysserhansen@falskmail.dk",
        h2Text: "Hej Sysser Hansen!",
      },
      {
        pText: "sabinepigen123@falskmail.com",
        h2Text: "Hej Sabine Petersen!",
      },
      {
        pText: "sørensøren@falskmail.dk",
        h2Text: "Hej Søren Madsen!",
      },
      {
        pText: "sebastiantheman@falskmail.com",
        h2Text: "Hej Sebastian Frederiksen!",
      },
    ];
  
    // Har både fat i "info-box1" og "user-info"
    const infoBox1 = document.getElementById("info-box1");
    const userInfo = document.querySelector(".user-info");
  
    let currentIndex = 0;
  
    // Tilføjer klik til info-box1
    infoBox1.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % userInfoContents.length;
      userInfo.querySelector("p").textContent = userInfoContents[currentIndex].pText;
      userInfo.querySelector("h2").textContent = userInfoContents[currentIndex].h2Text;
    });
  });



// ---------- Alert på Gmail og Billeder 

document.addEventListener("DOMContentLoaded", function () {
    // Finder alle "li a" links inden for .hero navigationen
    const heroLinks = document.querySelectorAll(".hero li a");

    // Tilføjer en klikbegivenhed til hvert link
    heroLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Få teksten inden i linket og vis en alert-besked med den tekst
            const linkText = link.textContent;
            alert(linkText + " blev klikket men desværre ikke udført!");
        });
    });
});



// ----------- Alert på prikker

document.addEventListener("DOMContentLoaded", function () {
    // Finder "prikker" element ved hjælp af klassen "dots"
    const dotsElement = document.querySelector(".dots");

    // Tilføjer en klikbegivenhed til "prikker" elementet
    dotsElement.addEventListener("click", function () {
        alert("Denne funktion virker desværre ikke!");
    });
});



// ----------- Underline på Gmail og Billeder

let heroLinks = document.querySelectorAll(".hero li a");

// Tilføjer en mouseover-begivenhed til hvert link
heroLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
        link.style.textDecoration = "underline";
    });

    link.addEventListener("mouseout", function () {
        link.style.textDecoration = "none";
    });
});



// ---------- Hover effekt på .info-box elementer

const infoBoxes = document.querySelectorAll(".info-box");



// Tilføj en klikbegivenhed til hvert .info-box element 
// Denne måde er ikke smart at kalde en funktion på, hvis man vil bruge den andre steder. Den bliver brugt direkte i stedet for at blive kaldt via et funktionskald.
infoBoxes.forEach((box) => {
    box.addEventListener("click", function () {
        // Hent den aktuelle baggrundsfarve
        const backgroundColor = window.getComputedStyle(box).backgroundColor;

        // Hvis baggrundsfarven er hvid, ændrer vi den til grå
        if (backgroundColor === "rgb(255, 255, 255)") {
            //box.style.backgroundColor = "gray";

            // Denne måde er ikke optimal hvis man vil have knappen til at ændre farve til andre farver end hvid, sort og grå spektrummer

            let r = 255;
            let g = 255;
            let b = 255;

            for (i = 0; i <= 100; i++) {

                r--
                g--
                b--

                box.style.backgroundColor = "rgb(" + r + ", " + g +" , " + b +")";
            }

        } else {
            // Ellers ændrer vi den tilbage til hvid
            box.style.backgroundColor = "white";
        }
    });
});



// ---------- Popup bokse under ikoner

const userPic = document.querySelector(".user-pic");
const dots = document.querySelector(".dots");

// Finder user-info-popup og dots-popup elementerne
const userInfoPopup = document.querySelector(".user-info-popup");
const dotsPopup = document.querySelector(".dots-popup");

// Tilføjer en eventlistener til user-pic for "mouseover" begivenheden
userPic.addEventListener("mouseover", showUserPicPopup);

// Tilføjer også en eventlistener til dots for "mouseover" begivenheden
dots.addEventListener("mouseover", showDotsPopup);

// Tilføjer en eventlistener til user-pic for "mouseout" begivenheden
userPic.addEventListener("mouseout", hideUserPicPopup);

// Tilføjer også en eventlistener til dots for "mouseout" begivenheden
dots.addEventListener("mouseout", hideDotsPopup);

function showUserPicPopup() {
    // Viser user-pic-popup
    userInfoPopup.style.display = "block";
}

function hideUserPicPopup() {
    // Skjuler user-pic-popup igen
    userInfoPopup.style.display = "none";
}

function showDotsPopup() {
    // Viser dots-popup
    dotsPopup.style.display = "block";
}

function hideDotsPopup() {
    // Skjuler dots-popup igen
    dotsPopup.style.display = "none";
}