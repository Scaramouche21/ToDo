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
