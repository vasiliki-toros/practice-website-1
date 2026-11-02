//Formatiert Preis vpn z.B. 249 auf 249,00 €.
function formatierePreis(unformatierter_preis){
    //Prüft ob der übergebene Wert nicht vom Datentyp "number" ist. 
    //Wenn es so ist, gibt es als return eine Fehlermeldung zurück.
    if (typeof unformatierter_preis !== "number"){
        return "Ungültiger Preis";
    }
    //Formatiert den Preis und gibt diesen an den Aufrufer zurück.
    return unformatierter_preis.toFixed(2).replace(".",",") + " €";
}
