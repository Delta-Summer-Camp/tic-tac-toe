var timer;
var wolfPosition = 3;
var eggPosition = 1;

function init() {
	timer = setInterval(ticker, 1000);

	document.getElementById("53").style.backgroundImage="url('IMG/wolf.png')";
	document.getElementById("11").style.backgroundImage="url('IMG/egg.png')";

	addEventListener("keydown", keyDown);
}

function ticker() {
	if (eggPosition < 4) {
		var id = eggPosition * 10 + 1;
		document.getElementById(id).style.backgroundImage="none";
		eggPosition++;
		id = eggPosition * 10 + 1;
		document.getElementById(id).style.backgroundImage="url('IMG/egg.png')";
	} else {
		if (wolfPosition != 1) {
			alert("You lost!");
		} else {
			document.getElementById("41").style.backgroundImage="none";
			document.getElementById("51").style.backgroundImage="url('IMG/wolf_win.png')";
			alert("You win!");
		}
		clearInterval(timer);				
	}
}

function keyDown(event) {
	if (event.keyCode == 39) { // right
		if (wolfPosition < 5) {
			var id = 50 + wolfPosition;
			document.getElementById(id).style.backgroundImage="none";
			wolfPosition++;
			id = 50 + wolfPosition;
			document.getElementById(id).style.backgroundImage="url('IMG/wolf.png')";
		} 
	} else if (event.keyCode == 37) { // left
		if (wolfPosition > 1) {
			var id = 50 + wolfPosition;
			document.getElementById(id).style.backgroundImage="none";
			wolfPosition--;
			id = 50 + wolfPosition;
			document.getElementById(id).style.backgroundImage="url('IMG/wolf.png')";
		} 
	}
}