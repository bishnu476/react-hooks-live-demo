/*
import React,{useState} from 'react';
function ArrayUseState(props) {
    const initialArray = [];
    const [array, setArray] = useState([]);
    const addItem = () =>{
        setArray([...array,{
            id: array.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    };
    return (
        <div>
            <input type="text"/>
            <button onClick={addItem}>Add a number </button>
            <ul>
                {
                    array.map(item=>
                        <li key={item.id}>{item.value}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default ArrayUseState;*/

import React, {useState} from 'react';

function ArrayUseState(props) {
    const [array, addArray] = useState([]);
    const addInTheMenu = ()=>{
      addArray([...array,{
          id: array.length + 1,
          value: Math.floor(Math.random()*10)

      }])
    };

    return (
        <div>
            <button onClick={addInTheMenu}>Add Value</button>
            <ul>
                {array.map(data=><li key= {data.index}> {data.value} </li>
                )}
            </ul>
        </div>
    );
}

export default ArrayUseState;