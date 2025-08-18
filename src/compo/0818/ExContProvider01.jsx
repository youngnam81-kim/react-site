import React, { createContext, useContext, useState } from 'react'

//context 생성
const GlobalContext = createContext();

//provider 생성
const ExContProvider01 = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h3>ExContProvider01</h3>
            <GlobalContext.Provider value={{ count, setCount }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export default ExContProvider01;

//커스텀 훅으로 설정
export const useGlobal = () => useContext(GlobalContext);