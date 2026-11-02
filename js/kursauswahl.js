//Strenger Modus: Der Browser meldet mehr Fehler, z.B. Variablen, die nicht mit let, const oder var angelegt wurden.
"use strict";



/*--------------------------------------DROPDOWN--------------------------------------*/

/*
START
    Lese Parameter aus der aktuellen URL
    Speichere den Wert des Parameters "id"
    Suche das HTML-Element mit der ID "kursauswahl"

    FUNKTION fuelleKursauswahl (liste, gewaehlt)
        Leere das Dropdown-Menü bis auf "Bitte auswählen"
        FÜR jeden Kurs in der Liste (liste) - Argument beim Aufruf
            Ermittle den Index des Kurses im Array "kurse"
            WENN der Index dem gewählten Kurs (gewaehlt) entspricht DANN
                Merke " selected" für die Vorauswahl
            ENDE WENN
        ENDE FÜR
        WENN im Dropdown-Menü ein Kurs gewählt ist DANN
            Suche die Karte des Kurses
            WENN die Karte auf der Seite steht DANN
                Markiere die Karte
            ENDE WENN
        ENDE WENN
    FUNKTION ENDE
    Rufe fuelleKursauswahl() mit allen Kursen und der id aus der Adresse auf
ENDE
*/


//kurse kommt aus daten.js. Die Karten (Karte0 bis Karte4) erzeugt kurskarten.js, die vor dieser Datei eingebunden ist.

//Bsp.: kurse.html?id=2
//Liest die URL-Parameter aus der aktuellen Internetadresse und bereitet sie für die Verarbeitung vor.
//1. window = repräsentiert das aktuelle Browserfenster
//2. window.location = enthält die Informationen über die aktuelle Internetadresse (Bsp.: https://meineseite.de/kurse.html?id=2)
//3. window.location.search = liefert den Teil der URL, der mit ? beginnt.
const url_parameter = new URLSearchParams(window.location.search);

//Holt den Wert (nur den Wert) aus der URL für den Schlüssel "id".
//Ergebnis ist immer Text, z.B. "2". Fehlt id in der Adresse, ist das Ergebnis null.
const id_aus_url = url_parameter.get("id");

//HTML-Element mit der ID "kursauswahl"
//Dropdown-Menü. Die Variable wird auch in rechner.js, kurse.js und formular.js benutzt.
let dropdown_kurse = document.getElementById("kursauswahl");


//for-Schleife läuft bis zum Ende des Arrays (kurse) und erzeugt für jeden Kurs aus dem Array einen Eintrag
/*

ID in der URL ist = 1
vorauswahl = "" (ist zu Anfang leerer Text)

1. Durchlauf
    Werte in der FOR-Schleife
        i = 0
        WENN (1 (id_aus_url) === 0 (i)). <------ trifft im ersten Durchlauf nicht zu
            Speichere das Wort " selected" in der Variable "vorauswahl"
            Füge dem HTML-Element mit der ID "Karte0" die Klasse "ausgewaehlt" hinzu
        ENDE WENN

        Bilde ein HTML-Element ohne "selected", da die WENN nicht zutrifft und die Variable nicht geändert wird
        <option value="0">Kursname aus Array </option>

        Erhöhe 0 (i) um 1 mit i++

1. Durchlauf ENDE

        Wie kommt der Kursname aus Array zustande?
        Wir sprechen mit dem Namen des Arrays das Array an = kurse,
        das Array hat viele Werte und Positionen, deshalb müssen wir eine Position angeben, 
        um Werte aus dieser Position zu bekommen = kurse[0] = die "0" steht für den Index im Array (Position der Werte).
        Unser Array hat nicht nur Werte, sondern "Sammlungen" (Objekte).
        Diese Sammlungen können mehrere Werte in sich tragen. Dabei gehört jeder Wert zu einem Schlüssel (Beispiel: kursname).
        Mit kurse[0].kursname rufen wir den Kursnamen der Sammlung mit dem Index 0 aus unserem Array auf.

2. Durchlauf
        i = 1
        WENN (1 (id_aus_url) === 1 (i)). <------ trifft im zweiten Durchlauf zu
            Speichere das Wort " selected" in der Variable "vorauswahl"
            Füge dem HTML-Element mit der ID "Karte1" die Klasse "ausgewaehlt" hinzu
        ENDE WENN

        Bilde ein HTML-Element mit "selected", da die WENN zutrifft und die Variable geändert wird
        <option value="1" selected>Kursname aus Array </option>

        Erhöhe 1 (i) um 1 mit i++


2. Durchlauf ENDE
...
ENDE SCHLEIFE

Da hier Variablen aus JavaScript im HTML-Code verwendet werden, muss eine gemischte Schreibweise gewählt werden.
In JavaScript wird HTML-Code mit "" oder '' geschrieben. Mit + kann eine Verkettung von HTML-Code und Variablen umgesetzt werden.
Erwartet der HTML-Code "" (Beispiel: <option value="Mein Wert">), muss die gesamte Zeile in '' stehen.

In diesem Beispiel sind i, vorauswahl und kurse[i].kursname JavaScript-Variablen und müssen somit außerhalb von "" stehen.
'<option value="' + i + '"'+vorauswahl+'>' + kurse[i].kursname + '</option>';
Vereinfacht: <option value="1" selected>Kursname aus Array </option>

Aufbau hier: 'HTML-Code' + JS-Code + 'HTML-Code' + JS-Code + 'HTML-Code' + JS-Code + 'HTML-Code';

Ergebnis: Wenn in der Adresszeile (URL) id=1 steht, wird i mit der 1 verglichen. Wenn also ID (URL) = 1 und
i aus dem Durchlauf ebenfalls 1 ist, ist es der gewünschte Kurs. Der Eintrag mit der ID (hier 1) wird beim dynamischen Erzeugen der HTML-Elemente
in der FOR-Schleife erstellt und ist somit selektiert.

Erzeugter HTML-Code:
    <select>
        <option value="0">HTML & CSS</option>
        <option value="1" selected>JavaScript Grundlagen</option>
        ...
        ...
    </select>
*/

function fuelleKursauswahl(liste, gewaehlt){
    //Alle Einträge löschen, nur "Bitte auswählen" bleibt
    dropdown_kurse.innerHTML = '<option value="">Bitte auswählen</option>'

    for (let k = 0; k < liste.length; k++){
        //Ein Durchlauf pro Kurs: dem Dropdown-Menü einen neuen Eintrag hinzufügen.

        //Wenn ID in URL mitgegeben wird, soll das Element mit der zutreffenden ID ausgewählt sein.

        //Bei jedem Durchlauf zuerst leerer Text. Nur beim passenden Kurs kommt " selected" hinein.
        let vorauswahl = "";

        let i = kurse.indexOf(liste[k]);

        //String(i) macht aus der Zahl i einen Text. id_aus_url ist Text, und === vergleicht auch den Datentyp.
        //Bsp.: if ("0" === "0")
        if (gewaehlt === String(i)){
            vorauswahl = " selected";
        }

        //innerHTML = bisheriger Inhalt + neue option, z.B. <option value="0" selected>HTML & CSS</option>
        dropdown_kurse.innerHTML = dropdown_kurse.innerHTML + '<option value="' + i + '"'+vorauswahl+'>' + kurse[i].kursname + '</option>';
    }

    if (dropdown_kurse.value !== ""){
        let karte = document.getElementById("Karte" + dropdown_kurse.value);
        if (karte !== null){
            karte.classList.add("ausgewaehlt");
        }
    }

}
//wird jetz in kurse.js in der funktion starteSeite aufgerufen