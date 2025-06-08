const todoList =  [{
    name :'make dinner',
    dueDate :'2022-12-22'
},{ 
    name:'wash dishes',
    dueDate :'2022-12-23'}]; 
    
renderTodoList();

function renderTodoList(){
    let todoListHtml = '';
    todoList.forEach(function(todoObject,index){
        const {name , dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-button">Delete</button>
        `;
        todoListHtml += html;

    });

    document.querySelector('.js-div-todo').innerHTML=todoListHtml;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        })
    });
}

document.querySelector('.js-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInput = document.querySelector('.js-date-input');

    const dueDate = dateInput.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';
    renderTodoList();
}

