// @flow
import React, {useState} from 'react';
import {Button} from 'antd'

export function HookSecondCounter() {
    const initialCount = 0;

    const [count, setCount] = useState(initialCount);
    const increaseFive = ()=>{
        setCount(prevCount=>
            prevCount+5)
    };

    //using prevState to update the count value is safer than direct updating the value
    return (
        <div>
            Count: {count}
            <Button onClick={()=>{
                setCount(prevCount => prevCount+1)
            }}>Increment</Button>
            <Button onClick={()=>{
                setCount(prevCount => prevCount-1)
            }}>Decrement</Button>
            <Button onClick={increaseFive}>Increase 5</Button>
            <Button onClick={()=>{
                setCount(initialCount)
            }}>Reset</Button>

        </div>
    );
};