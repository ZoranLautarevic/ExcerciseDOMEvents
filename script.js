var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");
var list = document.getElementsByTagName("li");

//add event listener to first 6 buttons in HTML file
for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", removeParent, false);
}

//removing specific <li>, from stackoverflow 
function removeParent(event) {
	event.target.parentNode.remove();
}

//click on a list item to strikethrough the text
// for(var i = 0; i < list.length; i++){
//  	list[i].addEventListener("click", liClick);
// }

// function liClick(){
//   	this.classList.toggle("done");
// }

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

//adding new items
function inputLength() {
	return input.value.length;
}

function createListElement() {
	//Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
	var btns = document.createElement("button");
	btns.innerHTML = "Delete";
	btns.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + "";
	li.appendChild(btns);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);