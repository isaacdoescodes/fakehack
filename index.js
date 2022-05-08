function hack() {
	var p = document.createElement("p");
	var outputs = [
		"<span style='color: yellow'>root@hackserver</span> ~ $ echo getdata('https://data.apple.com/admin?ps=GU*&@U(@@H(/getuserdata/tcook@apple.com<br><br><br>Email: tcook@apple.com<br>Name: Tim Cook<br>Data access point: https://data.apple.com/admin/user-info/uyr393hr33urr3y3<br><br><br><br><br>",
		"<span style='color: yellow'>root@hackserver</span> ~ $ nmap https://data.apple.com/admin/user-info/uyr393hr33urr3y3?get=privateaddress<br><br>Private Billing Adress for user id=uyr393hr33urr3y3: <br><br>Tim Cook,<br> 123 Avenue Way,<br>Beverly Hills,<br>California,<br>USA<br><br><br><br><br>",
		"<span style='color: yellow'>root@hackserver</span> ~ $ sudo apt get apple-data<br><br>Installing apple-data package via sudo apt get...<br>100% Complete<br><br><br>",
		"<span style='color: yellow'>root@hackserver</span> ~ $ sudo apple-data --userid=uyr393hr33urr3y3<br><br><h3>Access Denied!</h3>Supsicion activtity was detected from your machine."
	];
	var random = Math.floor(Math.random() * outputs.length);
	var output = outputs[random];
	p.innerHTML = output;
	document.getElementById('outs').appendChild(p);
	document.getElementById('intro').innerHTML = ""
	window.scrollTo(0, document.body.scrollHeight);
}
var firstkeystroke = true;
window.addEventListener("keyup", function () {
	if (firstkeystroke == true) {
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
