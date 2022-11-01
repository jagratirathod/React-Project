import React, { useState } from "react";

const Loginform = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;

        setFullName((preValue) => {
            if (name === "fName") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            } else if (name === "lName") {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            } else if (name === "email") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                    autoComplete: "off"
                };
            } else if (name === "phone") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                };
            }

        });
    };


    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    }


    return (
        <>
            <div className="heading">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phone}</p>


                        <input type="text" placeholder="Enter Name" onChange={inputEvent} value={fullName.fname} name="fName" />  <br /><br />
                        <br />
                        <input type="text" placeholder="Enter Last Name" onChange={inputEvent} value={fullName.lname} name="lName" />  <br /><br />
                        <br />
                        <input type="email" placeholder="Enter Email" onChange={inputEvent} value={fullName.email} name="email" />  <br /><br />
                        <br />
                        <input type="number" placeholder="Mobile number" onChange={inputEvent} value={fullName.phone} name="phone" />  <br /><br />


                        <button type="submit" >Submit   👍 </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Loginform;