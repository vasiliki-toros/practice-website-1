"use strict";
//--------------------SUCHE FILTER SORTIERUNG------------------------------
let suchfeld_html = document.getElementById("suchfeld");
let filter_frei_html = document.getElementById("filter_frei");
let sortierung_html = document.getElementById("sortierung");

function aktualisiereKursliste(){//Suchtext leerzeichen am Rand entfernen alles klein schreiben
  let suchtext = suchfeld_html.value.trim().toLowerCase();

let ergebnis=[];

for (let i=0; i<kurse.length; i++){
  if (kurse[i].kursname.toLowerCase().includes(suchtext)){
    ergebnis.push(kurse[i]);
  }
}

//nur mit freien plätzen
if (filter_frei_html.checked){
  let mit_freien_plaetzen=[];
  for (let i = 0; i < ergebnis.length; i++){
    if (ergebnis[i].plaetzeFrei > 0)      {
      mit_freien_plaetzen.push(ergebnis[i]);
  }
}
  ergebnis = mit_freien_plaetzen;

}
//sortierung einbeziehen
// let sortiert = ergebnis.slice();
let sortierung = sortierung_html.value;
if (sortierung !== "standard"){
  for (let i = 0; i<ergebnis.length - 1; i++){
    for (let j=i+1; j<ergebnis.length; j++){
      let tauschen=false;
      if (sortierung === "preis_auf"&&ergebnis[j].preis<ergebnis[i].preis){
        tauschen=true;
      }
      if (sortierung === "preis_ab"&&ergebnis[j].preis>ergebnis[i].preis){
        tauschen=true;
      }
      if(sortierung === "name"&&ergebnis[j].kursname.localeCompare(ergebnis[i].kursname)<0){
        tauschen=true;
      }
      if (tauschen){
        let zwischenspeicher = ergebnis[i];
        ergebnis[i] = ergebnis[j];
        ergebnis[j] = zwischenspeicher;
      }
    }
  }
}


zeigeKurskarten(ergebnis);
}
// let ergebnis = kurse.filter(function(kurs)){
//   return kurs.kursname.toLocaleLowerCase.includes(suchtext);});

//diese events bauen die liste neu auf, funktionsname steht ohne klammer, da er nur gemerkt und nicht sofort aufgerufen wird
// erst beim auslösen

suchfeld_html.addEventListener("input", aktualisiereKursliste);
filter_frei_html.addEventListener("change", aktualisiereKursliste);
sortierung_html.addEventListener("change", aktualisiereKursliste);


