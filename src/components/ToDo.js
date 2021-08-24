import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

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
        onButtonClick: () => dispatch(remove(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);
