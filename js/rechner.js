"use strict";
// Funktion
function berechnePreis(){
    //Hole den Wert für das ausgewählte Element aus dem DropDown Menü.
    const auswahl_dd = dropdown_kurse.value;
    //Eingabe lesen: value ist immer ein Text.
    const anzahlText = document.getElementById("anzahl").value;
    //Number() macht aus dem String eine Zahl: "3" wird 3
    const anzahl = Number(anzahlText); 
    //Den Absatz für das Ergebnis holen
    const ergebnis = document.getElementById("ergebnis");
    //Prüfen und rechnen
    //Prüfen: Auswahl ist leer, Textfeld ist leer, Text eingegeben, ob < 1 oder nagativ ist, Anzahl größer Plätze frei.
    //Wenn keine Fehler: Prüfen ob anzahl min 3 ist, dann rabatt berechnen
    if (auswahl_dd === ""){
        //Meldung, solange "Bitte auswählen" eingestellt ist.
        ergebnis.textContent = "Bitte einen Kurs auswählen.";
    }else if (anzahlText.trim()===""){
        //Meldung für ein leeres Feld.
        ergebnis.textContent = "Bitte eine Zahl eingeben.";
        //Text, der keine Zahl ist, wird bei Number() zu NaN.
    } else if (Number.isNaN(anzahl)) {
        //Meldung für Buchstaben und andere Zeichen
        ergebnis.textContent = "Bitte eine Zahl eingeben, z.B. 3.";
    } else if (!Number.isInteger(anzahl) || anzahl <1){
        //Meldung für 2.5, 0 oder -
        ergebnis.textContent = "Bitte eine ganze Zahl ab 1 eingeben.";
        //Mehr Personen als freie Plätze
    } else {
        //Gewählten Kurs aus dem Array holen
        const kurs = kurse[Number(auswahl_dd)];
        //Prüft ob die eingegebene Zahl größer ist als die vorhandenen, freien Plätze aus dem Array.
        if (anzahl > kurs.plaetzeFrei){
            //Wenn anzahl größer ist, gibt es eine Fehlermeldung aus.
            ergebnis.textContent = "Es sind nicht genügend freie Plätze verfügbar.";
        //Alle Prüfungen bestanden
        }else{
            //Preis ohne Rabatt
            let gesamt = anzahl * kurs.preis;
            let preis_ohne_rabatt = "";
            //Ab 3 Personen 10% Rabatt
            if (anzahl >=3){
                //10% wenige = 90% des Preises
                gesamt = gesamt * 0.9;
                preis_ohne_rabatt = " (Preis ohne Rabatt:" + formatierePreis(anzahl * kurs.preis) +")";
            }
        //Ergebnis mit zwei Nachkommastellen
        ergebnis.textContent = "Gesamtpreis für " + kurs.kursname + ": " + formatierePreis(gesamt) ;
        }
    }
}
