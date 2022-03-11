const tog = document.getElementById("op");
const hd = document.getElementById("hd");
const l1 = document.getElementById("1");
const l2 = document.getElementById("2");
const l3 = document.getElementById("3");
const nav =  document.getElementsByClassName("nav-link");
var a = 0;
var m = window.matchMedia("(max-width: 768px)");
var mo = window.matchMedia("(width > 768px)");


if(m.matches){
for(i = 0; i < nav.length; i++){
	nav[i].addEventListener("click", function(){
	openheader(a);
	a += 1;	
	})
}
}



function openheader(s){
	if(s % 2 == 0){
		hd.style.transform = "scale(1)";
		l1.style.position = "absolute";
		l2.style.position ="absolute";
		l1.style.top ="20%";
		l2.style.top ="20%";
		l1.style.transform = "rotate(140deg)";
		l1.style.transition = "all .40s ease-in";
		l2.style.transform = "rotate(-140deg)";
		l2.style.transition = "all .40s ease-in";
		l3.style.display = "none";
	}
	else{
		hd.style.transform = "scale(0)";
		l1.style.position = "";
		l2.style.position ="";
		l1.style.top ="";
		l2.style.top ="";
		l1.style.transform = "rotate(0deg)";
		l1.style.transition = "all .40s ease-in";
		l2.style.transform = "rotate(0deg)";
		l2.style.transition = "all .40s ease-in";
		l3.style.display = " block";
}
}



tog.addEventListener("click", function()  {
	openheader(a);
	a += 1;
})




function validate(){
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let title = document.getElementById('ttl').value;
	let err = document.getElementById('error');
	let cr = document.getElementById('name');
	if(name.length < 5){
		err.innerHTML = "** The name is Too short";
		err.style.color = "red";
		return false;
	}

	if(email.indexOf("@") == -1 || email.length < 6){
		err.innerHTML = " ** The email is incorrect try to write you dumb fuck ";
		err.style.color = "red";
		return false;
	}

	if(title.length < 10){
		err.innerHTML = " ** The title is Too short";
		err.style.color = "red";
		return false;
	}
}