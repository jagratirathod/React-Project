import React, { useState } from "react";
import Todo from './Todo';

const Todolist = () => {

    const [inputList, setInputList] = useState("");

    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    };
    const deleteItems = (id) => {                                          //delete items
        console.log("deleted")
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        })
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList} />
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {Items.map((itemval, index) => {
                            return <Todo key={index} id={index} text={itemval} onSelect={deleteItems} />;   //optimize the code
                            // return <li>{itemval}</li>;     //remove
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default Todolist;