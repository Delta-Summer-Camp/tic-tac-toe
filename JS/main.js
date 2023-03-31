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
var c11 = 0; // что в ячейке 11
var c12 = 0; // что в ячейке 12

// cellNode - находится то же самое, что мы получаем из функции document.getElementBuId
// cellNo - идентификатор ячейки
function imClicked(cellNode, cellNo) {
	switch (cellNo) {
	case 11:
		if (c11 == 0) {
			if (step == +1) {
				cellNode.style.backgroundImage = "url('IMG/x.gif')";
				c11 = +1;
				step = -1;
			} else {
				cellNode.style.backgroundImage = "url('IMG/o.gif')";
				c11 = -1;
				step = +1;				
			}
		}
		break;
	case 12:
		if (c12 == 0) {
			if (step == +1) {
				cellNode.style.backgroundImage = "url('IMG/x.gif')";
				step = -1;
			} else {
				cellNode.style.backgroundImage = "url('IMG/o.gif')";
				step = +1;				
			}
		}
		break;		
	}
}