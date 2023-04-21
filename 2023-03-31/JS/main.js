/*
let count = 0;

function addOne() {
	count = count + 1;
	const countNode = document.getElementById("counter");
	countNode.innerText = count;
}

function subOne() {
	document.getElementById("counter").innerText = --count;
}
*/

var step = +1; // чей ход: +1 - "крестики", -1 - "нолики"
const cells = []; // массив переменных, в которых хранится состояние клеток
// Сначала заполняем поле нулями - в начале ничего нет
cells[11] = 0;
cells[12] = 0;
cells[13] = 0;
cells[21] = 0;
cells[22] = 0;
cells[23] = 0;
cells[31] = 0;
cells[32] = 0;
cells[33] = 0;


// cellNode - находится то же самое, что мы получаем из функции document.getElementBuId
// cellNo - идентификатор ячейки
function imClicked(cellNode, cellNo) {
	if (cells[cellNo] == 0) {
		if (step == +1) {
			cellNode.style.backgroundImage = "url('IMG/x.gif')";
			cells[cellNo] = +1;
			step = -1;
		} else {
			cellNode.style.backgroundImage = "url('IMG/o.gif')";
			cells[cellNo] = -1;
			step = +1;				
		}
	}
}