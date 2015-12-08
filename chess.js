var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", doMouseDown, false);

var board = {
  squares: []
};

loadBoard();
loadSquares();

function doMouseDown (event) {
  canvas_x = event.pageX;
  canvas_y = event.pageY;
  var indexOfSquare = (Math.floor(canvas_y / 100) * 8) + Math.floor(canvas_x / 100)
  var square = board.squares[indexOfSquare]
  alert("X = " + square.xCoordinate + "Y = " + square.yCoordinate)
}



function loadBoard () {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var x = j * 200;
      var y = i * 200;
      context.fillStyle = "grey";
      context.fillRect(x + 100, y, 100, 100);
      context.fillRect(x, y + 100, 100, 100);
    };
  };
};

function loadSquares () {
  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <= 7; j++) {
      board.squares.push(new Square(j, i));
    };
  };
};


function Square (xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.piece = null;
};
