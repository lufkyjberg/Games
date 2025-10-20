// Необходимо обернуть в addEventListener, потому что не находит тогда Gamefield
document.addEventListener("DOMContentLoaded", () => {
	// Находим элемент поля и создаем в нем div`ы (ячейки)
	const Gamefield = document.getElementsByClassName("Gamefield")[0];
	let cell = document.createElement("div");
	// Стиль ячейки
	cell.style.backgroundColor = "red";
	cell.style.width = parseInt(getComputedStyle(Gamefield).width) / 11 + "px";
	cell.style.height = parseInt(getComputedStyle(Gamefield).height) / 11 + "px";
	cell.style.borderRadius = "5px";
	console.log(cell.style.width);


	//test12345
	function test12345(Test) {
		for (let test = 0; test < array.length; test++) {
			const element = array[test];
		}
	}

	//Добавляем на поле. 		Для Gamefield нужна настройка в CSS display: grid и grid-template-column: repeat()
	for (let i = 0; i < 100; i++) {
		Gamefield.appendChild(cell.cloneNode(true));
	}
});
