import React from 'react';
import {useState, useEffect} from 'react';

export const DisplayStuff = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/senators/UT').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setInitialState(jsonRes))
    }, [])

    return <div>
        {initialState.length > 0 && initialState.map(e => <li>{e}</li>)}
    </div>
}
export default DisplayStuff;