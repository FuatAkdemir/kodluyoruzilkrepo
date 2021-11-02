
//localStorage.setItem(0, JSON.stringify('50 Sayfa Kitap Oku'));
//localStorage.setItem(1, JSON.stringify('En Az 3 Saat Kodlama Yap'));
//localStorage.setItem(2, JSON.stringify('Yemek Yap'));
//localStorage.setItem(3, JSON.stringify('Ödevleri Yap'));
//localStorage.setItem(4, JSON.stringify('2 Litre Su İç'));
//localStorage.setItem(5, JSON.stringify('Ve her şeyden önemlisi, Trans dinle!'));

//console.log(localStorage.getItem('test')); 
//localStorage.clear();
//console.log(localStorage.getItem('test')); 

let list = document.querySelector("#list");
let listItems = list.getElementsByTagName('li');
//console.log("LIST ITEMS: ", listItems);

let liCount = 0;
let keyValue = {};
// LocalStorage'daki elemanları listeye ekleme ve onlara EventListener ekleme
for(let i = 0; i <= 100; i++){
	if(localStorage.getItem(i)){
		//console.log(JSON.parse(localStorage.getItem(i)));

		keyValue[i] = JSON.parse(localStorage.getItem(i));
		console.log("keyValue: ", keyValue[i]);

		let li = document.createElement("li");
		let node = document.createTextNode(JSON.parse(localStorage.getItem(i)));
		let element = li.appendChild(node);

		li.addEventListener("click", selectElement)
		list.appendChild(li);
		liCount++;
	}
	else{
		break;
	}
}

console.log("keyValue: ", keyValue);

document.querySelector("#liCount").innerText = `Toplam: ${liCount}`;
console.log("liCount: ", liCount);
/*
// ListItems'a EventListener ekleme
for(let i = 0; i < listItems.length; i++){
//for(let i = 0; i < liCount; i++){
	//let ls = localStorage.getItem(i) ? JSON.parse(localStorage.getItem(i)) : [];
	//console.log("ls: ", ls);
	//console.log("ls 2: ", JSON.parse(localStorage.getItem(i)));
	//console.log("ls len: ", ls.length);
	//listItems[i].addEventListener("click", selectElement);
	//localStorage.setItem(i, JSON.stringify(listItems[i]));
	//console.log("test ", i, listItems[i]);
	//console.log("listItems innerText: ", listItems[i].innerText);
	console.log("test");
}
*/

// ListItems'a kapatma - silme özelliği ekleme
for(let i = 0; i < listItems.length; i++){
	let x = document.createElement("span");
	x.classList.add("close");
	//x.innerHTML = "\f00d";
	//x.innerHTML = "\u00D7";
	//x.createTextNode("\u00D7");
	x.createTextNode("x");
	//x.innerHTML = "<i class='fas fa-times'></i>";
	//x.addEventListener("click", deleteElement(this, 10));
/*Burası*/	x.addEventListener("click", deleteElement());
	listItems[i].appendChild(x);
	//console.log("test ", i, listItems[i]);
	//console.log("listItems innerText: ", listItems[i].innerText);
}

// Listeye yeni eleman ekleme
function newElement(){	
	let li = document.createElement("li");
	let task = document.querySelector("#task").value;
	let node = document.createTextNode(task);
	let element = li.appendChild(node);
	//console.log("element:", element);	
	// console.log("trimmed element:", element.trim());	
	//console.log("task:", task);
	//console.log("trimmed task:", task.trim());
	let trim = task.trim();
	//console.log("x:", x);
	
	if(trim == "" || trim === " " || trim.length == 0){
		//console.log("if");
		$(".error").toast("show");
	}
	else{
		//console.log("else");
		li.addEventListener("click", selectElement);	
		let close = document.createElement("span");
		close.classList.add("close");
		close.innerText = "x";
		close.addEventListener("click", deleteElement);
		li.appendChild(close);
		list.appendChild(li);

		keyValue[liCount] = task;
		console.log("keyValue: ", keyValue[liCount]);
		console.log("keyValue: ", keyValue);

		localStorage.setItem(liCount, li);
		localStorage.setItem(liCount, JSON.stringify(task));
		liCount++;
		document.querySelector("#liCount").innerText = `Toplam: ${liCount}`;

		$(".success").toast("show");
	}
	
	document.getElementById("task").value = "";
	//console.log("list length: ", list.length);

}

// Listeden eleman seçildiğinde
function selectElement(e){
	e.currentTarget.classList.toggle("checked");
	//console.log("hello, clicked: ", e.currentTarget.innerText);
	//console.log("clicked e: ",e);
}

// Listeden eleman silindiğinde
function deleteElement(e){
//function deleteElement(e, id){
	console.log("e: ", e); // full obje
	//console.log("Silinecek ID: ", id);
	//console.log("e.ct: ", e.currentTarget); // <span> x
	//console.log("e.ct.it: ", e.currentTarget.innerText); // x
	//console.log(" ");

	//console.log("e.pe: ", e.parentElement); // undefined
	console.log("e.ct.pe: ", e.currentTarget.parentElement); // 
	console.log("e.ct.pe.it: ", e.currentTarget.parentElement.innerText); // içerideki yazı x
	//console.log("e.ct.pe.n: ", e.currentTarget.parentElement.node); // undefined
	//console.log("e.ct.pe.n.it: ", e.currentTarget.parentElement.node.innerText); // undefined
	//console.log("e.ct.pe.nn: ", e.currentTarget.parentElement.nodeName); // li
	console.log("e.ct.pe.nn.it: ", e.currentTarget.parentElement.nodeName.innerText); // undefined
	console.log("e.ct.pe.nn.v: ", e.currentTarget.parentElement.nodeName.value); //u ndefined

	console.log("e.ct.pe.nn: ", e.currentTarget.parentElement.nodeName); // li
	console.log("e.ct.pe.nn.it: ", e.currentTarget.parentElement.nodeName.innerText); // 
	

	//this.parentElement	
	console.log("this", this); // span x
	console.log("this.e", this.e); // undefined
	console.log("t.ct", this.currentTarget); //
	//console.log("t.ct.pe", this.currentTarget.parentElement); // error
	//console.log("t.ct.pe.pe", this.currentTarget.parentElement.parentElement); // error
	//console.log("t.ct.pe.nn", this.currentTarget.parentElement.nodeName); // error








	//this.document.getElementById("demo");
	//myobj.remove();

//	this.parentElement.style.display = 'none';
	console.log("this.key: ", this.key);
	localStorage.removeItem(this.key);
	//this.currentTarget.parentElement.remove();
}

