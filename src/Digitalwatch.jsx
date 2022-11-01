import React, { useState } from 'react';
import "./index.css";


const Digitalwatch = () => {
    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000)
    return (
        <>
            <div className='heading'>
                <h1>{ctime}</h1>
            </div>
        </>
    )
};


export default Digitalwatch;