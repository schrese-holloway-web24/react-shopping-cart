import {useState, useEffect} from 'react';

export const useLocalStorage = (key, initVal) => {
    const [state, setState] = useState(() => 
        JSON.parse(localStorage.getItem(key)) || initVal
    );
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    return [state, setState]
}

// export const useLocalStorage = (key, initVal) => {
//     const [storedVal, setStoredVal] = useState(() => {
//         const item = window.localStorage.getItem(key);
//         return item ? JSON.parse(item) : initVal
//     })

//     const setVal = val => {
//         setStoredVal(val);
//         window.localStorage.setItem(key, JSON.stringify(val))
//     }
//     return[storedVal, setVal]
// }