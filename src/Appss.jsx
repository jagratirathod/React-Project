import React from "react";
import {add ,sub ,mul ,div } from "./Calc";


function Appss(){
    return (
        <>
            <ol>
                <li>Hiii India </li>
                <li>{add(1,2)}</li>
                <li>{sub(6,2)}</li>
                <li>{mul(2,2)}</li>
                <li>{div(40,3)}</li>
            </ol>
        </>
    )
}

export  default Appss;