const form = document.querySelector('#add-toList');
const input = document.querySelector('#chores');
const choreList = document.querySelector('#toDo-list');


const list = JSON.parse(localStorage.getItem("chores")) || [];
for (let i = 0; i < list.length; i++) {
    let newChore = document.createElement('li');
    newChore.innerText = list[i].task;
    newChore.isCompleted = list[i].isCompleted ? true : false;
    if (newChore.iscompleted) {
        newChore.style.textDecoration = "line-through";
    }
    choreList.appendChild(newChore);
    
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newChore = document.createElement('li');
    const toDobutton = document.createElement('button');
    toDobutton.innerText = "DONE";
    console.log(choreList.length)
    newChore.innerText = input.value;
    newChore.isCompleted = false;
    toDobutton.setAttribute('id', list.length)
    newChore.appendChild(toDobutton);
    input.value = '';
    choreList.appendChild(newChore);
    list.push(list.length)

    savedChores.push({task : newChore.innerText, isCompleted : false});
    localStorage.setItem("chores", JSON.stringify(list)); 

});

    toDobutton.addEventListener('click', function(e){
       e.target.parentElement.remove();
    
    });

    newChore.addEventListener('click', function(e) {
    e.target.style.textDecoration = "line-through";
    });  
    
    savedChores.push({task : newChore.innerText, isCompleted : false});
    localStorage.setItem("chores", JSON.stringify(list)); 




});