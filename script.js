function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("task-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.classList.add("complete-btn");
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(buttonsDiv);

  taskList.appendChild(li);

  taskInput.value = "";
}
