const todo =document.getElementById("todo");
const click = document.getElementById("click")
const list =document.getElementById("list")

function addTask(){
    const task = todo.value;
   

    if(task!==""){
    const li = document.createElement("li");
    li.textContent =task;
    list.appendChild(li);
    todo.value = "";
    }

}
click.addEventListener("click", addTask);


todo.addEventListener("keydown",function(event){
    if(event.key ==="enter"){
        addTask();
    }
});