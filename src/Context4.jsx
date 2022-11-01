import React, { useContext } from "react"
import { FirstName , LastName} from "./Context3";


const Context4 = () => {
    const fname = useContext(FirstName);       //Use Context Hook
    const lname = useContext(LastName);


    return (
        <h1>My name is {fname} {lname}</h1>
    );
};

export default Context4;

