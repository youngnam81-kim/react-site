import React, { createContext, useContext, useState } from 'react'


const GlobalContext2 = createContext();


const ExContProvider02 = ({ children }) => {
    const [count2, setCount2] = useState(5);

    return (
        <>
            <h3>ExContProvider02</h3>
            <GlobalContext2.Provider value={{ count2, setCount2 }}>
                {children}
            </GlobalContext2.Provider>
        </>
    )
}

export default ExContProvider02;


export const useGlobal2 = () => useContext(GlobalContext2);