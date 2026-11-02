"use strict";



//For-Schleife bildet für jeden Eintrag im Array (kurse) eine HTML-Karte und speichert diese vorerst in der Variable.

function zeigeKurskarten(liste) {
    let ausgabe = "";
    if (liste.length === 0){
        ausgabe = "<p>Kein Kurs passt zu Ihrer Suche.</p>";

    }



for (let k = 0; k < liste.length; k++){

    let i = kurse.indexOf(liste[k]);

    //öffne Cotnainer
    ausgabe = ausgabe + '<div id="Karte' + i + '" class="kurskarte">';
    //Erstelle überschrift im Container
    ausgabe = ausgabe + "<h3>" + kurse[i].kursname + "</h3>";
    ausgabe = ausgabe + "<p>Preis: " + formatierePreis(kurse[k].preis) + "</p>";
    //erstelle paragraph und lese maximale plätze, füge diese ein
    ausgabe = ausgabe + "<p>Maximale Plätze: " + kurse[k].maxPlaetze + "</p>";
    ausgabe = ausgabe + "<p>Freie Plätze: " + kurse[k].plaetzeFrei + "</p>";
    ausgabe = ausgabe + '<button onclick="merkeKurs('+i+')">Merken</button>';
    ausgabe = ausgabe + '<a href="kursdetails.html?id=' + k + ' ">Details</a>';
    
    ausgabe = ausgabe + "</div>";
}
//Sucht das HTML-Element mit der ID "kursliste" und fürgt den HTML Code aus der Variable "ausgabe" hinzu.
//Hier entstehen die sichtbaren HTML Kurskarten//HTML-Element mit der ID "kursauswahl"

document.getElementById("kursliste").innerHTML = ausgabe;}
zeigeKurskarten(kurse);
