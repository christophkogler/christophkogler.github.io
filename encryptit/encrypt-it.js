/*
Starter file 

The starting point in our program, setting up a listener
for the "load" event on the window, signalling the HTML DOM has been constructed
on the page. When this event occurs, the attached function (init) will be called.
*/
(function() {
  "use strict";
  window.addEventListener("load", init);

/*
TODO: Write a function comment using JSDoc.
*/
	function init() {
	// Note: In this function, we usually want to set up our event handlers
	// for UI elements on the page.
		console.log("Window loaded!");
		document.getElementById("encrypt-it").addEventListener("click", EncryptIt);
		console.log("Encrypt It button event listener created.");
	}

	// Add any other functions in this area (you should not implement your
	// entire program in the init function, for similar reasons that
	// you shouldn't write an entire Java program in the main method).
	
	function EncryptIt() {
		console.log("Encrypt button clicked.");
		var text = document.getElementById("input-text").value.toLowerCase();
		//console.log("Text lower cased...");
		var result = "";
		//console.log("Result var created...");
		if (document.getElementById("cipher-type").value == "shift")
		{
			for (let i = 0; i < text.length; i++){
				//console.log("Looping.");
				if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 122) // if the letter is in a to y
				{	result = result.concat(String.fromCharCode(text.charCodeAt(i) + 1));	} 
				else if (text.charCodeAt(i) == 122)		// if z
				{	result = result.concat("a");	}
				else if (text.charCodeAt(i) == 32)		// if space
				{	result = result.concat(" ");	}
			}
		}
		else {
			for(let i = 0; i < text.length; i++)
			{
				result = result.concat(String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97));
			}
		}
		document.getElementById("result").innerText = result;
		console.log("Done!");
	}
	
	/*
	Returns an encrypted version of the given text, where
	each letter is shifted alphabetically ahead by 1 letter,
	and 'z' is shifted to 'a' (creating an alphabetical cycle).
	*/
	
})();
