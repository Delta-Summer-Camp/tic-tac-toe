const MAXCOL = 5;
const MAXROW = 5;
var wolfPosition = 3;
var wins = 0;


function init() {
	
	document.getElementById("53").style.backgroundImage="url('IMG/wolf.png')";
	addEventListener("keydown", keyDown);

	newEgg();
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

// Создаёт новое яйцо в случайном ряду и управляет им
function newEgg() {
	// Генерируем случайное число от 1 до MAXCOL
	const col = Math.floor(Math.random() * MAXCOL) + 1;
	var row = 1;
	document.getElementById(row * 10 + col).style.backgroundImage="url('IMG/egg.png')";

	const timer = setInterval(ticker, 1000);

	function ticker() {
		document.getElementById(row * 10 + col).style.backgroundImage = "none";

		if (row < MAXROW - 1) { // Двигаем яйцо вниз
			row = row + 1;
			document.getElementById(row * 10 + col).style.backgroundImage="url('IMG/egg.png')";
		} else { 
			// "Отключаем" яйцо
			clearInterval(timer);

			// Решаем, словил ли яйцо волк
			if (col == wolfPosition) { // Выиграл!
				win(col);
			} else {
				lose(col);
			}
		}
	}
}

function win(col) {
	// Изображаем волка с яйцом
	document.getElementById(MAXROW * 10 + col).style.backgroundImage="url('IMG/wolf_win.png')";

	// Увеличиваем счётчик выигрышей
	document.getElementById("counter").innerText = ++wins;

	// "Бросаем" новое яйцо
	newEgg();
}

function lose(col) {

}