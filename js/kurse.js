"use strict";


// Überwacht Veränderungen im DropDown Menü
dropdown_kurse.addEventListener("change", function(){
    //Schleife, die solange läuft, bis das Array kurse durchgelaufen ist.
       for (let i = 0; i < kurse.length; i++){
        let karte = document.getElementById("Karte"+i);
        if (karte !== null){
            karte.classList.remove("ausgewaehlt");
        }
    }

    if (dropdown_kurse.value !== ""){
        let gewaehlte_karte = document.getElementById("Karte"+dropdown_kurse.value);
        if(gewaehlte_karte !== null){
            gewaehlte_karte.classList.add("ausgewaehlt");
        }
    }
    //ruft die Funktion berechnePreis() auf.
    berechnePreis();
});

// // FUNKTION merkeKurs(index)
//     lese die gespeicherte Merkliste aus dem Speicher
//     Erstelle eine leere Liste
//     WENN
//     gespeicherte Merkliste nicht nicht leer ist (vorhanden ist)
//      DANN
//      wandle gespeicherten TExt in eine Liste um
//     ENDE WENN
//     ERmittle den aktuellen Kurs anhand des übergebenen Index
//     Suche das HTML ELEMEND mit der ID "merkhinweis" für die Hinweismeldung
//     FÜR jeden Kurs in der Merkliste
//         WENN der Kursname bereits in der Merkliste vorhanden ist
//             zeige die Meldung "Kurs steht schon aauf der Merkliste"
//             BEende funktion
//         ENDE WENN
//     ENDE FÜR
//     Füge den Kurs mit Kursname und Preis zur Merkliste hinzu
//     WAndle MErkliste in TExt um 
//     Speichere aktualisierte Merkliste im SPeicher
// ENDE FUNKTION

//Funktion mit Übergabewert (index ist 0,1,2 usw.)
function merkeKurs(index){
    //Hole merkliste aus localstorage in die Konstante "text". Inhalt ist Text.
    const text = localStorage.getItem("merkliste");
    //Variable für die Umwandlung von "text" in Array.
    let merkliste = [];
    //Wenn "text" nicht leer ist
    if (text !== null){
        //wandle "text" in das Array "merkliste" um.
        merkliste = JSON.parse(text);
    }
    //Konstante liest das Array an bestimmter Position (z.B.: kurse[0])
    const aktueller_kurs = kurse[index];
    //Hole das HTML Element mit der ID="merkhinweis" in die Konstante
    const hinweis_in_kurse_html = document.getElementById("merkhinweis");
    //Laufe die Schleife bis zu Ende der Mejrliste
    //Diese prüft ob der Kursname bereits in der Merkliste vorhanden ist
    for (let i = 0; i < merkliste.length; i++){
        //Jeder Durchlauf prüft den Kursnamen
        if (merkliste[i].kursname === aktueller_kurs.kursname){
            // Ist der Kursname bereits vorhanden, gebe in HTML folgende Meldung aus
            hinweis_in_kurse_html.textContent = aktueller_kurs.kursname + " steht schon auf der Merkliste.";
            //Beende die Funktion
            return;
        }
    }
    //Ist der Kursname in der Kursliste nicht vorhanden, füge dem Array eine neue Position hinzu (in diesem Fall ein Objekt)
    merkliste.push({kursname: aktueller_kurs.kursname, preis: aktueller_kurs.preis});
    //Ersetze die vorhanden Merkliste mit der neuen Liste aus dem Array. Das Array wird hier in Text umgewandelt.
    localStorage.setItem("merkliste", JSON.stringify(merkliste));
    //Gebe in HTML einen Hinweis mit dem Name des Kurses, sowie der Anzahl aller gespeicherten Kurse aus.
    hinweis_in_kurse_html.textContent = aktueller_kurs.kursname + " steht jetzt auf der Merkliste. Gemerkte Kurse: "+ merkliste.length;
}

//die Funktion darf await nutzen. ladeKurse kommt aus daten.js
async function starteSeite(){
  
    document.getElementById("kursliste").innerHTML = "<p> Lade Kurse... </p>";
      // das leere array bekommt hier die funktion daten aus json
    kurse = await ladeKurse();
    zeigeKurskarten(kurse);
    fuelleKursauswahl(kurse, id_aus_url);
    
}
starteSeite();

