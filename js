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
        const type = event.srcElement.id.split('-')
        generateTasks(type)
    })
})

function generateTasks(type) {
    const tasks = get() [type];
    let html = ''
    for (let task of tasks) {
        html += `
            <div class="task all" id="task-id-1">
                <div class="info">
                    <h3 class="task-name">Name title</h3>
                    <p class="task-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur blanditiis consectetur, consequuntur dicta dolorem dolores error est eveniet fugiat, incidunt inventore perspiciatis porro reiciendis rerum suscipit temporibus, totam velit.</p>
                    <p class="task-date">
                        <span class="date-start">2023-05-11 12:12</span>
                        до
                        <span class="date-end">2023-05-11 14:45</span>
                    </p>
                </div>
                <div class="navigate">
                    <button class="button-complete green">Завершено</button>
                    <button class="button-delete red">Удалить</button>
                </div>
            </div>
        `
    }
}
