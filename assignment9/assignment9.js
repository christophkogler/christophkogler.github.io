console.log("Starting...");
"use strict";
console.log("Use strict...");
(function() {
	window.addEventListener("load", init);
	console.log("Add event listener load...");
  
	function init() {
		console.log("Window loaded!");
		document.getElementById("cookieLabel").innerHTML = "Cookie Count: " + localStorage.getItem("cookieCount");
		console.log("Cookie Count loaded.");
		document.getElementById("cookiecount").addEventListener("click", cookieCount);
		console.log("Cookie Count button event listener created.");
		if (!localStorage.getItem("cookieCount")) // if no cookies yet
		{
			window.localStorage.setItem("cookieCount",0);	// set to 0/make
		}
		console.log(localStorage.getItem("cookieCount"));
	}
	
	function cookieCount(){
		// cookiecount++;
		window.localStorage.setItem("cookieCount", parseInt(localStorage.getItem("cookieCount") )+1 );
		console.log(localStorage.getItem("cookieCount"));
		// update counter
		document.getElementById("cookieLabel").innerHTML = "Cookie Count: " + localStorage.getItem("cookieCount");
	}
	

})();