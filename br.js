function validate(){
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let title = document.getElementById('ttl').value;
	let err = document.getElementById('error');
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