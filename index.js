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

function date__time(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    d = date.getDate();
    day = date.getDay();
    days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    
    //get hours
    h = date.getHours();
    if(h < 10) {
        h = "0" + h;
    }

    //get minutes
    m = date.getMinutes();
    if(m < 10) {
        m = "0" + m;
    }

    //get seconds
    s = date.getSeconds();
    if(s < 10) {
        s = "0" + s;
    }

    result = '' + days[day] + ' ' + months[month] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date__time("'+id+'");' ,'1000');
    return true;
}

window.onload=date__time("date__time")



