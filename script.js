var ok = document.createElement("button");
ok.innerText = "OK";
ok.setAttribute("onclick","check()");
document.getElementById("buttons").appendChild(ok);
var cancel = document.createElement("button");
cancel.innerText = "cancel";
cancel.setAttribute("onclick","clearInput()");
document.getElementById("buttons").appendChild(cancel);
var username = document.getElementById("username");
var password = document.getElementById("password");

function check(){
	if (username.value == "Lawnmower Man") {
		if (password.value == "7.3942") {
			document.getElementById("box").remove();
			document.body.setAttribute("class","image");
		}
		else{
			document.getElementById("bodyDiv").style.background = "#FF0000";
			clearInput();
		}
	}
}

function clearInput(){
	username.value = "";
	password.value = "";	
}