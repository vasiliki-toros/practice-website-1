"use strict";

const url_parameter = new URLSearchParams(window.location.search);
const id_aus_url = url_parameter.get("id");




async function zeigeDetails() {
// detailliste wird erst erstellt, wenn ladeKurse komplett geladen ist
// funktion aufrufen, die schon geschrieben wurde
    const detailliste = await ladeKurse();
    // detailliste mit Konvertierung in number der Nummer aus der URL
    const kursdetail = detailliste[Number(id_aus_url)];

    // kurskarten ausgeben 
    let ausgabe = "";
    ausgabe = ausgabe + '<div class="detailkarte">';
    ausgabe = ausgabe +  "<h3>" + kursdetail.kursname + "</h3>";
    ausgabe = ausgabe +  "<p>Preis: " + formatierePreis(kursdetail.preis) + "</p>";
    ausgabe = ausgabe + "<p>Maximale Plätze: " + kursdetail.maxPlaetze + "</p>";
    ausgabe = ausgabe + "<p>Freie Plätze: " + kursdetail.plaetzeFrei + "</p>";
    ausgabe = ausgabe + "<p>Beschreibung: " + kursdetail.beschreibung + "</p>";
    ausgabe = ausgabe +  "</div>";

    document.getElementById("details").innerHTML = ausgabe;
}
// funktion aufrufen 

zeigeDetails();





