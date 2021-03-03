import React, {useState} from 'react';
import {Button} from "antd";


function HookCounter() {
    //Don't call hooks inside loops,conditions, or nested functions or regular s function
    //Call hooks only within functional components
    const [count, setCount ] = useState(0); //0 is the default value

    //count is the variable and setCount is the method to update the count variable
    return (
        <div>
            <Button onClick={()=>{
                setCount(count+1)
            }}> Count {count}</Button>

        </div>
    );
};
export default HookCounter