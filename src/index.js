import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
    return { type: ADD_TODO, text };
}

const deleteToDo = (id) => {
    return { type: DELETE_TODO, id };
}

const reducer = (state = [], action) =>{
    switch (action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: Date.now()}];
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
}

const store = createStore(reducer);

const dispatchDeleteToDo = (e) => {
    const id = e.target.parentNode.id;
    store.dispatch(deleteToDo(id));
}

const paintTodos = () => {
    ul.innerHTML = "";
    const toDos = store.getState();
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDos.id;
        li.innerText = toDos.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintTodos);

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}

const onSubmit = e => {
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);