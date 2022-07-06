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
var width; 

function gestoreLoad (){
	try
	{
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
