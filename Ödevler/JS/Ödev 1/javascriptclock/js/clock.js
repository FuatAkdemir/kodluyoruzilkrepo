
let isim = prompt("İsminiz:");
console.log(isim);

let myName = document.getElementById("myName");
myName.innerHTML= isim;
myName.classList.add("name");

function showTime() {

	let tarih = new Date();
	let gun = tarih.getDay();

	if(gun ==  1){
		gun = "Pazartesi"; 
	}
	else if(gun ==  2){
		gun = "Salı"; 
	}
	else if(gun ==  3){
		gun = "Çarşamba"; 
	}
	else if(gun ==  4){
		gun = "Perşembe"; 
	}
	else if(gun ==  5){
		gun = "Cuma"; 
	}       
	else if(gun ==  6){
		gun = "Cumartesi"; 
	}  
	else if(gun ==  7){
		gun = "Pazar"; 
	}      

	let saat, s, d, sn = "";
	s = tarih.getHours();
	d = tarih.getMinutes();
	sn = tarih.getSeconds();

	s = s < 10 ? "0" + s : s;
	d = d < 10 ? "0" + d : d;
	sn = sn < 10 ? "0" + sn : sn;

	saat = s + ':' + d + ':' + sn;

	console.log(gun);
	console.log(saat);  

	let myClock = document.getElementById("myClock");
	myClock.innerHTML= saat +' '+ gun;

	setTimeout(showTime, 1000);

}

showTime();

