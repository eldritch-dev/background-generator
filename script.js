var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomization() {
	return Math.floor( Math.random() * 15728640) + 1048576;
}

function randomize() {
	var randomNum = randomization();
	var randomNum2 = randomization();
	var r = randomNum.toString(16);
	var r2 = randomNum2.toString(16);

	color1.setAttribute("value", "#" + r);
	color2.setAttribute("value", "#" + r2);

	body.style.background = "linear-gradient(to right," + color1.getAttribute("value") + "," + color2.getAttribute("value") + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.style.background = "linear-gradient(to right," + color1.getAttribute("value") + "," + color2.getAttribute("value") + ")";

css.textContent = body.style.background + ";";

randomBtn.addEventListener("click", randomize);