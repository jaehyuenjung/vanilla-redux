import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, {type}) => {
    if (type === "ADD") {
        return count + 1;
    } else if (type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};

const countStore = createStore(countModifier);
