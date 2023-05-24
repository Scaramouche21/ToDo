const test = {
    all: [
        {id: 1, title: 'test1', description: 'description1 ', startDate: '---', endDate: '===='},
        {id: 2, title: 'test2', description: 'description2 ', startDate: '---', endDate: '===='},
        {id: 3, title: 'test3', description: 'description3 ', startDate: '---', endDate: '===='},
        {id: 4, title: 'test4', description: 'description4 ', startDate: '---', endDate: '===='},
        {id: 5, title: 'test5', description: 'description5 ', startDate: '---', endDate: '===='},
        {id: 6, title: 'test6', description: 'description6 ', startDate: '---', endDate: '===='},
    ],
    complete: [],
    overdue: []
}
set(test)

if(!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify ({
        all: [],
        complete: [],
        overdue: [],
    }))
}

function get() {
    return JSON.parse( localStorage.getItem('tasks'))
}

function set(data) {
    localStorage.setItem('tasks', JSON.stringify(data))
}

function update(type, data) {
    const allTasks = get();
    allTasks[type], push(data);
    set(allTasks);
}


const navButtons = document.querySelectorAll('header nav button')
navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const type = event.srcElement.id.split('-')[1]
        generateTasks(type)
    })
})

function generateTasks(type) {
    const tasks = get()[type];
    console.log(type, tasks)

    let html = ''

    for(let task of tasks) {
        html += `
            <div class="task ${type}" id="task-id-${task.id}">
                <div class="info">
                    <h3 class="task-name">${task.title}</h3>
                    <p class="task-description">${task.description}</p>
                    <p class="task-date">
                        <span class="date-start">${task.startDate}</span>
                        до
                        <span class="date-end">${task.endDate}</span>
                    </p>
                </div>
                <div class="navigate">
                    <button class="button-complete green">Завершено</button>
                    <button class="button-delete red">Удалить</button>
                </div>
            </div>
        `
    }
const placeTasks = document.querySelector('div.tasks')
placeTasks.innerHTML = html;
const titleTasks = document.getElementById('title-tasks');
let name = '';

const titleTasksClass = titleTasks.classList[1];
titleTasks.classList.remove(titleTasksClass);

    if(type === 'all') {
        name = 'Все задачи'
        titleTasks.classList.add('title-all')
    } else if(type === 'complete') {
        name = 'Выполненные задачи'
        titleTasks.classList.add('title-all')
    } else if(type === 'overdue') {
        name = 'Незавершенные задачи'
        titleTasks.classList.add('title-all')
    }

titleTasks.textContent = name;
}
