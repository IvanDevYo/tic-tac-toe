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
				if ((arr[i][j] === arr[i][j+1]) && (arr[i][j+1] === arr[i][j+2])) {
					w = arr[i][j];
					return;
				} else if ((arr[i][j] === arr[i+1][j]) && (arr[i+1][j] === arr[i+2][j])) {
					w = arr[i][j];
					return;
				} else if ((arr[i][j] === arr[i+1][j+1]) && (arr[i+1][j+1] === arr[i+2][j+2])) {
					w = arr[i][j];
					return;
				} else if ((arr[i][j] === arr[i+1][j-1]) && (arr[i+1][j-1] === arr[i+2][j-2])) {
					w = arr[i][j];
					return;
				} 
			}
		}
	}

	function drawPaint(column, trow, point) {
		var thisPoint = row[point];
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
		game();
		if (w!== undefined) {
			endGame(w);
		}
	})();
};