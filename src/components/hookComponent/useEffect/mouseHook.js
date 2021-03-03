import React, {useState, useEffect} from 'react';

function MouseHook(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e =>{
        console.log("mouseEvent");
        setX(e.clientX);
        setY(e.clientY);
    };
    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMousePosition);
        return ()=>{
            window.removeEventListener("mousemove", logMousePosition)
        }
    },[]);


    return (
        <div>
            X - {x} Y- {y}
        </div>
    );
}

export default MouseHook;
