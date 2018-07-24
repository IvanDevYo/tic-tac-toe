var row = document.getElementsByClassName("button"),
	clickCounter = 0,
	w,
	arr = [
	  [10, 11, 12],
	  [13, 14, 15],
	  [16, 17, 18]
	];
var play = function(column, trow, point) {
	
	var endGame = function(w) {
		var i;
		for(i = 0;i < row.length; i++) {
			row[i].setAttribute("disabled", "disabled");
		}
		if(w === 1) {
			document.getElementById("win").textContent = "Крестик выиграл";
		} else {
			document.getElementById("win").textContent = "Нолик выиграл";
		}
	};

	var game = function() {
		var i,j;
		for(i = 0; i < arr.length; i++) {
			for (j = 0; j < arr.length ; j++) {
				console.log(arr[i][j]);
				if ((arr[i][0] === arr[i][1]) && (arr[i][1] === arr[i][2])) {
					w = arr[i][j];
					return;
				} 
				if ((arr[0][j] === arr[1][j]) && (arr[1][j] === arr[2][j])) {
					w = arr[i][j];
					return;
				} 
				if ((arr[0][0] === arr[1][1]) && (arr[1][1] === arr[2][2])) {
					w = arr[i][j];
					return;
				} 
				if ((arr[0][2] === arr[1][1]) && (arr[1][1] === arr[2][0])) {
					w = arr[i][j];
					return;
				}
			}
		}
	}

	function drawPaint(column, trow, point) {
		var thisPoint = row[point];
		console.log(thisPoint);
		if (thisPoint.hasAttribute("disabled")) {
			return;
		}
		if ((clickCounter % 2) === 0) {
			thisPoint.className += " x";
			thisPoint.setAttribute("disabled", "disabled");
			arr[column][trow] = 1;
		} else if ((clickCounter % 2) === 1) {
			thisPoint.className += " o";
			thisPoint.setAttribute("disabled", "disabled");
			arr[column][trow] = 0;
		}
		clickCounter++;
	}
	(function() {
		drawPaint(column, trow, point);
		console.log(arr);
		game();
		if (w!== undefined) {
			endGame(w);
		}
	})();
};