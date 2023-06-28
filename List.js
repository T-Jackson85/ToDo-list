const form = document.querySelector('#add-toList');
const input = document.querySelector('#chores');
const choreList = document.querySelector('#toDo-list');


const List = []


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newChore = document.createElement('li');
    const toDobutton = document.createElement('button');
    toDobutton.innerText = "DONE";
    console.log(choreList.length)
    newChore.innerText = input.value;
    toDobutton.setAttribute('id', List.length)
    newChore.appendChild(toDobutton);
    input.value = '';
    choreList.appendChild(newChore);
    List.push(List.length)
    toDobutton.addEventListener('click', function(e){
       e.target.parentElement.remove()
    });

    newChore.addEventListener('click', function(e){
        e.target.style.textDecoration = "line-through";
    })

});