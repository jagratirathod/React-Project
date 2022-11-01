import React from "react"
import { FirstName, LastName } from "./Context3";


const Context1 = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>My name is {fname}  {lname} 😄</h1> 
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>

        </>
    );
};

export default Context1;