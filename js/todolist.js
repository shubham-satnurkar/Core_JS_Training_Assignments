showTask()

var addBtn = document.getElementById("addTask");
var inputTask = document.getElementById("inputTask");
var error = document.getElementById("error");


var value = inputTask.value;
// Onclick input value add to to loacl storage
addBtn.addEventListener("click", function(){
  var value = inputTask.value;
  if(value.trim()!=0){
    
   var store = localStorage.getItem("localTask");
    if(store == null){
      todoArr = [];
    }
    else{
      todoArr = JSON.parse(store);
    }
      
    todoArr.push(value);
    localStorage.setItem("localTask", JSON.stringify(todoArr));
    value = "";
  }


  showTask()
   

});
// Display Task Code
function showTask(){
  var store = localStorage.getItem("localTask");
    if(store == null){
      todoArr = [];
    }
    else{
      todoArr = JSON.parse(store);
    }
  var todoList = document.getElementById("todoList");
  var html = "";
  todoArr.forEach((item, index)=>{
    html+=`
        <li class="list-group-item ">
          <h4 id="task-Heading" class="float-left m-0 mt-2">${item}</h4>
          
          <button class="btn btn-danger float-right  "  onclick="deleteTask(${index})" id="Delete-btn">Delete Task</button>
          <button class="btn btn-primary float-right mr-3"  onclick="editTask(${index})" id="Edit-btn">Edit Task</button>
         
        </li>
    `
  });
    todoList.innerHTML = html;
}

// Edit Task code
function editTask(index){
  var saveInput = document.getElementById("saveInput");
  var saveBtn = document.getElementById("saveBtn");
  saveInput.value =index;
  var store =localStorage.getItem("localTask");
  var todoArr= JSON.parse(store);
  value =todoArr[index];
  addBtn.style.display = "none";
  saveBtn.style.display = "block";
}

// Save Task Code or Update task
var saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function(){
  var store=localStorage.getItem("localTask");
  var todoArr=JSON.parse(store);
  var saveInput = document.getElementById("saveInput").value;
  todoArr[saveInput] = inputTask.value;
  saveBtn.style.display = "none";
  addBtn.style.display = "block";

  localStorage.setItem("localTask", JSON.stringify(todoArr));
  inputTask.value ="";
  showTask();
});

// Delete added task
function deleteTask(index){
  var store = localStorage.getItem("localTask");
  var todoArr = JSON.parse(store);
  todoArr.splice(index, 1);
  localStorage.setItem("localTask", JSON.stringify(todoArr));
  showTask();
}