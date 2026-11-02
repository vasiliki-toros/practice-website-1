//Strenger Modus: Der Browser meldet mehr Fehler, z.B. Variablen, die nicht mit let, const oder var angelegt wurden.
"use strict";



/*--------------------------------------FUNKTIONEN FÜR STARTSEITE--------------------------------------*/


/*
FUNKTION begruessung()
    WENN wahr DANN
        Lege die Variablen vorname und alter mit var an
    ENDE WENN
    Gib alter in der Konsole aus
    Zeige "Hallo" und den Vornamen in einem Hinweisfenster
ENDE FUNKTION
*/

//Beispiel vom ersten Tag zum Unterschied zwischen var und let.
//Die Startseite ruft die Funktion nicht mehr auf, weil der Knopf "Begrüßung" entfernt wurde.
function begruessung(){
    //if (true): Die Bedingung ist immer erfüllt, der Block läuft also immer.
    if (true){
        //var gilt in der ganzen Funktion, nicht nur im Block zwischen { und }.
        var vorname = "Anna";
        var alter = 25;
    }
    //alter ist hier noch bekannt, weil es mit var angelegt wurde. Mit let käme: ReferenceError: alter is not defined
    console.log(alter);
    //alert() öffnet ein Hinweisfenster des Browsers.
    alert("Hallo " + vorname);
}


/*--------------------------------------GRUSS--------------------------------------*/

/*
START
    Hole das aktuelle Datum mit Uhrzeit
    Hole die Stunde
    WENN die Stunde kleiner als 11 ist DANN
        Gruß = "Guten Morgen"
    SONST WENN die Stunde kleiner als 18 ist DANN
        Gruß = "Guten Tag"
    SONST
        Gruß = "Guten Abend"
    ENDE WENN
    Schreibe den Gruß in das HTML-Element mit der ID "gruss"
ENDE
*/

//Gruß
//Das Datum holen
//new Date() erzeugt ein Datumsobjekt mit dem aktuellen Datum und der aktuellen Uhrzeit des Computers.
const jetzt = new Date();


//Stunde holen
//getHours() liefert die Stunde als Zahl von 0 bis 23.
const stunde = jetzt.getHours();

//Variable ohne Startwert. Der Text wird erst in der Verzweigung festgelegt.
let grusstext;
//Die Bedingungen werden von oben nach unten geprüft. Die erste, die zutrifft, wird ausgeführt, der Rest wird übersprungen.
//Bsp.: 9 Uhr = Guten Morgen, 14 Uhr = Guten Tag (11 bis 17 Uhr), 20 Uhr = Guten Abend
if (stunde < 11){
    grusstext = "Guten Morgen";
} else if (stunde < 18) {
    grusstext = "Guten Tag";
} else {
    grusstext = "Guten Abend";
}
//textContent setzt den Text eines HTML-Elements.
//Template-String mit Backticks (`): ${grusstext} setzt den Inhalt der Variable in den Text ein.
//Ergebnis z.B.: Guten Morgen, schön, dass Sie da sind!
document.getElementById("gruss").textContent = `${grusstext}, schön, dass Sie da sind!`;



/*--------------------------------------TIPP NACH WOCHENTAG--------------------------------------*/

/*
START
    Hole den Wochentag als Zahl
    PRÜFE den Wochentag
        FALL 1 (Montag): Tipp = neue Kurse
        FALL 2 (Dienstag): Tipp = Beratung am Telefon
        FALL 4 (Donnerstag): Tipp = Beratung vor Ort und am Telefon
        FALL 5 (Freitag): Tipp = Schnupperstunden
        FALL 6 oder 0 (Wochenende): Tipp = E-Mail
        SONST (Mittwoch): Tipp = "Rufen Sie uns an, wir beraten Sie gern"
    ENDE PRÜFE
    Schreibe den Tipp in das HTML-Element mit der ID "tipp"
ENDE
*/

//Wochentag holen
//getDay() liefert den Wochentag als Zahl: 0 = Sonntag, 1 = Montag ... 6 = Samstag.
const wochentag = jetzt.getDay();

//Variable für den Tipp, der Text wird im switch festgelegt.
let tipp_in_index;

//switch vergleicht den Wert von wochentag nacheinander mit jedem case.
//Bei einem Treffer läuft der Code ab diesem case bis zum nächsten break.
switch (wochentag) {

    //Montag hat die Zahl 1 in Wochentag
    case 1:
        //break beendet den switch. Ohne break liefe der Code in den nächsten case weiter.
        tipp_in_index = "Montags starten unsere neuen Kurse.";
        break;
    //Dienstag hat die Zahl 2 in Wochentag
    case 2:    
        tipp_in_index = "Dienstags beraten wir Sie bis 16 Uhr am Telefon";
        break;
    //Mittwoch (3) hat keinen eigenen case, deshalb greift default.
    
    // Donnerstag hat die Zahl 4 in Wochentag
    case 4:
        tipp_in_index = "Donnerstags beraten wir Sie gerne bis 13:45 Uhr vor Ort und am Telefon.";
        break;
    // Freitag hat die Zahl 5 in Wochentag
    case 5:
        tipp_in_index = "Freitags gibt es Schnupperstunden.";
        break;
    // Samstag hat die Zahl 6 und Sonntag die Zahl 0 in Wochentag
    //case 6 hat kein break: Der Code läuft weiter in case 0. So teilen sich beide Tage einen Text.
    case 6:
    case 0:
        tipp_in_index = "Am Wochenende erreichen Sie uns per E-Mail.";
        break;
    //default greift, wenn kein case passt (hier nur Mittwoch).
    default:
        tipp_in_index = "Rufen Sie uns an, wir beraten Sie gern";
}

//Schreibt den Tipp in das HTML-Element mit der ID "tipp".
document.getElementById("tipp").textContent = tipp_in_index;


/*----------------------------ANGEBOT------------------------------*/
/*
FUNKTION zeigeAngebot()
    Erstelle eine leere Variable "ausgabe"
    FÜR jeden Kurs in der Liste "kurse"
        Berechne die belegten Plätze aus maximalen und freien Plätzen
        Erstelle ein HTML-Element (article) mit der Klasse "kurskarte"
        Füge den Kursnamen und den formatierten Preis ein
        WENN noch Plätze frei sind DANN
            Füge "Noch X von Y Plätzen frei" ein
        SONST
            Füge "Leider ausgebucht" ein
        ENDE WENN
        FÜR jeden Platz von 1 bis zur maximalen Anzahl
            WENN der Platz belegt ist DANN
                Hänge "●" an die Platzanzeige an
            SONST
                Hänge "○" an die Platzanzeige an
            ENDE WENN
        ENDE FÜR
        Füge die Platzanzeige ein
        Füge den Link "Zum Kurs" mit der Position des Kurses ein
        Schließe den Container
    ENDE FÜR
    Füge "ausgabe" in das HTML-Element mit der ID "angebot" ein
ENDE FUNKTION
*/

//Erzeugt für jeden Kurs aus daten.js eine Karte und schreibt alle Karten in das HTML-Element mit der ID "angebot".
//kurse kommt aus daten.js, formatierePreis() aus hilfsfunktionen.js.
//Deshalb müssen beide Dateien in index.html vor start.js eingebunden sein.
function zeigeAngebot(){

    let auswahl = [];

    //Hier wird der HTML-Code aller Karten gesammelt.
    let ausgabe = "";
    for (let i = 0; i < kurse.length; i++){
        if (kurse[i].plaetzeFrei>0){
            auswahl.push(kurse[i]);
        }
    }

    for (let i = 0; i < auswahl.length-1; i++){
        for (let j = i + 1; j < auswahl.length; j++){
            const belegt_i = auswahl[i].maxPlaetze - auswahl[i].plaetzeFrei;
            const belegt_j = auswahl[j].maxPlaetze - auswahl[j].plaetzeFrei;

            if (belegt_j>belegt_i){
                let zwischenspeicher = auswahl [i];
                auswahl[i] = auswahl[j];
                auswahl[j] = zwischenspeicher;
            }
        }

    }
//höchstens 3 karten
    const anzahl = Math.min(3, auswahl.length);


    
    //Äußere Schleife: ein Durchlauf pro Kurs. i ist die Position des Kurses im Array (0 bis 4).
    for (let k = 0; k < anzahl; k++){
        const i = kurse.indexOf(auswahl[k]);
        //Belegte Plätze = maximale Plätze - freie Plätze (z.B. 12 - 5 = 7)
        const belegte_plaetze = auswahl[k].maxPlaetze - auswahl[k].plaetzeFrei;
        //Beginn der Karte. Die Klasse "kurskarte" gibt ihr dasselbe Aussehen wie auf kurse.html.
        ausgabe = ausgabe + '<article class="kurskarte">';
        //Kursname als Überschrift
        ausgabe = ausgabe + '<h3>' + auswahl[k].kursname + '</h3>';
        //Preis mit zwei Nachkommastellen und Euro-Zeichen, z.B. 199 wird zu 199,00 €
        ausgabe = ausgabe + '<p> Preis: '+ formatierePreis(auswahl[k].preis) + '</p>';
       
        ausgabe = ausgabe + '<p class="plaetze">Noch ' + auswahl[k].plaetzeFrei + ' von ' + auswahl[k].maxPlaetze + ' Plätzen frei. </p>';
        
        
    
        
        //Platzanzeige: wird für jeden Kurs neu leer angelegt, sonst hängen die Kreise aller Kurse aneinander.
        let anzeige = "";

        //Innere Schleife: ein Durchlauf pro Platz, von 1 bis zur maximalen Anzahl.
        //Sie läuft innerhalb der Kurs-Schleife, deshalb eine eigene Zählvariable j. i wird für den Kurs noch gebraucht.
        for (let j = 1; j <= auswahl[k].maxPlaetze; j++){
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
        ausgabe = ausgabe + '<a href="kursdetails.html?id=' + i + ' ">Details</a>';
        //Ende der Karte
        ausgabe = ausgabe + "</article>";
        }
    
    //Erst nach der Schleife werden alle Karten auf einmal in das HTML-Element mit der ID "angebot" geschrieben.
    document.getElementById("angebot").innerHTML = ausgabe;
        }
        

//Ruft die Funktion beim Laden der Startseite auf.



//Plätze visuell darstellen
//Alte Version für einen einzelnen Kurs mit eigenen Werten. Ersetzt durch die innere Schleife in zeigeAngebot().

// let anzeige = "";

// for (let i = 1; i <= maxPlaetze; i++){
//     if (i <= belegtePlaetze) {
//         anzeige = anzeige + "●";
//     }else{
//         anzeige = anzeige + "○";
//     }
// }
// document.getElementById("platzanzeige").textContent = anzeige;

//alle Elemente mit der Klasse btn_index holen, auch wenn es nur eins gibt
const buttons = document.querySelectorAll(".btn_index");

//ein Durchlauf pro Button: jeder bekommt einen Klick-Listener
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(ereignis){
window.location.href = ereignis.currentTarget.dataset.ziel;
    });
}

async function starteSeite(){
    document.getElementById("angebot").innerHTML = "<p>Lade Kurse...<p>"
    kurse = await ladeKurse();
    if(kurse.length === 0){
        document.getElementById("angebot").innerHTML = "<p> Kurse konnten nicht gelden werden.</p>";

    }
    zeigeAngebot();
}
starteSeite();
