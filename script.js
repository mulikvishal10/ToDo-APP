function addTodo() {
  // ... existing addTodo() function remains unchanged ...
}

function toggleTodoStatus(event) {
  // ... existing toggleTodoStatus() function remains unchanged ...
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function assignTask() {
  const usersSelect = document.getElementById("usersSelect");
  const selectedUser = usersSelect.value;
  const todoList = document.getElementById("todoList");
  const todos = todoList.getElementsByClassName("todo-item");
  let assignedTask = null;

  // Find the first unassigned task
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (!todo.dataset.assigned) {
      assignedTask = todo;
      break;
    }
  }

  if (assignedTask !== null) {
    assignedTask.dataset.assigned = "true";

    const assignmentsList = document.getElementById("assignmentsList");
    const li = document.createElement("li");
    li.textContent = `${assignedTask.getElementsByTagName("span")[0].textContent} [${selectedUser}]`;
    assignmentsList.appendChild(li);
  }
}
