const botton = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");  
   
botton.addEventListener("click", () => {
   const li = document.createElement("li");
   li.className = "todo-list-item";
   const deleteBtn = document.createElement("button");
   deleteBtn.innerText = "Delete";
   li.innerText = input.value;
   li.appendChild(deleteBtn);
   list.appendChild(li);
   input.value = "";

   deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
   });
  });   
