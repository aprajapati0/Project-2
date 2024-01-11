// TO DO LIST START CODE

// HTML Variables
let outputEl = document.getElementById("list");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

let todoList = JSON.parse(localStorage.getItem("listStr"));
let list = ["", "", ""]
printTDlist(); 
function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("mList").value;

  if (selection === "add") {
    addItem();  
  } else if (selection === "insert") {
    insert();
  } else if (selection === "edit") {
    edit();
  }   
  
  printTDlist();  
  
}
//List Making 
// function btnClicked(){
//   for (let i = 0; i < list.length; i++) {
//     outputEl.innerHTML += `<div>${[i + 1]}:${list[i]}</div`; 
//   }
// }


function addItem() {
  let item = prompt("Add Items");
  console.log("Add item");
  list.push(item); 
}


function insert() {
  console.log("Insert");
  let position = prompt("Insert Position");
  let item = prompt("Insert Items");
  position -= 1; 
  list.splice(position, 0, item); 
}


function edit() {
  console.log("Edit");
  let position = prompt("Insert Position");
  let item = prompt("Insert Replacement");
  position -= 1; 
  list.splice(position, 1, item);
}



function printTDlist() {
  outputEl.innerHTML = ""; 
  for (let i = 0; i < list.length; i++) {
   outputEl.innerHTML += `<div>${[i + 1]}: ${list[i]}</div`; 
  }
}