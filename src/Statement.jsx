import React from "react";
import "./index.css";
import Netflix from "./Netflix";
import Amazon from "./Amazon";


const favseries = "netflix";

const Statement = () => (
    <>
        <h1> --- List of series --- </h1>

        {(favseries === 'netflix')? <Netflix /> : <Amazon/>}

    </>
);


export default Statement;
