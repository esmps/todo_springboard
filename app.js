let form = document.querySelector('#to-do-form');
let input = document.querySelector('#to-do-value');
let toDoList = document.querySelector('#to-do-list');

if(localStorage.getItem("newList")){
    toDoList.innerHTML = localStorage.getItem("newList");
}

toDoList.addEventListener('click', function(e){
    if (e.target.className === 'remove'){
        e.target.parentElement.remove();
        saveData(toDoList);
    }
    else if (e.target.className === 'completed'){
        e.target.parentElement.style.textDecoration = 'line-through';
        saveData(toDoList);
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newToDo = document.createElement('li');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    removeBtn.innerHTML = '&#9746;';
    removeBtn.className = 'remove';

    completeBtn.innerHTML = "&#9745;";
    completeBtn.className = 'completed';

    newToDo.innerText = input.value;
    newToDo.className = 'to-do-item';

    newToDo.appendChild(removeBtn);
    newToDo.appendChild(completeBtn);
    toDoList.appendChild(newToDo);
    input.value = '';

    saveData(toDoList);
});

function saveData(toDoList){
    localStorage.setItem("newList", toDoList.innerHTML);
}