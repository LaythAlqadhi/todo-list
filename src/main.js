import { Todo } from './todo.js';
import { Project } from './project.js';
import { Style } from './style.css';

const todo1 = new Todo('Grocery Shopping', 'Buy fruits, vegetables, eggs, and milk for the week.', new Date('2023-08-23'), 'high');
const project1 = new Project('Shopping')
project1.addTodo(todo1)

const todo2 = new Todo('Prepare Presentation', 'Create slides and outline for upcoming client presentation.', new Date('2023-08-16'), 'medium');
const project2 = new Project('Presentation')
project2.addTodo(todo2)
project2.addTodo(todo1)
let inbox = [];
  
inbox.push(project1)
inbox.push(project2)

document.querySelector('#menu-icon')
.addEventListener('click', () => {
    document.querySelector('.sidebar')
.classList.toggle('active');
    setTimeout(() => {
        document.querySelector('.sidebar')
.classList.toggle('sidebar-transition');
    } , 0)
})

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}


function setNewProject() {
    let requirementsAlert = '';
    document.querySelector('.add-project').addEventListener('click', () => {
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.add-project-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.add-project-popup').classList.remove('active-popup');
     }))
     document.querySelector('.add-project-confirm').addEventListener('click', (e) => {
     e.preventDefault();
     const name = document.querySelector('#add-name')
     
     if (name.value === '' && requirementsAlert != '' || name.value.length < 3 && requirementsAlert != '') {
         return
         }if (name.value === '' || name.value.length < 3) {
         requirementsAlert = `<p>Please fill out all requirements.</p>`;
         document.querySelector('.add-project-confirm').insertAdjacentHTML("beforebegin", requirementsAlert);
         return
         }
         
     const project = new Project(name.value)
     inbox.push(project)
     setProjects()
     getTodos()
     document.querySelector('.blurred-background').classList.remove('active');
     document.querySelector('.add-project-popup').classList.remove('active-popup');
    })
  })

}setNewProject()

function setNewTodo() {
    let requirementsAlert = '';

    document.querySelector('.add-todo-item').addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.add-todo-item-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.add-todo-item-popup').classList.remove('active-popup');
     }))
    document.querySelector('.add-todo-item-confirm').addEventListener('click', (e) => {
     e.preventDefault();
        
     const title = document.querySelector('#add-title')
     const description = document.querySelector('#add-description')
     const dueDate = document.querySelector('#add-due-date')
     const priority = document.querySelector('#add-priority')
     
     if (title.value === '' && requirementsAlert != '' || title.value.length < 3 && requirementsAlert != '') {
         return
     }if (title.value === '' || title.value.length < 3) {
         requirementsAlert = `<p>Please fill out all requirements.</p>`;
         document.querySelector('.add-todo-item-confirm').insertAdjacentHTML("beforebegin", requirementsAlert);
         return
     }
        
     const todo = new Todo(title.value, description.value, new Date(dueDate.value), priority.value);
     inbox[projectIndex].addTodo(todo)
     
     setTodos(projectIndex)
        
     title.value = '';
     description.value = '';
     dueDate.value = '';
     priority.value = '';
        
     document.querySelector('.blurred-background').classList.remove('active');
        document.querySelector('.add-todo-item-popup').classList.remove('active-popup');
    })
  })
}

function setEditItem() {
  document.querySelectorAll('.edit-button').forEach(item => {
     item.addEventListener('click', (e) => {
      const projectIndex = e.target.getAttribute('data-project');
      const todoIndex = e.target.getAttribute('data-todo');
      
       document.querySelector('.edit-confirm').addEventListener('click', (e) => {
          e.preventDefault();
        
          const title = document.querySelector('#edit-title')
          const description = document.querySelector('#edit-description')
          const dueDate = document.querySelector('#edit-due-date')
          const priority = document.querySelector('#edit-priority')
     
          const todo = new Todo(title.value, description.value, new Date(dueDate.value), priority.value);
          inbox[projectIndex].todos[todoIndex] = todo;
           
           setTodos(projectIndex);

          document.querySelector('.blurred-background').classList.remove('active');
          document.querySelector('.edit-popup').classList.remove('active-popup');
       })
    })
  })
}

function setProjects() {
    document.querySelector('.projects').textContent = '';

    for (let i = 0; i < inbox.length; i++) {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined');
        iconSpan.textContent = 'lists';

        const projectName = document.createElement('h2');
        projectName.textContent = inbox[i].name;

        projectContainer.appendChild(iconSpan);
        projectContainer.appendChild(projectName);

        document.querySelector('.projects').appendChild(projectContainer);
    }
}
setProjects();



function setTodos(projectIndex, date) {
    document.querySelector('.project-container').textContent = '';
    const addNewTodo = `<div data-project="${projectIndex}" class="add-todo-item">+</div>`;
    document.querySelector('.project-container').insertAdjacentHTML("afterbegin", addNewTodo)

    for (let i = 0; i < inbox[projectIndex].todos.length; i++) {
        let priority = '';
        const currentDate = new Date();
        const todoDueDate = inbox[projectIndex].todos[i].dueDate;

        if (date === 'today') {
            if (
                todoDueDate.getDate() !== currentDate.getDate() ||
                todoDueDate.getMonth() !== currentDate.getMonth() ||
                todoDueDate.getFullYear() !== currentDate.getFullYear()
            ) {
                continue;
            }
        } else if (date === 'this-week') {
            let daysOfTheWeek = [];
            let day = currentDate.getDate();
            for (let j = 0; j <= 7; j++) {
                daysOfTheWeek.push(day);
                day++
            }
            if (
                !daysOfTheWeek.includes(todoDueDate.getDate()) ||
                todoDueDate.getMonth() !== currentDate.getMonth() ||
                todoDueDate.getFullYear() !== currentDate.getFullYear()
            ) {
                continue;
            }
        }

        if (inbox[projectIndex].todos[i].priority === 'high') {      
            priority = 'high-priority';
        }else if (inbox[projectIndex].todos[i].priority === 'medium') {      
            priority = 'medium-priority';
        }else if (inbox[projectIndex].todos[i].priority === 'low') {      
            priority = 'low-priority';
        };
        
        
        
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.setAttribute('id', priority);
        
        const todoContent = document.createElement("div");

        
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("data-project", projectIndex);
        checkbox.setAttribute("data-todo", i);
        if (inbox[projectIndex].todos[i].completed) {
            todoContent.classList.add('completed');       
            checkbox.checked = true;
        }
        
        const title = document.createElement("h1");
        title.textContent = inbox[projectIndex].todos[i].title;

        todoContent.appendChild(checkbox);
        todoContent.appendChild(title);

        const detailsButton = document.createElement("button");
        detailsButton.classList.add("details-button");
        detailsButton.setAttribute("data-project", projectIndex);
        detailsButton.setAttribute("data-todo", i);
        detailsButton.textContent = "DETAILS";

        const dueDate = document.createElement("p");
        dueDate.setAttribute("data-project", projectIndex);
        dueDate.setAttribute("data-todo", i);
        dueDate.textContent = formatDate(inbox[projectIndex].todos[i].dueDate);

        const editButton = document.createElement("span");
        editButton.classList.add("material-symbols-outlined", "edit-button");
        editButton.setAttribute("data-project", projectIndex);
        editButton.setAttribute("data-todo", i);
        editButton.textContent = "edit";
        
        const deleteButton = document.createElement("span");
        deleteButton.classList.add("material-symbols-outlined", "delete-button");
        deleteButton.setAttribute("data-project", projectIndex);
        deleteButton.setAttribute("data-todo", i);
        deleteButton.textContent = "delete";

        const buttonContainer = document.createElement("div");
        buttonContainer.appendChild(detailsButton);
        buttonContainer.appendChild(dueDate);
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(todoContent);
        todoItem.appendChild(buttonContainer);

        document.querySelector('.project-container').appendChild(todoItem);


    }
    getDetailes()
    getEditInputs()
    deleteItem()
    setCompleted()
    setNewTodo()
    setEditItem()
}

function getDetailes() {
    document.querySelectorAll('.details-button').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
        
        document.querySelector('.title-details').textContent = `Title: ${inbox[projectIndex].todos[todoIndex].title}`
        document.querySelector('.description-details').textContent = `Description: ${inbox[projectIndex].todos[todoIndex].description}`
        document.querySelector('.due-date-details').textContent = `Due date: ${formatDate(inbox[projectIndex].todos[todoIndex].dueDate)}`
        document.querySelector('.priority-details').textContent = `Priority: ${inbox[projectIndex].todos[todoIndex].priority}`
      
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.details-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.details-popup').classList.remove('active-popup');
        }))
     })
  })
}

function getEditInputs() {
    document.querySelectorAll('.edit-button').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
          
        document.querySelector('#edit-title').value = inbox[projectIndex].todos[todoIndex].title;
        document.querySelector('#edit-description').value = inbox[projectIndex].todos[todoIndex].description;
        document.querySelector('#edit-due-date').value = formatDate(inbox[projectIndex].todos[todoIndex].dueDate);
        document.querySelector('#edit-priority').value = inbox[projectIndex].todos[todoIndex].priority;
          
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.edit-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.edit-popup').classList.remove('active-popup');
        }))
     })
  })
}

function deleteItem() {
    document.querySelectorAll('.delete-button').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
        inbox[projectIndex].todos.splice(todoIndex, 1)
        e.target.parentNode.parentNode.remove();
        setTodos(projectIndex)
     })
  })
}

function setCompleted() {
    document.querySelectorAll('.checkbox').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
          if (inbox[projectIndex].todos[todoIndex].completed) {
              inbox[projectIndex].todos[todoIndex].markAsNotCompleted()
              e.target.parentNode.classList.remove('completed')
          }else {
              inbox[projectIndex].todos[todoIndex].markAsCompleted()
              e.target.parentNode.classList.add('completed')
          }
     })
  })
}


function getTodos() {
    document.querySelectorAll('.project').forEach((item, index) => {
      item.addEventListener('click', () => {
        setTodos(index)
      });
    })
}getTodos();


function getAllInbox() {
    document.querySelector('.inbox').addEventListener('click', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index))
    })
    window.addEventListener('load', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index))
    })
}getAllInbox();

function getAllInboxOfToday() {
    const currentDate = new Date();
    document.querySelector('.today').addEventListener('click', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index, 'today'))
    })
}getAllInboxOfToday();

function getAllInboxOfWeek() {
    const currentDate = new Date();
    document.querySelector('.this-week').addEventListener('click', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index, 'this-week'))
    })
}getAllInboxOfWeek();
