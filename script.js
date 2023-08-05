function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const todoList = document.getElementById("todoList");
    const li = document.createElement("li");
    li.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = toggleTodoStatus;

    const todoTextElement = document.createElement("span");
    todoTextElement.textContent = todoText;

    li.appendChild(checkbox);
    li.appendChild(todoTextElement);
    todoList.appendChild(li);

    todoInput.value = "";
  }
}

function toggleTodoStatus(event) {
  const todoTextElement = event.target.nextElementSibling;
  if (event.target.checked) {
    todoTextElement.style.textDecoration = "line-through";
  } else {
    todoTextElement.style.textDecoration = "none";
  }
}
