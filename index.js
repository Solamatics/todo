let pushBtn = document.getElementById('push');
let inputTask = document.getElementById('input__value');
let tasks = document.getElementById('tasks');

pushBtn.addEventListener('click', () => {
    // console.log(inputTask.value);
    if(inputTask.value.length === 0) {
        alert("Please enter a task")
    } else {
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${inputTask.value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
    };

    let currentTasks = document.querySelectorAll('.delete');
    for(let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    let strikeTasks = document.querySelectorAll('.task');
    for(let i = 0; i < strikeTasks.length; i++) {
        strikeTasks[i].onclick = function() {
            this.classList.toggle('completed');
        }
    }

    inputTask.value = "";
})



