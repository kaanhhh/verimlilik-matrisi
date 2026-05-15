const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const matrixSelect = document.getElementById('matrix-select');

// LocalStorage'dan verileri çek
let tasks = localStorage.getItem('matrix-tasks') ? JSON.parse(localStorage.getItem('matrix-tasks')) : [];

function renderTasks() {
    // Önce tüm listeleri temizle
    document.querySelectorAll('.task-list').forEach(list => list.innerHTML = '');

    // Görevleri ait oldukları çeyreğe göre filtrele ve render et
    tasks.forEach(task => {
        const quadrantElement = document.getElementById(task.category);
        const listElement = quadrantElement.querySelector('.task-list');

        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">✕</button>
        `;
        listElement.appendChild(li);
    });
}

function addTask(e) {
    e.preventDefault();
    const newTask = {
        id: Date.now(),
        text: taskInput.value,
        category: matrixSelect.value
    };

    tasks.push(newTask);
    localStorage.setItem('matrix-tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('matrix-tasks', JSON.stringify(tasks));
    renderTasks();
}

form.addEventListener('submit', addTask);
renderTasks(); // İlk açılışta görevleri yükle