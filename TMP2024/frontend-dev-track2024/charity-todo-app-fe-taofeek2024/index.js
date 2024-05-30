
const inputField = document.getElementById("input-field");
const todoItemContainer = document.getElementById("todo-item-con");
inputField.addEventListener("keydown", (event) =>{
  if (event.key === "Enter"  && inputField.value.trim()) {
    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add("todo-list-container");
    todoItemContainer.appendChild( todoListContainer);

    const todoText = document.createElement('p');
    todoText.innerText = inputField.value;
    todoText.style.wordBreak = "break-word";
    todoText.classList.add("todo-paragraph");
    todoListContainer.appendChild(todoText);
    inputField.value = "";

    todoText.addEventListener("dblclick", ()=>{
    inputField.value = todoText.innerText;
    const parent = todoText.parentElement;
    parent.remove();
   });

    let newTime = document.createElement('span');
    let newDate = new Date();
    let current = newDate.toLocaleTimeString();
    newTime.innerText =  current;
    newTime.classList.add("new-time");
    todoListContainer.appendChild(newTime);
    
    let completeButton = document.createElement('button');
    completeButton.innerText =  'Done';
    completeButton.classList.add("complete");
    todoListContainer.appendChild(completeButton);
    completeButton.addEventListener("click", ()=>{
      todoText.classList.toggle("line-through");
    });

    let deleteButton = document.createElement('button');
    deleteButton.innerText =  'Delete';
    deleteButton.classList.add("delete");
    todoListContainer.appendChild(deleteButton);
    deleteButton.addEventListener("click", ()=>{
      const parent = deleteButton.parentElement;
      parent.remove();
    });


  };

});



  