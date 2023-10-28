// Click bottone calcola
const calcola = document.getElementById("calcola");
calcola.addEventListener("click", function(){
    // Input
    const nomCogInp = document.getElementById("nomCogInp").value;
    const chilometri = parseFloat(document.getElementById("chilometri").value);
    const eta = document.getElementById("eta").value;
    const riga2 = document.getElementById("riga2");
    const errore = document.getElementById("errore");
    // Controllo input
    if(!(nomCogInp == "") && !(isNaN(chilometri))){
        errore.style.display = "none";
        riga2.style.display = "flex";
        let costo = 0.21 * chilometri;
        let sconto;
        // Controllo età
        if(eta == "minorenne"){
            sconto = costo * 0.2;
            costo = costo - sconto;
        }else if(eta == "over65"){
            sconto = costo * 0.4;
            costo = costo - sconto;
        }
        costo = costo.toFixed(2);
        // Output nome
        const nomCogOut = document.getElementById("nomCogOut");
        nomCogOut.innerHTML = nomCogInp;
        // Generazione tipo biglietto
        const tipoBiglietto = document.getElementById("tipoBiglietto");
        const tipoBigliettoRandom = Math.trunc(Math.random() * 4 + 1);
        if(tipoBigliettoRandom == 1){
            tipoBiglietto.innerHTML = "Biglietto Executive";
        }else if(tipoBigliettoRandom == 2){
            tipoBiglietto.innerHTML = "Biglietto Business";
        }else if(tipoBigliettoRandom == 3){
            tipoBiglietto.innerHTML = "Biglietto Premium";
        }else if(tipoBigliettoRandom == 4){
            tipoBiglietto.innerHTML = "Biglietto Standard";
        }
        // Generazione numero carrozza
        const carrozza = document.getElementById("carrozza");
        const carrozzaRandom = Math.trunc(Math.random() * 10 + 1);
        carrozza.innerHTML = carrozzaRandom;
        // Generazione codice CP
        const codiceCP = document.getElementById("codiceCP");
        const codiceCPRandom = Math.trunc(Math.random() * 90000) + 10000;
        codiceCP.innerHTML = codiceCPRandom;
        // Output costo
        const costoOut = document.getElementById("costoOut");
        costoOut.innerHTML = costo;
    // Errore
    }else{
        const textErrore = document.getElementById("textErrore");
        textErrore.innerHTML = "Errore. Assicurati di aver inserito i tuoi dati correttamente.";
        riga2.style.display = "none";
        errore.style.display = "flex";
    }
})