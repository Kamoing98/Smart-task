// Select elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please type a task!");
        return;
    }

    // 1. Create the List Item (li)
    const li = document.createElement('li');
    
    // 2. Set the content
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    // 3. Add Delete Functionality
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // 4. Add to the list
    taskList.appendChild(li);

    // 5. Clear input
    taskInput.value = "";
}

// Add event listener to button
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" key to add task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});