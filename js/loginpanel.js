// Dom manipulation
let emailNode = document.getElementById("email");
let passwordNode = document.getElementById("password");

// Border Colors
border1 = "1px solid #f00";
border2 = "1px solid #0f0";

// Error Dom
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");

// Email id validateion
function validateEmail(){
	emailError.textContent = "";
	let email = emailNode.value;
	let subStr = email.substring(email.indexOf('@')+1);
	console.log(subStr);
	if (email == "") {
		emailError.textContent ="This field is required";
		emailNode.style.border =border1;
		return false;
	} 
	else if(!email.includes("@") || subStr == ""){
		emailError.textContent ="incorrect Email Please put valid email Id";
		emailNode.style.border=border1;
		return false;
	}

	else {
		emailNode.style.border =border2;
		return true;
	}
}

// Password validation
function  validatePass(){
	passError.textContent ="";
	var password = passwordNode.value;
	var regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
	console.log(regExp.test(password));
	if (password == "") {
		passError.textContent="This field is required";
		passwordNode.style.border =border1;
		return false;
	}
	else if(regExp.test(password)== false){
		passError.textContent = "password should contain small letter, capital letter, special symbol and number";
		passwordNode.style.border =border1;
		return false;
	}
	else if(password.length< 8 ||  password.length >25){
		passError.textContent ="password sholud contain min 8 and max 24 Characters";
		passwordNode.style.border =border1;
		return false;
	}
	else{
		passwordNode.style.border = border2;
		return true;
	}
}

// Show password
let show = document.getElementById("show");
function showPass(){
	if (show.checked) {
		passwordNode.type="text"
	} else {
		passwordNode.type="password"

	}
}



// Remember me Checkbox
const remCheck = document.getElementById("rememberMe");
	if(localStorage.checkbox !== ""){
		remCheck.setAttribute("checked", "checked");
		emailNode.value = localStorage.username;
		passwordNode.value = localStorage.password;
	}
	else{
		remCheck.removeAttribute("checked");
		emailNode.value = "";
		passwordNode.value = "";
	}

remCheck.addEventListener("click", function(){
	if(remCheck.checked && emailNode.value && passwordNode.value !== ""){
		localStorage.username = emailNode.value;
		localStorage.password = passwordNode.value;
		localStorage.checkbox = remCheck.value;
	}

	else{
		localStorage.username = "";
		localStorage.password = "";
		localStorage.checkbox = "";
	}

});








// On submit Form Validation
function validateForm(){
	let st1 = validateEmail();
	let st2 = validatePass();

	return st1 && st2;
}