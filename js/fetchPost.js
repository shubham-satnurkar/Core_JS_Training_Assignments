// On Click Button Api Post Display 
let showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click", function(){
	const URL = "https://jsonplaceholder.typicode.com/posts";
	fetch(URL)
	.then((res)=> res.json())
	.then(postData=>{
		fetchData(postData);
		console.log(postData);
	})
	.catch((error)=>{
		console.log(error)
	})
})

const result = document.getElementById("result");
const fetchData = (data)=>{
	for(let i=0; i<data.length; i++){
		let userId = document.createElement("h6");
		let userTitle = document.createElement("h3");
		let userBody = document.createElement("h5");
		let hrLine = document.createElement("hr");

		userId.innerHTML = data[i].id;
		userId.style.color="#f00"
		result.appendChild(userId);

		userTitle.innerHTML = data[i].title;
		userTitle.style.cssText=`color:#0f0;text-transform:capitalize; `
		result.appendChild(userTitle);

		userBody.innerHTML = data[i].body;
		userBody.style.cssText=`color:#00f;text-transform:capitalize; `

		result.appendChild(userBody);

		hrLine.style.border ="2px solid orange"
		result.appendChild(hrLine);
	}	

}



// Second Column data

let target =document.getElementById("target");

let showPost = document.getElementById("showPost");
showPost.onclick = ()=>{
	const url = "https://jsonplaceholder.typicode.com/posts";
	fetch(url)
	.then((response)=> response.json())
	.then((data)=>{
		Data(data);
		console.log(data);
	})
	.catch((err)=>{
		console.log(err);
	});

}


const Data = (data)=>{
	for(i=0; i<data.length; i++){
		let Id = document.createElement("h6");
		Id.textContent = data[i].id
		target.appendChild(Id);

		let Title = document.createElement("h3");
		Title.textContent = data[i].title
		target.appendChild(Title) 

		let Body = document.createElement("p");
		Body.textContent = data[i].body
		target.appendChild(Body) 

		let hr = document.createElement("hr");
		target.appendChild(hr);
		hr.style.border="1px dashed #00f"
	}
}