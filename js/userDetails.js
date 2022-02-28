let showDetail = document.getElementById("showDetail");
showDetail.addEventListener("click", function(){
	const URL = "https://jsonplaceholder.typicode.com/users";

	fetch(URL)
	.then((response)=> response.json())
	.then((userData)=>{
		details(userData);
		console.log(userData);
	})
	.catch((error)=>{
		console.log(error);
	})
});



let result = document.getElementById("result");
const details = (data)=>{
	// Create Table 
	let tableClass = "table table-bordered table-hover";
	let table = document.createElement("table")
	table.setAttribute("class", tableClass);
	result.appendChild(table);

	// Create Row Inside Table
	let row = document.createElement("tr");
	row.setAttribute("id", "tableRow")
	table.appendChild(row)

	// Create column i.e th and td inside row
	
	// Serial No.
	var thead = document.createElement("th") 
	let srNo =  document.createTextNode("Sr. No.")
	thead.appendChild(srNo);
	row.appendChild(thead);

	// Name.
	var thead = document.createElement("th") 
	let nameNode =  document.createTextNode("Name")
	thead.appendChild(nameNode);
	row.appendChild(thead);

	// User Name.
	var thead = document.createElement("th") 
	let userName =  document.createTextNode("User Name")
	thead.appendChild(userName);
	row.appendChild(thead);

	// Email
	var thead = document.createElement("th") 
	let emailNode =  document.createTextNode("Email Id")
	thead.appendChild(emailNode);
	row.appendChild(thead);

	// Phone Number
	var thead = document.createElement("th") 
	let phoneNode =  document.createTextNode("Phone No.")
	thead.appendChild(phoneNode);
	row.appendChild(thead);

	// Webstie 
	var thead = document.createElement("th") 
	let websiteNode =  document.createTextNode("Website")
	thead.appendChild(websiteNode);
	row.appendChild(thead);

	// Company Name
	var thead = document.createElement("th") 
	let companyNode =  document.createTextNode("Company")
	thead.appendChild(companyNode);
	row.appendChild(thead);


	for(i=0; i<data.length; i++){
		let tr = document.createElement("tr");
		table.appendChild(tr)

		let numberTdNode = document.createElement("td")
		let nameTdNode = document.createElement("td")
		let userTdNode = document.createElement("td")
		let emailTdNode = document.createElement("td")
		let phoneTdNode = document.createElement("td")
		let websiteTdNode = document.createElement("td") 
		let compTdNode = document.createElement("td") 

		// Serail Numbers
		numberTdNode.innerHTML = data[i].id;
		tr.appendChild(numberTdNode);

		// Names
		nameTdNode.innerHTML = data[i].name;
		tr.appendChild(nameTdNode);

		// Usernames
		userTdNode.innerHTML = data[i].username;
		tr.appendChild(userTdNode);

		// Emails
		emailTdNode.innerHTML = data[i].email;
		tr.appendChild(emailTdNode);

		// Phone Numbers
		phoneTdNode.innerHTML = data[i].phone;
		tr.appendChild(phoneTdNode);

		// Websies
		websiteTdNode.innerHTML = data[i].website;
		tr.appendChild(websiteTdNode);

		// Company Name
		compTdNode.innerHTML = data[i].company.name;
		tr.appendChild(compTdNode);
	}
}