var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 7; j++) {
    var x = i * 200;
    var y = j * 200;
    context.fillStyle = "grey"
    context.fillRect(x + 100, y, 100, 100);
    context.fillRect(x, y + 100, 100, 100);
  };
};
