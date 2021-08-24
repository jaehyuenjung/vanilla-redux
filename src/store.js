import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text,
    };
};

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id),
    };
};

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("toDos"));
}

const reducer = (state = getLocalStorage(), action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((toDo) => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

function saveLocalStorage() {
    localStorage.setItem("toDos", JSON.stringify(store.getState()));
}

store.subscribe(saveLocalStorage);

export const actionCreators = {
    addToDo,
    deleteToDo,
};

export default store;
