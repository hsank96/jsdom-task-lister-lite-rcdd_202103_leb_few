document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
});

document.getElementById("sub_btn").addEventListener("click", function(event){
    event.preventDefault();
    let inp= document.getElementById("new-task-description").value;
    let li = document.getElementById("tasks");
    console.log("Button Works!!!");
    console.log(inp);
    li.innerHTML += `<li> ${inp} <button> X </button> </li>`;
    console.log("Success"); 
 });

//document.getElementById("tasks").childNodes[1].childNodes

 document.getElementsByTagName("button").addEventListener("click", function (){
    ddocument.getElementById("tasks").childNodes.childNodes[1].remove();
 })