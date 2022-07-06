function funzioneRandom() {
  try {
    var casuale = Math.floor(Math.random() * 9);
    while (posizioni_random.includes(casuale)) {
      casuale = Math.floor(Math.random() * 9);
    }
    posizioni_random.push(casuale);
    return casuale;
  } catch (e) {
    alert ("funzioneRandom" + e);
  }
}

function funzioneResetta (x) {
  try {
    posizioni_random = [];
    for(i = 0; i < x; i++){
      nodoPosizioni[i].removeChild(nodoPosizioni[i].childNodes[0]);
    }
  } catch (e) {
    alert ("funzioneResetta" + e);
  }
}

function funzioneNuovaPartita () {
  try {
	game.onkeydown = funzioneFrecce;
	count=0;
	if (riavvio == 0){
      funzioneResetta(9);
      riavvio++;
    } else {
      funzioneResetta(8);
    }
    for(i in nodoPosizioni) {
      var casuale =  funzioneRandom();
      nodoPosizioni[i].appendChild(nodoImmagini[casuale]);
      if (nodoPosizioni[i].firstChild.classList.contains("nascondi")) {
        nodoPosizioni[i].firstChild.classList.remove("nascondi");
      }
    }
    nodoPosizioni[0].firstChild.classList.add("nascondi");
	casella_vuota= 0; 
  } catch (e) {
    alert ("nuova partita" + e);
  }
}

function funzioneScambia(nodo1, nodo2) {
  try {
    var temp = document.createElement("div");
    nodo1.parentNode.insertBefore(temp, nodo1);
    nodo2.parentNode.insertBefore(nodo1, nodo2);
    temp.parentNode.insertBefore(nodo2, temp);
    temp.parentNode.removeChild(temp);
  } catch (e) {
    alert("funzioneScambia" + e);
  }
}

function funzioneFrecce (){
	try { 
//	if (count>=0) {
		if (event.keyCode==37) {
		funzioneFrecciaSinistra();
		count++;
		}
	    else if (event.keyCode==38) {
		funzioneFrecciaSu();
		count++;
	    }
	     else if (event.keyCode==39) {
	    funzioneFrecciaDestra();
		count++;
		}
	    else if (event.keyCode==40) {
		funzioneFrecciaGiu();
		count++;
		}
	//else {
		//alert ("Purtroppo in questa pagina le frecce servono per giocare, ma tu non hai ancora iniziato la partita! \nScorri fino alla sezione \"Il gioco\" per metterti alla prova!");
	//}
	}	
	catch(e) {
		alert("keyEvent: " + e);
	}
}


function funzioneFrecciaGiu () {
  try {
    event.preventDefault();
	if (casella_vuota != 0 && casella_vuota != 1 && casella_vuota != 2) {
      var nuova_casella_vuota = casella_vuota - 3;
      nodo1 = nodoPosizioni[nuova_casella_vuota].firstChild;
      nodo2 = nodoPosizioni[casella_vuota].firstChild;
      funzioneScambia(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto();
  } catch (e) {
    alert("funzioneFrecciaGiu" + e);
  }
}
function funzioneFrecciaSu () {
  try {
    event.preventDefault();
	if (casella_vuota != 6 && casella_vuota != 7 && casella_vuota != 8) {
      var nuova_casella_vuota = casella_vuota + 3;
      nodo1 = nodoPosizioni[nuova_casella_vuota].firstChild;
      nodo2 = nodoPosizioni[casella_vuota].firstChild;
      funzioneScambia(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto ();
  } catch (e) {
    alert ("funzioneFrecciaSu" + e);
  }
}
function funzioneFrecciaSinistra () {
  try {
    event.preventDefault();
	if (casella_vuota != 2 && casella_vuota != 5 && casella_vuota != 8) {
      var nuova_casella_vuota = casella_vuota + 1;
      nodo1 = nodoPosizioni[nuova_casella_vuota].firstChild;
      nodo2 = nodoPosizioni[casella_vuota].firstChild;
      funzioneScambia(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto();
  } catch (e) {
    alert ("funzioneFrecciaSinistra" + e)
  }
}
function funzioneFrecciaDestra () {
  try {
    event.preventDefault();
	if (casella_vuota != 0 && casella_vuota != 3 && casella_vuota != 6) {
      var nuova_casella_vuota = casella_vuota - 1;
      nodo1 = nodoPosizioni[nuova_casella_vuota].firstChild;
      nodo2 = nodoPosizioni[casella_vuota].firstChild;
      funzioneScambia(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto();
  } catch (e) {
    alert ("funzioneFrecciaDestra" + e);
  }
}

function funzioneVinto () {
  try {
    var controllo = 1;
    for (i in nodoPosizioni) {
      if (!nodoPosizioni[i].firstChild.src.includes("/" + i +".png")) {
        controllo = 0;
        break;
      }
    }
    if (controllo) {
      alert ("Congratulazioni, hai vinto e hai terminato il Wall-Puzzle in "+ count +" mosse.");
	  funzioneNuovaPartita;
	}
  } catch (e) {
    alert ("funzioneVinto" + e);
  }
}

function funzioneResize () {
	try {
		if (this.innerWidth > 740 ) {
		nodoMenu.style.visibility="visible";
	}
	else { 
		nodoMenu.style.visibility="hidden";
	}
	}	catch (e) {
    alert ("funzioneResize" + e);
  }
}


function funzioneNodoIcon () {
	try {
		if (nodoMenu.style.visibility=="visible")
		{ 
		nodoMenu.style.visibility= "hidden";
		}
		else {
			nodoMenu.style.visibility= "visible";
		}
		
	} catch (e) {
    alert ("funzioneNodoIcon" + e);
  }
}


var nodoIcon;
var nodoMenu;
var nodoPosizioni = new Array;
var nodoNuovapartita;
var posizioni_random = new Array;
var nodoImmagini = new Array; 
var riavvio;
var casella_vuota;
var game;
var count;


function gestoreLoad (){
	try
	{
	for (i = 0; i < 9; i++) {
      nodoPosizioni[i] = document.getElementById(i);
      nodoImmagini[i] = document.createElement("IMG");
      nodoImmagini[i].setAttribute("src", "../Immagini/SanBasilio/Imuri/Puzzle/Puzzlemuroblu/" + (i) +".png");
      }
	nodoNuovapartita = document.getElementById("nuovapartita");    
    if (nodoNuovapartita != null) {
      nodoNuovapartita.onclick = funzioneNuovaPartita;
    }
	game= document.getElementById("play");
    riavvio= 0;
	nodoIcon= document.getElementById("icon");
	nodoIcon.onclick= funzioneNodoIcon;
	nodoMenu= document.getElementById("menu");
	window.onresize = funzioneResize;
	}
  catch (e) {
	  alert("gestoreLoad" + e); 
	  }
}

window.onload= gestoreLoad;