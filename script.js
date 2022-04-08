var box = document.getElementsByTagName("div")[0];
var bodyDiv = document.getElementsByTagName("div")[2];
var ok = document.createElement("button");
ok.innerText = "OK";
ok.setAttribute("onclick","check()");
document.getElementById("buttons").appendChild(ok);
var cancel = document.createElement("button");
cancel.innerText = "cancel";
cancel.setAttribute("onclick","clearInput()");
document.getElementById("buttons").appendChild(cancel);
var username = document.getElementsByTagName("input")[0];
var password = document.getElementsByTagName("input")[1];

function check(){
	if (username.value == "Lawnmower Man") {
		if (password.value == "7.3942") {
			box.remove();
			document.body.setAttribute("class","image");
		}
		else{
			bodyDiv.style.background = "#FF0000";
			clearInput();
		}
	}
}

function clearInput(){
	username.value = "";
	password.value = "";	
}