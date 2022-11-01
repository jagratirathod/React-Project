import React from "react";
import "./index.css";


const Todo = (props) => {
    return (
        <>
            <div className="todo_style">
                <button className="size" onClick={() => { props.onSelect(props.id) }}>✖️</button>
                <li>{props.text}</li>
            </div>
        </>
    )
};

export default Todo;
