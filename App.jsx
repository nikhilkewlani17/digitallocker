import React, { useState } from "react";

const App = () => {
    let time = new Date().toLocaleTimeString();
    const[cTime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(updateTime,1000);  //The setInterval() method calls a function at specified intervals (in milliseconds).

    return(
        <>
            <div>
                <h1> {cTime} </h1>
            </div>
           
        </>
    );

};

export default App;