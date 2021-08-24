import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, id, onButtonClick }) {
    return (
        <Link to={`/${id}`}>
            <li>{text}</li>
            <button onClick={onButtonClick}>DEL</button>
        </Link>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onButtonClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);
