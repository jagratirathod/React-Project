import React, { createContext } from "react"
import Context2 from "./Context2";

const FirstName = createContext();
const LastName = createContext();

const Context3 = () => {
    return (
        <>
            <FirstName.Provider value={"jagrati"}>
                <LastName.Provider value={"rathod"}>
                    <Context2 />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default Context3;
export { FirstName, LastName };
