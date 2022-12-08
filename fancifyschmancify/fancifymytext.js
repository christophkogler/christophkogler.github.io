//alert("Hello, world!");

function bigger() {
	document.getElementById("textbox").style.fontSize = "24px";
	hello();
}

function hello() {
	alert("Hello, world!");
}

function fancy() {
	var words = document.getElementById("textbox");
	words.style.fontSize="24pt";
	words.style.fontWeight = "bold";
	words.style.color = "red";
	words.style.backgroundColor = "black";
	words.style.textDecoration = "underline";
	hello();
}
	
function boring() {
	var words = document.getElementById("textbox");
	words.style.fontWeight = "normal";
	words.style.color = "black";
	words.style.textDecoration = "none";
	words.style.backgroundColor = "white";
	hello();
}
	
function moo() {
	var words = document.getElementById("textbox");
	var splitting = words.value.split(".");
	words.value = splitting.join("-Moo.");
	hello();
}