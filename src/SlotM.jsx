import React from 'react';


const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '🎅';

    // let x = props.x ;
    // let y = props.y ;
    // let z = props.z ;

    let { x, y, z } = props;                       //object destructuring

    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="heading">
                    <h3> {x} {y} {z} </h3>
                    <h3>This is Matching .</h3>
                    <hr />

                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="heading">
                    <h3> {x} {y} {z} </h3>
                    <h3>This is Not Matching .</h3>

                    <hr />

                </div>
            </>
        );

    }
    ;
}

export default SlotM;