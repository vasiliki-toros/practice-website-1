"use strict";

let kurse = [];

async function ladeKurse() {
    try {
        //hole Inhalt aus assets/daten.json, warte im seperatem Thread (ausgabe an prozessor) bis datei ausgelesen wurde
        const antwort = await fetch("assets/daten.json");
        //wenn datei nicht gelesen werden kann, wird eine neue Fehlermeldung produziert und an catch weitergegeben
        if(!antwort.ok){
            throw new Error("HTTP-Status " + antwort.status)
        }
        //konvertiere inhalt aus json in array
        const daten = await antwort.json();
        console.log("Geladen aus daten.json:", daten);
        console.log("Anzahl Kurse:", daten.length);
        console.log("Erster Kurs:", daten[0].kursname);
//gebe array an aufruferzurück
        return daten; 
    } catch (fehler) {
        console.error("Kurse konnten nicht geladen werden: "+ fehler.message);
        //gebe leeres array an aufrufer zurück
        return [];

    }
}
// ladeKurse();

