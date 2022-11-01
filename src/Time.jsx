import React,{useState} from 'react';
import "./index.css";


const Time = () => {
let newTime = new Date().toLocaleTimeString();

const [ctime , setCtime] = useState(newTime);

const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
};


return (
        <>
        <div className='heading'>
        <h1>{newTime}</h1>
        <button onClick={UpdateTime} className='button'>Get Time</button>
        </div>
        </>

    );
}   

export default Time;