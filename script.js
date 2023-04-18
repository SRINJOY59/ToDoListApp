const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
// Add event listener for form submission
todoForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const task = todoInput.value; // Get the value from input field
    if (task !== '') {
        addToDoItem(task); // Add the task to the to-do list
        todoInput.value = ''; // Clear the input field
        todoInput.focus(); // Set focus back to input field
    }
});
function addToDoItem(task) {
  const listItem = document.createElement('li'); // Create a new list item
  const taskText = document.createTextNode(task); // Create a text node with the task text
  const deleteButton = document.createElement('button'); // Create a delete button
  deleteButton.textContent = '✅'; // Set delete button text
  deleteButton.classList.add('deleteButton'); // Add class for styling
  deleteButton.addEventListener('click', function () {
      listItem.remove(); // Remove the list item when delete button is clicked
  });

  listItem.appendChild(taskText); // Add task text to list item
  listItem.appendChild(deleteButton); // Add delete button to list item
  todoList.appendChild(listItem); // Add list item to the to-do list
}