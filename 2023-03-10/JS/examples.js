let count = 0;

// Пример использования условного оператора if
function addOne() {
	const countNode = document.getElementById("counter");
	const messageNode = document.getElementById("message");

	count = count + 1;
	countNode.innerText = count;

	if (count > 10) {
		messageNode.innerText = "Слишком много!!!";
	} else {
		messageNode.innerText = "Жми ещё!!!";
	}
}

// Пример использования оператора выбора switch
function subOne() {
	const countNode = document.getElementById("counter");
	const messageNode = document.getElementById("message");

	document.getElementById("counter").innerText = --count;
	countNode.innerText = count;

	switch (count) {
	case 0:
		messageNode.innerText = "Совсем полный ноль!";
		break;
	case -5:
		messageNode.innerText = "Маловато получается!";
		break;
	case -6:
	case -7:
	case -8:
	case -9:
		messageNode.innerText = "Совсем мало уже!";
		break;
	default:
		messageNode.innerText = "Норм!";
		break;
	}
}

// Пример замены картинки
function turnOn() {
	const bulbNode = document.getElementById("bulb");
	bulbNode.src = "IMG/pic_bulbon.gif";
}

