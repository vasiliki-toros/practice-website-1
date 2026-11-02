
// START
//     Lese Parameter aus der aktuellen URL
//     Speichere den Wert des Parameters "id"
//     Suche das HTML element mt der ID "kursauswahl"

//     FUNKTION fuelleKursauswahl (liste, gewaehlt)
//         Leere Dropdown-menu bis auf "bitte auswählen"
//         FÜR jeden Kurs in der Liste (liste) - argument beim aufruf
//             ermittle index des kruses im arrray "kurse"
//             WENN der Indes dem gewählten Kurrs entspricht DANN
//                 Merke "selected" für vorauswahl
//             ENDE WENN
//         ENDE FÜR
//         WENN im Dropdwon ein Kurs gewählt ist DANN
//             Suche Karte mit ID des kruses
//             WENN die KArte auf der Seite STeht DANN
//                 Markiere Karte
//             ENDE WENN
//         EMDE WENN
//     FUNKTION ENDE
//     rufe fuelleKursauswahl() mit allen Kursen und der ID aus der Adresse auf
// ENDE

const url_parameter = new URLSearchParams(window.location.search);
const id_aus_url = url_parameter.get("id");
    let dropdpwn_kurse = document.getElementById("kursauswahl");


//1. 
// Werte in der FOR-Schleife
//in=0
//WENN (1(id_aus_url) === 0 (i))
//  speichere das Wort "selected" in der Variable "vorauswahl"
//ENDE WENN
//BILDE EIN HTML-ELlement ohne "selected", da die WENN Nicht zutrifft und die Variable nicht geändert wird

for (let i = 0; i < kurse.length; i++){
    //Dem Dropdown-Menü neue Inhalte hinzufügen.
    //wenn ID In url mitgebgeben wird, soll das Element mit der zutreffenden ID ausgewählt sein
    //dropdown = alter Wert aus Dropdown + <option value="0" selected>Kursname aus Array </option>;
    let vorauswahl = "";
    if (gewaehlt === String(i)){
        vorauswahl = " selected";
    }
    dropdown_kurse.innerHTML = dropdown_kurse.innerHTML + '<option value="' + i + '"'+vorauswahl+'>' + kurse[i].kursname + '</option>';
}

if (dropdown_kurse.value !== ""){
    let karte = document.getElementById("Karte"+dropdown_kurse.value);
    if(karte !== null){
        karte.classList.add("ausgewaehlt");
    }
}