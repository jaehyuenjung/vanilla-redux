import { createStore } from "redux";
import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("toDos"));
}

// const reducer = createReducer(getLocalStorage(), {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) =>
//         state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
    name: "toDosReducer",
    initialState: getLocalStorage(),
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) =>
            state.filter((toDo) => toDo.id !== action.payload),
    },
});

const store = configureStore({ reducer: toDos.reducer });

function saveLocalStorage() {
    localStorage.setItem("toDos", JSON.stringify(store.getState()));
}

store.subscribe(saveLocalStorage);

export const { add, remove } = toDos.actions;

export default store;
