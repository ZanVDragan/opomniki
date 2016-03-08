window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			if (cas == 0) {
				alert("Opomnik!\n\nZadolžitev " + opomnik.querySelector(".naziv_opomnika").innerHTML + " je potekla!");
				//Remove this reminder.
				document.getElementById("opomniki").removeChild(opomnik);
			} else {
				// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
				casovnik.innerHTML = parseInt(casovnik.innerHTML) - 1;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var submitButton = document.getElementById("prijavniGumb");
	submitButton.addEventListener("click", function(e) {
		e.preventDefault();
		
		//Retrieve user's name.
		var name = document.getElementById("uporabnisko_ime").value;
		//Insert name in the welcome message.
		document.getElementById("uporabnik").innerHTML = name;
		//Hide prompt.
		document.getElementsByClassName("pokrivalo").item(0).style.display = "none";
	});
	
	var reminderButton = document.getElementById("dodajGumb");
	reminderButton.addEventListener("click", function(e) {
		e.preventDefault();
		
		//Retrieve value from title and time input for reminder.
		var titleInput = document.getElementById("naziv_opomnika");
		var timeInput = document.getElementById("cas_opomnika");
		var remTitle = titleInput.value;
		var remTime = timeInput.value;
		//Reset title and time input.
		titleInput.value = "";
		timeInput.value = "";
		//Display values.
		document.getElementById("opomniki").innerHTML = "<div class=\'opomnik senca rob\'>\n<div class=\'naziv_opomnika\'>" + remTitle + "</div>\n<div class=\'cas_opomnika\'> Opomnik čez <span>" + remTime + "</span> sekund.</div>\n</div>";
	});
});