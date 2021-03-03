import React,{useState,useEffect} from 'react';
import MouseHook from "./mouseHook";

function HookComponentWillUnmount(props) {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Button Toggle</button>
            {display && <MouseHook /> }
        </div>
    );
}

export default HookComponentWillUnmount;
