
  let vittorie = 0;
  let sconfitte = 0;
  let pareggi = 0;
  let trigger = 0; //il trigger lo utilizzo per azzerare tutto solo dopo che si ripreme gioca dpo aver vinto o perso

  console.log("per triggerare vincita o perdita scrivere vittorie/sconftte = 3; e contatoriVSP()");//usato per debug (barare)

  function Gioca() {

    console.log("trigger reset= ",trigger);//usato per debug

    if(trigger == 1){
      reset();
    }

    trigger = 0;

    document.getElementById("ris").innerHTML = "";

    let sceltaUtente = document.getElementById("Form").elements["scelta"].value;
    console.log("utente= ",sceltaUtente); //usato per debug

    let sceltePossibili = ["sasso", "carta", "forbice"];
    let sceltaComputer = sceltePossibili[Math.floor(Math.random() * 3)];
    console.log("u computer= ",sceltaComputer);//usato per debug

    let risultato = confronta(sceltaUtente, sceltaComputer);

    document.getElementById("output").innerHTML = `Hai scelto: ${sceltaUtente}. Il computer ha scelto: ${sceltaComputer}. Risultato: ${risultato}`; //stampa del risultato

    switch (risultato) {
      case "Vittoria":
        vittorie++;
        break;
      case "Sconfitta":
        sconfitte++;
        break;
      case "Pareggio":
        pareggi++;
        break;
    }

    contatoriVSP();
}

function confronta(sceltaUtente, sceltaComputer) {
  switch (sceltaUtente) { 
    case "sasso":
      switch (sceltaComputer) {
        case "sasso":
          return "Pareggio";
        case "carta":
          return "Sconfitta";
        case "forbice":
          return "Vittoria";
      }
      break;
    case "carta":
      switch (sceltaComputer) { 
        case "sasso":
          return "Vittoria";
        case "carta":
          return "Pareggio";
        case "forbice":
          return "Sconfitta";
      }
      break;
    case "forbice":
      switch (sceltaComputer) {
        case "sasso":
          return "Sconfitta";
        case "carta":
          return "Vittoria";
        case "forbice":
          return "Pareggio";
      }
      break;

      case "":
      //console.log("seleziona un radio");
      alert("seleziona un radio")
      //reset()
      break;
  }
}

function contatoriVSP() {
  document.getElementById("vittorie").innerText = `Vittorie: ${vittorie}`;
  document.getElementById("sconfitte").innerText = `Sconfitte: ${sconfitte}`;
  document.getElementById("pareggi").innerText = `Pareggi: ${pareggi}`;

  if (vittorie == 3) {
    document.getElementById("ris").innerHTML = "<p style='color: green'>Hai vinto il gioco!</p>";
    trigger = 1;
  } else if (sconfitte == 3) {
    document.getElementById("ris").innerHTML = "<p style='color: red'>Hai perso il gioco!</p>";
    trigger = 1;
  }
}

function reset() {
  vittorie = 0;
  sconfitte = 0;
  pareggi = 0;
  contatoriVSP();
  //document.getElementById("output").innerHTML = "";
}