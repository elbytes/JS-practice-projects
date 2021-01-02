//jshint esversion:6
const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');

const generateTodo = todo =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${todo}</span>
                        <i class="far fa-trash-alt delete"></i>
                    </li>`;
    ul.innerHTML+=html;
};

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTodo(todo);
        addForm.reset();
    }
    
});


ul.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});