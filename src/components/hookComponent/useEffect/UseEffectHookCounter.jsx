import React, {useState, useEffect} from 'react';
import AdSense from 'react-adsense';

function UseEffectHookCounter(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("");
    useEffect(()=> {
        console.log('UseEffect updating title');
        document.title = `You clicked ${count} times`
    }, [count]);

    //useEffect hook is called everytime when the page is rerender
    //useEffect second parameter is array which consist of the condition value
    //to rerender useEffect
    return (
        <div>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={()=>setCount( count + 1
            )} > Count Value {count}</button>
            <AdSense.Google
                client='ca-pub-7292810486004926'
                slot='7806394673'
                style={{ width: 500, height: 300, float: 'left' }}
                format=''
            />

        </div>
    );
}

export default UseEffectHookCounter;
