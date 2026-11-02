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

function zeigeAngebot(){
    //Hier wird der HTML-Code aller Karten gesammelt.
    let ausgabe = "";
    
    //Äußere Schleife: ein Durchlauf pro Kurs. i ist die Position des Kurses im Array (0 bis 4).
    for (let i = 0; i < kurse.length; i++){
        //Belegte Plätze = maximale Plätze - freie Plätze (z.B. 12 - 5 = 7)
        const belegte_plaetze = kurse[i].maxPlaetze - kurse[i].plaetzeFrei;
        //Beginn der Karte. Die Klasse "kurskarte" gibt ihr dasselbe Aussehen wie auf kurse.html.
        ausgabe = ausgabe + '<article class="kurskarte">';
        //Kursname als Überschrift
        ausgabe = ausgabe + '<h3>' + kurse[i].kursname + '</h3>';
        //Preis mit zwei Nachkommastellen und Euro-Zeichen, z.B. 199 wird zu 199,00 €
        ausgabe = ausgabe + '<p> Preis: '+ formatierePreis(kurse[i].preis) + '</p>';
        //WENN noch Plätze frei sind, steht die Anzahl in der Karte, SONST der Hinweis "Leider ausgebucht".
        //Eine id darf es nur einmal geben. Weil die Absätze in der Schleife mehrfach entstehen, bekommen sie eine Klasse.
        if(kurse[i].plaetzeFrei > 0){
            ausgabe = ausgabe + '<p class="plaetze">Noch ' + kurse[i].plaetzeFrei + ' von ' + kurse[i].maxPlaetze + ' Plätzen frei. </p>';
        } else{
            ausgabe = ausgabe + '<p class="plaetze">Leider ausgebucht</p>';
        }
        //Platzanzeige: wird für jeden Kurs neu leer angelegt, sonst hängen die Kreise aller Kurse aneinander.
        let anzeige = "";

        //Innere Schleife: ein Durchlauf pro Platz, von 1 bis zur maximalen Anzahl.
        //Sie läuft innerhalb der Kurs-Schleife, deshalb eine eigene Zählvariable j. i wird für den Kurs noch gebraucht.
        for (let j = 1; j <= kurse[i].maxPlaetze; j++){
            //Die ersten Plätze sind belegt (●), der Rest ist frei (○). Bsp.: 12 Plätze, 7 belegt = ●●●●●●●○○○○○
            if (j <= belegte_plaetze) {
                anzeige = anzeige + "●";
            }else{
                anzeige = anzeige + "○";
                }
            }
        //Platzanzeige als eigener Absatz in die Karte
        ausgabe = ausgabe + "<p>" + anzeige + "</p>";
        //Link zur Kursseite mit der Position des Kurses, z.B. kurse.html?id=0
        //Auf kurse.html wählt kursauswahl.js den Kurs im Dropdown vor und markiert die Karte.
        ausgabe = ausgabe + '<a href="kurse.html?id=' + i + '">Zum Kurs</a>';
        //Ende der Karte
        ausgabe = ausgabe + "</article>";

    }
    //Erst nach der Schleife werden alle Karten auf einmal in das HTML-Element mit der ID "angebot" geschrieben.
    document.getElementById("angebot").innerHTML = ausgabe;
}

//Ruft die Funktion beim Laden der Startseite auf.
zeigeAngebot()
