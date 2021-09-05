// Example ToDo's
/*
	localStorage.setItem(0, JSON.stringify('50 Sayfa Kitap Oku'));
	localStorage.setItem(1, JSON.stringify('En Az 3 Saat Kodlama Yap'));
	localStorage.setItem(2, JSON.stringify('Yemek Yap'));
	localStorage.setItem(3, JSON.stringify('Ödevleri Yap'));
	localStorage.setItem(4, JSON.stringify('2 Litre Su İç'));
	*/localStorage.setItem(5, JSON.stringify('Ve her şeyden önemlisi, Trans dinle!'));

//localStorage.clear(); // Delete all(!) local storage

let list = document.querySelector("#list");
//console.log("LIST ITEMS: ", listItems);

// Adding ToDo's to list and event listeners to them that comes from LocalStorage
let valueKey = {};
for(let i = 0; i <= 100; i++){
	if(localStorage.getItem(i)){
		let li = document.createElement("li");
		let node = document.createTextNode(JSON.parse(localStorage.getItem(i)));
		let element = li.appendChild(node);

		valueKey[(JSON.parse(localStorage.getItem(i))).trim()] = i;
		li.addEventListener("click", selectElement);
		list.appendChild(li);
	}
}

let liCount;
let listItems = list.getElementsByTagName('li');
liCount = localStorage.getItem('liCount') ? JSON.parse(localStorage.getItem('liCount')) : listItems.length;
localStorage.setItem("liCount", liCount);

document.querySelector("#todos").innerText = `Yapılacaklar: ${listItems.length}`;
document.querySelector("#total").innerText = `Toplam: ${liCount}`;
console.log("1. liCount: ", liCount);
console.log("All valueKey: ", valueKey);
console.log("listItems.length: ", listItems.length);

// Adding close button and event listeners to list items
for(let i = 0; i < listItems.length; i++){
	let x = document.createElement("span");
	x.classList.add("close");
	x.innerHTML = "\u00D7";
	x.addEventListener("click", deleteElement);
	listItems[i].appendChild(x);
}

// Adding new ToDo
let task = document.querySelector("#task");
task.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log('Enter is pressed!');
        newElement();
    }
});

function newElement(){	
	let li = document.createElement("li");
	task = document.querySelector("#task").value;
	let trim = task.trim();
	let node = document.createTextNode(trim);
	li.appendChild(node);
	
	if(trim == "" || trim === " " || trim.length == 0){
		console.log("Cannot be blank");
		$(".error").toast("show");
	}
	else{
		let close = document.createElement("span");
		close.classList.add("close");
		close.innerText = "\u00D7";
		close.addEventListener("click", deleteElement);
		li.appendChild(close);
		li.addEventListener("click", selectElement);	
		list.appendChild(li);

		valueKey[trim] = liCount;
		console.log("New Task: ", trim);
		//console.log("valueKey: ", valueKey[trim]); // Key of new ToDo's
		//console.log("valueKey: ", valueKey); // All tasks
		localStorage.setItem(liCount, JSON.stringify(trim));
		liCount++;
		localStorage.setItem("liCount", liCount);
		document.querySelector("#todos").innerText = `Yapılacaklar: ${listItems.length}`;
		document.querySelector("#total").innerText = `Toplam: ${liCount}`;

		$(".success").toast("show");
	}
	
	document.getElementById("task").value = "";

}

// Clicked ToDo
function selectElement(e){
	e.currentTarget.classList.toggle("checked");
	console.log("Clicked: ", 
		e.currentTarget.innerHTML.replace("<span class=\"close\">×</span>", ""));
}

// Deleted ToDo
function deleteElement(e){
	let x2 = e.currentTarget.parentElement.innerHTML;
	x2 = x2.replace("<span class=\"close\">×</span>", "");	
	x2 = x2.trim();

	console.log("Deleted Key: ", valueKey[x2]);
	console.log("Deleted Value: ", localStorage.getItem(valueKey[x2]));

	localStorage.removeItem(valueKey[x2]);
	e.currentTarget.parentElement.remove();
	document.querySelector("#todos").innerText = `Yapılacaklar: ${listItems.length}`;

}

