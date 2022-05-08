var app = this;
	app.hasKeyboard = false;
	this.keyboardPress = function() {
		app.hasKeyboard = true;
		window.removeEventListener("keydown", app.keyboardPress);
	}
	if(app.hasKeyboard = false) {
		document.getElementById('intro').innerText = ">>> Please switch to a device which has a physical keyboard, or connect your keyboard accessory (e.g. Surface Keyboard, iPad Magic Keyboard)"
	}
	window.addEventListener("keydown", app.keyboardPress, false);
	function hack() {
		var p = document.createElement("p");
		var outputs = [
      
    ];
		var random = Math.floor(Math.random() * outputs.length);
		var output = outputs[random];
		p.innerHTML = output;
		document.getElementById('outs').appendChild(p);
		document.getElementById('intro').innerHTML = ""
		window.scrollTo(0,document.body.scrollHeight);
	}
	var firstkeystroke = true;
	window.addEventListener("keyup", function() {
		if(firstkeystroke == true) {
			var elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) { /* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE11 */
				elem.msRequestFullscreen();
			}
			firstkeystroke = false;
		}
		window.setTimeout(hack, 1, false);
	}, false);
