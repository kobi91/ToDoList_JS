function load() {
    let items = JSON.parse(localStorage.getItem("userInputs"));
    for(let key in items){
      let div = document.createElement("div");
      let l1 = document.createElement("li");
      l1.className = "bold"
      let l2 = document.createElement("li");
      l1.append(items[key][0])
      l2.append(items[key][1])
      div.append(l1, l2)
      document.getElementById("myList").append(div); 
    }  
}

Add.onclick=()=>{
  let task = taskInput.value;
  let date = dateInput.value; 
  existing = localStorage.getItem("userInputs"); 
  
  if (task === "" || date === "") {
    alert("You must write something!");
  } 
  else if(existing!=null) {
    existing = JSON.parse(existing);
    existing[task] = [task, date];  
    localStorage.setItem("userInputs", JSON.stringify(existing));     
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
  }
  else {  
    let userInputs = {task: [task, date]};     
    localStorage.setItem("userInputs", JSON.stringify(userInputs));     
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";          
  }
  location.reload()    
}

Show.onclick=()=>{
  document.getElementById("myList").className = "show";            
}

Clear.onclick=()=>{
  document.getElementById("myList").className = "hide";  
}

Delete.onclick=()=>{
  localStorage.clear();
}

