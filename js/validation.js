var fnameNode = document.getElementById("fname");
var lnameNode = document.getElementById("lname");
var emailNode = document.getElementById("email");
var passwordNode = document.getElementById("pass");
var mobileNode = document.getElementById("mobile");


var error1Node = document.getElementById("error1");
var error2Node = document.getElementById("error2");
var error3Node = document.getElementById("error3");
var error4Node = document.getElementById("error4");
var error5Node = document.getElementById("error5");


border1 = "1px solid #f00"
border2 = "1px solid #0f0"

// First Name Input Field
function validate1(){
	error1Node.textContent ="";
	var fname = fnameNode.value;
	var regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(fname));
	if (fname=="") {
		error1Node.textContent= "This field is required";
		fnameNode.style.border= border1;
		return false;
	} 
	else if(regExp.test(fname)== false){
		error1Node.textContent= "Name Should contain only alphabates";
		fnameNode.style.border= border1;
		return false;
	}
	else {
		fnameNode.style.border=border2;
		return true;
	}
}
// Last Name Input Field
function validate2(){
	error2Node.textContent ="";
	var lname = lnameNode.value;
	var regExp = new RegExp("^[A-Za-z]*$");
	console.log(regExp.test(lname));
	if (lname=="") {
		error2Node.textContent= "This field is required";
		lnameNode.style.border= border1;
		return false;
	} 
	else if(regExp.test(lname)== false){
		error2Node.textContent= "Name Should contain only alphabates";
		lnameNode.style.border= border1;
		return false;
	}
	else {
		lnameNode.style.border=border2;
		return true;
	}
}
// Email Id Input Field
function validate3(){
	error3Node.textContent="";
	var email = emailNode.value;
	var substr = email.substring(email.indexOf('@')+1);
	console.log(substr);
	if(email == ""){
		error3.textContent="This field is required";
		emailNode.style.border = border1;
		return false;
	}
	else if(!email.includes("@") || substr == ""){
		error3.textContent = "please valid email id";
		emailNode.style.border = border1;
		return false;
	}
	else{
		emailNode.style.border = border2;
		return true;
	}
}

// Password Input Field
function validate4(){
	error4Node.textContent="";
	var password = passwordNode.value;
	var regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
	console.log(regExp.test(password));
	if (password == "") {
		error4Node.textContent="This filed is required";
		passwordNode.style.border = border1;
		return false;
	} else if(regExp.test(password)==false) {
		error4Node.textContent="password should contain 1 capital, 1 small leters, 1 special symbol and 1 number";
		passwordNode.style.border = border1;
		return false;
	}
	else if(password.length<8 || password.length>25){
		error4Node.textContent="password should contain min 8 and max 24 characters";
		passwordNode.style.border = border1;
		return false;
	}
	else{
		passwordNode.style.border = border2;
		return true;
	}
}

// Mobile Number Input Field 
function validate5(){
	error5Node.textContent ="";
	var mobile =mobileNode.value;
	var regExp = new RegExp("^[0-9]*$");
	console.log(regExp.test(mobile));
	if(mobile== ""){
		error5Node.textContent="This field is required";
		mobileNode.style.border =border1;
		return false;
	}
	else if(regExp.test(mobile)== false){
		error5Node.textContent="number should contain digit only";
		mobileNode.style.border = border1;
		return false;
	}
	else if(mobile.length!=10){
		error5Node.textContent = "mobile number is not valid";
		mobileNode.style.border=border1;
		return false;
	}
	else{
		mobileNode.style.border=border2;
		return true;
	}
}


function formValidate(){
	var stat1 = validate1();
	var stat2 = validate2();
	var stat3 = validate3();
	var stat4 = validate4();
	var stat5 = validate5();

	return stat1 && stat2 && stat3 && stat4 && stat5 
}