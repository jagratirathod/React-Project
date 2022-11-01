import React, { useState } from "react";

const Form = () => {
    const [name ,setName] = useState("")

    const [fullName , setFullName] = useState("")

    const inputEvent = (event) =>{
        console.log(event.target.value); 
        setName(event.target.value);          //type and get value
    }

    const onSubmit =() =>{
        setFullName(name)                      //after clicking button get name                 
    } 
    return (
        <>
            <div className="heading">
                <h1>Hello {fullName}</h1>
                {/* <input type="text" placeholder = "Enter Name" defaultvalue=""/>  <br/><br/> */}
                {/* <input type="text" placeholder = "Enter Name"  value=""/>  <br/><br/> */}

                <input type="text" placeholder = "Enter Name" onChange={inputEvent} value={name}/>  <br/><br/>


                <button onClick={onSubmit}>Click me  👍 </button>
            </div>
        </>
    );
};

export default Form;