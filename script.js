//your code here
function swapTheme() {
var appDiv = document.getElementById("app");
var swapButton=document.getElementById("swap");
	if(appDiv.classList.contanins("day")){
		appDiv.classList.remove("day")
		appDiv.classList.add("night")
	}
	else{
		appDiv.classList.remove("night")
		appDiv.classList.add("day")
	}
	if(swapButton.classList.contanins("button_day"))
	{
		swapButton.classList.remove("button_day")
		swapButton.classList.add("button_night")
	}
	else{
		swapButton.classList.remove("button_night")
		swapButton.classList.add("button_day")
	}
}