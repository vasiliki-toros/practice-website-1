function begruessung(){
    if (true){
        var vorname = "Anna";
        var alter = 25;
    }
    console.log(alter);
    alert("Hallo " + vorname);
}


//Gruß
//Das Datum holen
const jetzt = new Date();


//Stunde holen
const stunde = jetzt.getHours();

let grusstext;
if (stunde < 11){
    grusstext = "Guten Morgen";
} else if (stunde < 18) {
    grusstext = "Guten Tag";
} else {
    grusstext = "Guten Abend";
}
document.getElementById("gruss").textContent = `${grusstext}, schön, dass Sie da sind!`;


const angebot = "HTML-Kurs";

let preis = 249;

const maxPlaetze = 12;

let belegtePlaetze = 7;

const istOnline = true;

let freiePlaetze = maxPlaetze - belegtePlaetze;

const plaetze_in_index = document.getElementById("plaetze");

if (freiePlaetze > 0){
    plaetze_in_index.textContent = `Noch ${freiePlaetze} von ${maxPlaetze} Plätzen frei.`;
}else{
    plaetze_in_index.textContent = "Leider ausgebucht.";
}

//Wochentag holen
const wochentag = jetzt.getDay();

let tipp_in_index;

switch (wochentag) {

    //Montag hat die Zahl 1 in Wochentag
    case 1:
        tipp_in_index = "Montags starten unsere neuen Kurse.";
        break;
    //Dienstag hat die Zahl 2 in Wochentag
    case 2:    
        tipp_in_index = "Dienstags beraten wir Sie bis 16 Uhr am Telefon";
        break;
    //Mittwochs findet keine Ausgabe statt.
    
    // Donnerstag hat die Zahl 4 in Wochentag
    case 4:
        tipp_in_index = "Donnerstags beraten wir Sie gerne bis 13:45 Uhr vor Ort und am Telefon.";
        break;
    // Freitag hat die Zahl 5 in Wochentag
    case 5:
        tipp_in_index = "Freitags gibt es Schnupperstunden.";
        break;
    // Samstag hat die Zahl 6 und Sonntag die Zahl 0 in Wochentag
    case 6:
    case 0:
        tipp_in_index = "Am Wochenende erreichen Sie uns per E-Mail.";
        break;
    default:
        tipp_in_index = "Rufen Sie uns an, wir beraten Sie gern";
}

document.getElementById("tipp").textContent = tipp_in_index;


//Plätze visuell darstellen

let anzeige = "";

for (let i = 1; i <= maxPlaetze; i++){
    if (i <= belegtePlaetze) {
        anzeige = anzeige + "●";
    }else{
        anzeige = anzeige + "○";
    }
}
document.getElementById("platzanzeige").textContent = anzeige;