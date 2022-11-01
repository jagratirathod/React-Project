import React, { useState } from "react";

const Forhook = () => {
    const state = useState
    // console.log(state);

    const[count ,setCount] = useState(50);
    // let count = 1;

    const IncNum = () => {
        setCount(count-1);
        console.log("Clicked " + count++);
    }

    return (
        <>
            <div className="heading">
                <h1> {count} </h1>
                <button className="button" onClick={IncNum}>Click Me</button>
            </div>
        </>
    );

};
export default Forhook;