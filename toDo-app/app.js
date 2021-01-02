//jshint esversion:6
const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

//add todo function
const generateTodo = todo =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${todo}</span>
                        <i class="far fa-trash-alt delete"></i>
                    </li>`;
    ul.innerHTML+=html;
};

//search function
const searchToDos = (term) => {
    Array.from(ul.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(ul.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

    };


addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTodo(todo);
        addForm.reset();
    }
});

//delete todo
ul.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    searchToDos(term);
});