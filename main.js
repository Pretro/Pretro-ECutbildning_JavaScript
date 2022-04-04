// Task container
const tasksContainer = document.getElementById('tasksContainer');

// Call addNewTask every time the user adds a new task
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) 
    return;

// Create an element
    const task=document.createElement('div');

    // Add two classes, task and roundBorder
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

// Create changeTaskState
const changeTaskState = event => {
    // Use toogle. If the class done exists, it is taken away, if not, its added. 
    event.target.classList.toggle('done');
};

// Create order and inside two arrays
const order = () => {
     const done = [];
     const toDo = [];
     tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}
