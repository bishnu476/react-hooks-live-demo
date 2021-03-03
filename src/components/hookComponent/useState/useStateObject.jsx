//Simple Example of useState hook with StateObject
import React, {useState} from 'react';

export function UseStateObject() {
    const initialName= {
        firstName: "",
        lastName: ''
    };
    const [name, setName] = useState(initialName);
    return (
            <form style={{display:"flex", flexDirection:"column"}}>
                <label>FirstName: </label>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name,firstName: e.target.value })}
                />
                <label>LastName: </label>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name,lastName: e.target.value })}
                />
                <h2>First Name is : {name.firstName}</h2>
                <h2>Last Name is : {name.lastName}</h2>
            </form>

    );
};