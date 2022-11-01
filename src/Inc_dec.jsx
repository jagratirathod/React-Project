import React, { useState } from "react";
import "./index.css";
import AddIcon from '@mui/icons-material/Add';

const Inc_dec = () => {
    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num+1)
    }

    const decNum = () => {
        if(num>0){
            setNum(num-1)
        }else{
            alert ('Sorry ,Zero limit Reach');
            // setNum(0)

        }
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num} 😄 </h1>
                    <div className="btn_div">
                        <button onClick={incNum}>Increm +</button>
                        <button onClick={decNum}><AddIcon/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inc_dec;