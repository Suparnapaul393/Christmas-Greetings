var amount = 1000;
var speed = 3;

var canvas = document.createElement("canvas");
canvas.setAttribute("id", "snowCanvas");
document.body.appendChild(canvas);

var canvas = document.getElementById("snowCanvas");
var stage = new createjs.Stage("snowCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
  	canvas.width = window.innerWidth;
  	canvas.height = window.innerHeight;
	stage.update();
});

createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);

function Particle(x, y, dx, dy, rad) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.rad = rad;

	var circle = new createjs.Shape();
	stage.addChild(circle);
	circle.graphics
		.beginFill("white")
		.drawCircle(0, 0, this.rad);
	circle.x = this.x;
	circle.y = this.y;
	
	createjs.Ticker.addEventListener("tick", function() {
		if (circle.y - rad > innerHeight || circle.x + rad > innerWidth || circle.x - rad < 0) {
			circle.y = 0 - rad
			circle.x = x
		}

		circle.x += dx;
		circle.y += dy;
	})
}

var circleArray = [];

for (var i = 0; i < amount; i++){
	var rad = Math.random() * 2;
	var x = Math.random() * (innerWidth - rad * 2) + rad;
	var y = Math.random() * (innerHeight - rad * 2) + rad;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() + 0.5) * speed;

	circleArray.push(new Particle(x, y, dx, dy, rad));
}