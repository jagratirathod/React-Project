import React from "react";


function Myapp() {
    let currDate = new Date().getHours();
    let greeting = "";
    const cssStyle = {};

    if (currDate >= 1 && currDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';

    } else if (currDate >= 12 && currDate < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';

    } else {
        greeting = 'Good Night';
        cssStyle.color = 'blue';

    }


    return (
        <>
            <div>
                <h1>hii indore!! <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </> 
    );
}




export default Myapp;
