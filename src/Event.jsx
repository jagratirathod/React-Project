import React, { useState } from "react";
import "./index.css";


const Event = () => {
    const purple = "purple";
    const [bg, setBg] = useState(purple);   

    const [name,setName] = useState("Click here !!");

    const bgChange = () => {
        // console.log('clicked')
        let newBg = 'yellow';
        setBg(newBg);
        setName("ouch 💁")
    };

    const bgBack = () => {
        let newBg = 'yellow';   
        setBg(purple);
        setName("Final 👍")
    };

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                {/* <button onClick={bgChange} onDoubleClick = {bgBack}>{name}</button> */}
                <button onMouseEnter = {bgChange} onMouseLeave = {bgBack}>{name}</button>


            </div>
        </>

    );
}
export default Event;
