import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("toDos"));
}

// const reducer = (state = getLocalStorage(), action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter((toDo) => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

const reducer = createReducer(getLocalStorage(), {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) =>
        state.filter((toDo) => toDo.id !== action.payload),
});

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
