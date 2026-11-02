"use strict";

/*
FUNKTION ladeMerkliste()
    Lade die gespeicherte Merkliste aus dem Speicher

    WENN keine Merkliste vorhanden ist DANN 
        Gib eine leere Liste zurück
    ENDE WENN

    Wandle den gespeicherten Text in eine Liste um

    gib die Liste zurück

ENDE FUNKTION
*/

function ladeMerkliste(){
    const text = localStorage.getItem("merkliste");

    if (text === null){
        return [];
    }
    return JSON.parse(text);
}

/*
FUNKTION speichereMerkliste(liste)
    
    Wandle die übergebene Liste in einen Text um

    Speichere den Text unter dem Namen "merkliste" im Speicher

ENDE FUNKTION
*/

function speichereMerkliste(liste){
    localStorage.setItem("merkliste", JSON.stringify(liste));
}

/*
FUNKTION formatierePreis(unformatierter_preis)
   
    Runde den Preis auf zwei Nachkommastellen

    Ersetze den Dezimalpunkt durch ein Komma

    Füge das Eurozeichen hinzu

    Gib den formatierten Preis zurück

ENDE FUNKTION
*/



/*FUNKTION zeigeMerkliste()
    
    Lade die gespeicherte Merkliste
    Hole den HTML-Bereich für die Merkliste

    WENN die Merkliste leer ist DANN
        Zeige Hinweis "Sie haben noch keine Kurse vorgemerkt"
        Zeige Link zur Kursübersicht
        Beende die Funktion
    ENDE WENN

    Erstelle eine Tabelle mit den Spalten:
        Kurs, Preis, Entfernen

    Setze Summe auf 0

    FÜR jeden Kurs in der Merkliste WIEDERHOLE
        Erstelle einen neue Tabellenzeile
        Füge den Kursnamen hinzu
        Füge den formatierten Kurspreis hinzu
        Füge eine Schaltfläche zum Entfernen hinzu
        Schließe die Tabellenzeile
        Addiere den Kurspreis zur Summe
    ENDE FÜR

    Füge eine Tabellenzeile mit der Gesamtsumme hinzu
    Schließe die Tabelle
    Zeige die fertige Tabelle auf der Webseite an

ENDE FUNKTION
*/

/*
            <table>
                <thead><tr><th>Kurs</th><th>Preis</th><th></th></tr></thead>
                <tbody>
                <tr><td>Kursname</td><td>Preis</td><td><button>Enfernen</button></td></tr>
                </tbody>
                <tfoot>
                    <tr><th>Summe</th><th></th></tr>
                </tfoot>
            </table>
*/
function zeigeMerkliste() {
    const merkliste_aus_der_funktion = ladeMerkliste();
    const bereich_in_html = document.getElementById("id_merkliste");

    if (merkliste_aus_der_funktion.length === 0){
        bereich_in_html.innerHTML = '<p>Sie haben noch keine Kurse vorgemerkt.</p> <a href="kurse.html">Zu den Kursen</a>';
        return;
    }

    //Anfang der Tabelle
    let ausgabe_in_html = "<table><thead><tr><th>Kurs</th><th>Preis</th><th></th></tr></thead><tbody>";

    //Setze Summe auf 0
    let summe = 0;

    //Tabelleninhalt
    for (let i = 0; i < merkliste_aus_der_funktion.length; i++){
        ausgabe_in_html = ausgabe_in_html + "<tr>";
        ausgabe_in_html = ausgabe_in_html + "<td>" + merkliste_aus_der_funktion[i].kursname + "</td>";
        ausgabe_in_html = ausgabe_in_html + "<td>" + formatierePreis(merkliste_aus_der_funktion[i].preis) + "</td>";
        //<td><button onclick="entferneKurs(0)"</td>
        ausgabe_in_html = ausgabe_in_html + '<td><button onclick="entferneKurs('+i+')">Entfernen</button></td>';
        ausgabe_in_html = ausgabe_in_html + "</tr>";
        summe = summe + merkliste_aus_der_funktion[i].preis;
    }

    //Ende der Tabelle
    ausgabe_in_html = ausgabe_in_html + "</tbody><tfoot><tr><th>Summe: </th><th>"+formatierePreis(summe)+"</th></tr></tfoot></table>";
    //Ausgabe der fertigen Tabelle in HTML
    bereich_in_html.innerHTML = ausgabe_in_html;
}

/*
FUNKTION entferneKurs(index)

    Lade die gespeicherte Merkliste

    Entferne den Kurs an der angegebenen Postion

    Speichere die aktualisierte Merkliste

    Aktualisiere die Anzeige der Merkliste

ENDE FUNKTION
*/

function entferneKurs(index){
    let merkliste_aus_der_funktion = ladeMerkliste();
    merkliste_aus_der_funktion.splice(index,1);
    speichereMerkliste(merkliste_aus_der_funktion);
    zeigeMerkliste();
}
// Hole button mit ID merklisteLeeren
//WENN button angeklickt wird DANN
    //rufe Funkion leereMerkliste() auf
//ENDE WENN

const button_in_html = document.getElementById("btn_merkliste_leeren");
button_in_html.addEventListener("click", leereMerkliste);

//Funktion leereMerkliste()
//Lösche gespeicherte Merkliste
//rufe die Funktion zeigeMerkliste()auf, um Anzeige zu aktuelisieren
//ENDE FUNKTION
function leereMerkliste(){
    localStorage.removeItem("merkliste");
    zeigeMerkliste();
}
zeigeMerkliste();


