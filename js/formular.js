"use strict";
// -----------------Kontaktformular------------------
// WENN das formular abgeschickt wird DANN
//   verhindere dass der browser die Seite neu lädt
//   entferne klasse "erfolg" vom hinweis
//   enferne vorname, nachname, email und entferne leerzeichen von anfang und ende
//   WENN der vorname leer ist DANN
//   SONST WENN der Nachname leer ist DANN
//     Zeige"Bitte Nachnamen eingeben"
//   SONST WENN email kein @ und kein punkt enthält DANN 
//     Zeige "Bitte valide Emailadresse eingeben"
//   SONST WENN nachricht kürzer als 10 zeichen ist DANN
//     Zeige "Bitte eine vollständige Nachricht eingeben"
//   SONST
//     Erstelle Dank mit Vor- und Nachname
//     WENN kurs ausgewählt DANN
//      Ergänze Kursnamen
//     ENDE WENN
//       Ergänze Satzende
//       Zeige Dank mit Klasse "erfolg"
//       Leere alle Felder
//   ENDE WENN
// ENDE 
// ------------------------HTML ELEMENT MIT ID KONTAKTFORMULAR-------------
const formular_html = document.getElementById("Kontaktformular");
//ID HINWEIS MELDUNG
const formular_hinweis_html = document.getElementById("formular_hinweis");
// ---------Submit --> Ereignis passiert-------------

formular_html.addEventListener("submit",
  function(ereignis) {ereignis.preventDefault();
  formular_hinweis_html.classList.remove("erfolg");
  const vorname = document.getElementById("vorname").value.trim();
  const nachname = document.getElementById("nachname").value.trim();
  const email = document.getElementById("email").value.trim();
  const nachricht = document.getElementById("nachricht").value.trim();

  if (vorname === ""){
    formular_hinweis_html.textContent="Bitte geben Sie Ihren Vornamen ein.";
  }
else if (nachname === ""){formular_hinweis_html.textContent= "Bitte geben Sie Ihren Nachnamen ein.";}
else if (!email.includes("@")) {
  formular_hinweis_html.textContent="Bitte geben Sie eine gültige Email-Adresse ein.";
}
else if (nachricht.length < 10) {
  formular_hinweis_html.textContent="Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein";
}
else {let dank = "Vielen Dank " + vorname + " "+ nachname + "! Wir melden uns";
  if (dropdown_kurse.value !=="") {
    dank = dank + " zum Kurs " + kurse[Number(dropdown_kurse.value)].kursname;
    }  
  formular_hinweis_html.textContent= dank + " bei Ihnen."; 
formular_hinweis_html.classList.add("erfolg");
formular_html.reset();

}
}

);

async function starteKontaktseite(){
  kurse = await ladeKurse();
  fuelleKursauswahl(kurse, null);
}
starteKontaktseite();
