//alert("Hello, world!");

function bigger() {
	var words = document.getElementByID("textbox");
	words.style.fontSize="24pt";
	hello();
}

function hello() {
	alert("Hello, world!");
}

function fancy() {
	var words = document.getElementByID("textbox");
	words.style.fontSize="24pt";
	words.style.fontWeight = "bold";
	words.style.color = "red";
	words.style.text-decoration = "underline";
	hello();
}
	
function boring() {
	words.