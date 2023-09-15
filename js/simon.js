console.log("simon.js is running…");

// Henter HTML-elementer fra DOM'en ved at konvertere dem til variabler.
let knap1 = "Google-søgning";
document.getElementById("søgning").innerHTML=knap1;
let knap2 = "Jeg prøver lykken";
document.getElementById("lykken").innerHTML=knap2;

//gør at knapperne bliver mørke når musen er over dem og lyse når musen ikke er over dem
function osøgning(){
    document.getElementById ("søgning").style.backgroundColor ="#d1d1d2";
}
function usøgning(){
    document.getElementById ("søgning").style.backgroundColor ="#f8f9fa";
}

function olykken(){
    document.getElementById ("lykken").style.backgroundColor ="#d1d1d2";
}
function ulykken(){
    document.getElementById ("lykken").style.backgroundColor ="#f8f9fa";
}

 // et array over mulige søgeforslag
let forslag = [
   "abracadabra",
   "a'hvad for en hest",
   "anananas marmelade",
   "bagstavet b",
   "bussmand afhænighed",
   "bilka sælger stoffer",
   "codavand",
   "cirkus revyen musical",
   "citrionsaft i øjnene",
   "din mor",
   "din far",
   "dinosaur fanklub",
   "elsker med heste",
   "en mand som hedder poul",
   "elektrisktandbørste i øret",
   "fanta kondi",
   "frankring erstatter deres flag med et helt hvidt",
   "fynsk koder Simon kristiansen er mega lækkker",
   "gør det selv tandbørstning",
   "gravid i uge 40",
   "gratis gastronomisk gaskomfur",
   "hest",
   "hvem er den flotteste i jsprojektet?",
   "hurtigbriller",
   "i må ha' et godt liv",
   "is er for kolde",
   "isral palestina krisen er for lang",
   "julemandens kano",
   "jyland melder sig ud af danmark",
   "jeg ved ikke hvad jeg skal skrive...",
   "kalle kærlighed",
   "kalle lige hvad du vil",
   "kunstigt åndedræt ved første blik",
   "lokumspapir hacks",
   "lugter  min næse eller fødder",
   "larmende nabo aflivning nær mig",
   "må man prutte i en elevator",
   "må vi ikke please få 12 for denne opgave?",
   "maler chips",
   "nosse sved",
   "nullermænd under sofaen?",
   "navne på folk jeg har kendt for længe til at spørge",
   "ortupædiskkiruiskafdellingsansvalighedskomunikation",
   "ove ditlevsen",
   "overanstrengelse af øjenbryn",
   "power har en svær hjemmeside at efterligne",
   "peanutbutter opskrifter",
   "pension for studernde",
   "quick brown fox jumps over the lazy dog",
   "Q8 bliver co2 neutral",
   "quick tips for coders",
   "rosiner øger neglelængde",
   "ruben søltoft får arbejde i netto",
   "riskiks smager godt?",
   "Simon har skrevet denne kode",
   "Sofie har ikke skrevet denne specefikke kode",
   "Spise med price i nordkorea",
   "trænger jeg til et glas vand?",
   "tør jeg at gå på stylter",
   "Thomas...? please gi' mig 12!?",
   "udendørs støvsugning?",
   "unge er på magisk vis blevet velgørende",
   "underbuks med denim",
   "vil jeg få 12?",
   "vil du være sød og stoppe med at prikke mig i øjet?",
   "viunge magasinet fylder 60 år",
   "whiskey med mokai",
   "www.google.dk",
   "will smith gir en lussing til en rap fyr i LA",
   "xray briller til uskyldig brug...",
   "XL-byg slår sig sammen med Matas",
   "XXL mankini",
   "youtube var en datingapp?",
   "yvonne er herrer træls",
   "ytringfrihed skal holde mund",
   "zalando stjal min guitar",
   "zoologiskhave holder dyr indespærret?",
   "zoneterapi vs akupunktur",
   "æblekage uden æbler?",
   "ærøfærgen findes ikke",
   "æstetik er grimt",
   "ølvom er frækt?",
   "ønskeskyen regner",
   "østrig følger med i dronningens nytårstale",
   "åle som starterkabler til elbil?",
   "århus købes af Elon Musk",
   "Åbningstider for døgnnetto?",
   "1. pladesen i terningkast",
   "1+1-1=",
   "10 måder at børste tænder på",
   "2. division i affaldssortering",
   "2023 copenhagen jazz festival",
   "2d biograf",
   "3 måder at lede på som motiverer dine medarbejdere",
   "3 små aber sad på en gren - dupstep version",
   "3 ting jeg ville tage med på en øde ø",
   "4 måder at udtale odense på",
   "4 nuggets kalorier",
   "4 klip i kørekortet",
   "5 hemmelige opskrifter på rumvæsenes yndlingsdessert",
   "5 videnskabeligt umulige måder at klone din husplante på",
   "5 metoder til at forhindre zombier i at stjæle din pizza",
   "6 utrolige opdagelser i en mystisk gravhøj",
   "6 tricks til at lære dit kæledyr at danse ballet",
   "6 alternative anvendelser af en tidsmaskine",
   "7 måder at træne en enhjørning til at lave cupcakes",
   "7 skøre teorier om, hvad der sker i Bermudatrekanten",
   "7 tips til at finde den skjulte skat i din baghave",
   "8 opskrifter på intergalaktisk pizza med 8 forskellige oste",
   "8 uventede måder at besejre en drage med en blyant",
   "8 hemmelige teknikker til at tale med dyr i en zoologisk have",
   "9 trin til at omdanne din stue til en tidsmaskine",
   "9 bizarre ritualer fra en fiktiv kultur på Månen",
   "9 måder at træne en papegøje til at recitere Shakespeare",
];

// Henter HTML-elementer fra DOM'en ved at konvertere dem til variabler.
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultatboks = searchInput.querySelector(".resultatboks");

// Laver en eventer litener, som opstår ved indtastning i inputfelter
input.onkeyup = (e) => {
    let intastning = e.target.value;
    if (intastning) {
        emptyArray = forslag.filter((data) => {
            return data.toLocaleLowerCase().startsWith(intastning.toLocaleLowerCase());
        });

        // æbndre højden på resultatboksen efter antallet a søgeforslag
        if (emptyArray.length === 3) {
            resultatboks.style.marginTop = '110px';
        } else {
            resultatboks.style.marginTop = '55px'; 
        }

        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });

        searchInput.classList.add("active");
        showforslag(emptyArray);

        let listen = resultatboks.querySelectorAll("li");
        for (let i = 0; i < listen.length; i++) {
            listen[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchInput.classList.remove("active");
        resultatboks.style.marginTop = ''; // Fjern margin-top, hvis inputfeltet er tomt.
    }
}


// Funktion for at vise forslag i resulatatboken.
function showforslag(list){
    let listData;
    if(!list.length){
        // Hvis der ikke er nogen matchende forslag, vises brugerens indtastede tekst.
        listData = '<li>'+ input.value +'</li>';
    }else{
        // Ellers vises de matchende forslag.
        listData = list.join('');
    }
    // Opdaterer indholdet af resulaterboksen med de matchende forslag.
    resultatboks.innerHTML = listData;
}


// gør at hvis man klikker uden for inputfleter, bliver det slået fra
document.addEventListener('click', function(event) {
    const target = event.target;
    const searchInput = document.querySelector('.searchInput');
    if (!searchInput.contains(target)) {
        searchInput.classList.remove('active');
    }
});






