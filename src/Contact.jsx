import React from "react";
import Home from "./Home";
import Digitalwatch from "./Digitalwatch"; 
import Error from "./Error";

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/watch" element={<Digitalwatch />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </>
    );
};

export default Contact;